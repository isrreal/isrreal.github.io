#!/usr/bin/env python3
"""Run local browser QA. Requires Playwright and an installed Chromium browser.

Example: python3 scripts/browser_qa.py --browser /opt/brave.com/brave/brave
Start python3 -m http.server 8765 --bind 127.0.0.1 separately.
External requests are blocked: this check does not send analytics events.
"""
import argparse
import json
from pathlib import Path
from playwright.sync_api import expect, sync_playwright

ROOT = Path(__file__).resolve().parent.parent


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--browser', required=True)
    parser.add_argument('--url', default='http://127.0.0.1:8765')
    parser.add_argument('--screenshots', default='/tmp/portfolio-qa')
    args = parser.parse_args()
    artifacts = Path(args.screenshots)
    artifacts.mkdir(parents=True, exist_ok=True)
    routes = ['/', '/404.html'] + ['/'+str(p.relative_to(ROOT)) for p in sorted((ROOT/'projetos').rglob('*.html'))]
    routes += ['/en'+path for path in routes.copy()]
    errors = []
    visits = 0
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(executable_path=args.browser, headless=True,
                    args=['--no-sandbox','--disable-dev-shm-usage'])
        context = browser.new_context(reduced_motion='reduce')
        context.route('https://**/*', lambda route: route.abort())
        context.add_init_script('window.qaEvents=[];window.plausible=(name,opts)=>window.qaEvents.push({name,...opts})')
        page = context.new_page()
        page.on('pageerror', lambda error: errors.append(str(error)))
        for width in (360,1440):
            page.set_viewport_size({'width':width,'height':950})
            for route in routes:
                response = page.goto(args.url+route, wait_until='networkidle')
                assert response.status == 200, (route,response.status)
                assert page.locator('h1').count() == 1, route
                assert page.locator('html').get_attribute('lang') == ('en' if route.startswith('/en/') else 'pt-BR'), route
                for expanded in (False,True):
                    if expanded: page.locator('details').evaluate_all('(nodes)=>nodes.forEach(n=>n.open=true)')
                    dimensions = page.evaluate('({viewport:innerWidth,width:document.documentElement.scrollWidth})')
                    assert dimensions['width'] <= width+1, (route,width,expanded,dimensions)
                visits += 1
        for width in (320,360,1440):
            page.set_viewport_size({'width':width,'height':950})
            for route,name in [('/','home-pt'),('/en/','home-en'),('/projetos/face-clock-evoluir/','face-case'),('/en/projetos/face-clock-evoluir/tecnico.html','face-tech-en')]:
                page.goto(args.url+route,wait_until='networkidle')
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth+1'), (route,width)
                page.screenshot(path=str(artifacts/f'{name}-{width}.png'),full_page=True)
        # Keyboard focus, menu and language navigation with query/hash preserved.
        page.set_viewport_size({'width':360,'height':950})
        page.goto(args.url+'/',wait_until='networkidle')
        page.keyboard.press('Tab')
        assert page.locator('.skip-link').evaluate('(el)=>el===document.activeElement')
        page.keyboard.press('Enter')
        page.locator('.nav-toggle').click()
        assert page.locator('.nav-toggle').get_attribute('aria-expanded') == 'true'
        page.keyboard.press('Escape')
        assert page.locator('.nav-toggle').get_attribute('aria-expanded') == 'false'
        page.goto(args.url+'/?utm_source=qa&utm_campaign=portfolio#curriculo',wait_until='networkidle')
        assert page.locator('.nav-menu a[href="#projetos"]').count() == 1
        language = page.locator('.language-toggle')
        assert 'utm_source=qa' in language.get_attribute('href')
        assert '#curriculo' in language.get_attribute('href')
        language.click()
        page.wait_for_url('**/en/?utm_source=qa&utm_campaign=portfolio#curriculo')
        assert page.locator('html').get_attribute('lang') == 'en'
        assert '/assets/israel-cv-english.pdf?' in page.locator('[data-resume-action="open"]').first.get_attribute('href')
        page.locator('.language-toggle').click()
        page.wait_for_url('**/?utm_source=qa&utm_campaign=portfolio#curriculo')
        assert page.locator('html').get_attribute('lang') == 'pt-BR'
        # Custom events, without real network or any personal destination properties.
        page.goto(args.url+'/',wait_until='networkidle')
        event_links = ['a[href^="mailto:"]', 'a[href*="linkedin.com"]',
                       '[data-resume-action="open"]', '[data-resume-action="download"]',
                       '.hero-actions a[href*="face-clock-evoluir"]',
                       'a[href*="face-clock-evoluir/tecnico.html"]', '.language-toggle']
        for selector in event_links:
            link = page.locator(selector).first
            link.evaluate("el=>{el.addEventListener('click',e=>e.preventDefault(),{once:true});el.click()}")
        names = page.evaluate('qaEvents.map(e=>e.name)')
        assert {'email_click','linkedin_click','cv_open','cv_download','project_open',
                'technical_evidence_open','language_change'} <= set(names), names
        assert '@' not in page.evaluate('JSON.stringify(qaEvents)'), 'PII in event properties'
        page.goto(args.url+'/projetos/dominacao-romana-tripla/#demonstracao',wait_until='networkidle')
        assert page.locator('#demonstracao').get_attribute('open') is not None
        page.locator('#trd-botao-limpar').click()
        expect(page.locator('#trd-score-custo')).to_have_text('0')
        page.locator('#trd-botao-otimo').click()
        expect(page.locator('#trd-score-custo')).to_have_text('8')
        # No-JavaScript English content and language/technical routes still work.
        nojs = browser.new_context(java_script_enabled=False, viewport={'width':360,'height':950})
        nojs.route('https://**/*',lambda route:route.abort())
        plain = nojs.new_page()
        plain.goto(args.url+'/en/',wait_until='networkidle')
        assert 'research' in plain.locator('h1').inner_text()
        assert 'experimental integration of LLMs' in plain.locator('#tieta').inner_text()
        assert plain.locator('.language-toggle').get_attribute('href') == '/'
        assert plain.locator('a[href*="/en/projetos/face-clock-evoluir/tecnico.html"]').count() > 0
        browser.close()
    if errors: raise AssertionError(errors)
    print(json.dumps({'page_viewports':visits,'widths':[320,360,1440],
          'checks':['overflow closed/open','JS errors','static PT/EN','no-JS','keyboard/menu',
                    'language/UTM/hash','CV links','analytics/privacy','disclosure anchor','interactive graph'],
          'screenshots':str(artifacts)},ensure_ascii=False))


if __name__ == '__main__':
    main()
