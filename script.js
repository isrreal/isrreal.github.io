const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('.nav');
const header = document.querySelector('.site-header');
const year = document.querySelector('#current-year');

function setTheme(theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem('portfolio-theme', theme);
  } catch {
    // O tema continua funcional quando o armazenamento está indisponível.
  }
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
  );
}

let savedTheme;
try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch {
  savedTheme = null;
}
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function closeMenu() {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Abrir menu');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navMenu.classList.toggle('open', !isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target)) closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 720) closeMenu();
});

window.addEventListener(
  'scroll',
  () => header.classList.toggle('scrolled', window.scrollY > 12),
  { passive: true }
);

const navigationLinks = [...navMenu.querySelectorAll('a[href^="#"]')];
const sections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    navigationLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${visibleSection.target.id}`;
      link.setAttribute('aria-current', String(isCurrent));
    });
  },
  { rootMargin: '-20% 0px -65%', threshold: [0.1, 0.5] }
);

sections.forEach((section) => sectionObserver.observe(section));

year.textContent = new Date().getFullYear();
