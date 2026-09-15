const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('.nav');
const header = document.querySelector('.site-header');
const year = document.querySelector('#current-year');
const languageToggle = document.querySelector('.language-toggle');
const languageCode = document.querySelector('.language-code');
const languageName = document.querySelector('.language-label');
const page = root.dataset.page;

const interfaceText = {
  pt: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    lightTheme: 'Ativar tema claro',
    darkTheme: 'Ativar tema escuro',
    switchLanguage: 'Mudar para inglês',
    languageName: 'Idioma',
  },
  en: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lightTheme: 'Use light theme',
    darkTheme: 'Use dark theme',
    switchLanguage: 'Switch to Portuguese',
    languageName: 'Language',
  },
};

const englishPages = {
  home: {
    title: 'Israel Souza Ferreira | Data Scientist and ML Engineer',
    description: 'Portfolio of Israel Souza Ferreira — a computer scientist with experience in applied research, experimentation, computer vision, and ML-enabled systems.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="#sobre"]', 'Profile'],
      ['.nav-menu a[href="#experiencia"]', 'Experience'],
      ['.nav-menu a[href="#projetos"]', 'Projects'],
      ['.nav-menu a[href="#competencias"]', 'Skills'],
      ['.nav-menu a[href="#curriculo"]', 'Résumé'],
      ['.nav-menu a[href="#contato"]', 'Contact'],
      ['.hero .eyebrow', 'Data Science · ML Engineering'],
      ['.hero h1', 'Applied research and ML engineering.'],
      ['.hero-description', 'I am <strong>Israel Souza Ferreira</strong>, a computer scientist who graduated from UFC Quixadá on August 19, 2026. I work in applied research and ML systems development.'],
      ['.hero-actions a:nth-child(1)', 'Selected projects'],
      ['.hero-actions a:nth-child(2)', 'Résumé PDF'],
      ['.hero-meta li:nth-child(1)', '<svg class="location-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg> Fortaleza, Ceará, Brazil'],
      ['.hero-meta li:nth-child(2)', '● Open to opportunities'],
      ['.first-impression-card .section-kicker', 'Technical profile'],
      ['.first-impression-card h2', 'Modeling and engineering'],
      ['.proof-list li:nth-child(1)', '<strong>Modeling:</strong> statistics, IRT, PyTorch, and experimental evaluation.'],
      ['.proof-list li:nth-child(2)', '<strong>Engineering:</strong> computer vision, APIs, PostgreSQL, Docker, and CI.'],
      ['.proof-list li:nth-child(3)', '<strong>Method:</strong> baselines, ablations, and benchmarks.'],
      ['.first-impression-card .text-link', 'See experience →'],
      ['.impact-grid article:nth-child(1) span', 'automated tests in Face Clock'],
      ['.impact-grid article:nth-child(2) span', 'facial p95 on CPU, with one request*'],
      ['.impact-grid article:nth-child(3) span', 'graphs evaluated in the thesis'],
      ['.impact-note', '* Public data and a controlled environment; calibration and operational validation depend on the context of use.'],
      ['#sobre .section-kicker', 'Layered reading'],
      ['#sobre h2', 'Start with the essentials. Go deeper when it matters.'],
      ['#sobre .lead', 'Each layer answers a different question.'],
      ['.reading-path li:nth-child(1) > span', '01 · now'],
      ['.reading-path li:nth-child(1) > strong', 'Profile and results'],
      ['.reading-path li:nth-child(1) p', 'Experience, impact, and stack on this page.'],
      ['.reading-path li:nth-child(1) a', 'See experience →'],
      ['.reading-path li:nth-child(2) > span', '02 · 3 minutes'],
      ['.reading-path li:nth-child(2) > strong', 'Case overviews'],
      ['.reading-path li:nth-child(2) p', 'Problem, approach, impact, and responsibilities.'],
      ['.reading-path li:nth-child(2) a', 'Choose a case →'],
      ['.reading-path li:nth-child(3) > span', '03 · deep dive'],
      ['.reading-path li:nth-child(3) > strong', 'Technical evidence'],
      ['.reading-path li:nth-child(3) p', 'Protocols, benchmarks, architecture, and limitations.'],
      ['.reading-path li:nth-child(3) a', 'See an example →'],
      ['#experiencia .section-kicker', 'Experience'],
      ['#experiencia .experience-layout > div:first-child h2', 'Research and systems development.'],
      ['.experience-stack .experience-card:nth-child(1) h3', 'R&amp;D Researcher'],
      ['.experience-stack .experience-card:nth-child(1) .experience-company', 'Tieta.ai · Research and Innovation Training Program · Fellow · Remote'],
      ['.experience-stack .experience-card:nth-child(1) .experience-period', 'Jul 2026 — present'],
      ['.experience-stack .experience-card:nth-child(1) .experience-list li:nth-child(1)', 'Contributed to research software development and maintenance.'],
      ['.experience-stack .experience-card:nth-child(1) .experience-list li:nth-child(2)', 'Implemented validation and automated tests.'],
      ['.experience-stack .experience-card:nth-child(1) .experience-list li:nth-child(3)', 'Automated technical activities to support reproducibility.'],
      ['.experience-stack .experience-card:nth-child(1) .experience-list li:nth-child(4)', 'Documented solutions and versioned changes for traceability and governance.'],
      ['.experience-stack .experience-card:nth-child(1) .tag-list li:nth-child(1)', 'Software Engineering'],
      ['.experience-stack .experience-card:nth-child(1) .tag-list li:nth-child(2)', 'Validation'],
      ['.experience-stack .experience-card:nth-child(1) .tag-list li:nth-child(3)', 'Automated Testing'],
      ['.experience-stack .experience-card:nth-child(1) .tag-list li:nth-child(4)', 'Automation'],
      ['.experience-stack .experience-card:nth-child(1) .tag-list li:nth-child(5)', 'Technical Documentation'],
      ['.experience-stack .experience-card:nth-child(1) .tag-list li:nth-child(6)', 'Version Control'],
      ['.experience-stack .experience-card:nth-child(2) h3', 'Machine Learning Researcher'],
      ['.experience-stack .experience-card:nth-child(2) .experience-company', 'Tieta.ai · CNPq RHAE Fellow · Part-time'],
      ['.experience-stack .experience-card:nth-child(2) .experience-period', 'Apr 2025 — Jun 2026'],
      ['.experience-stack .experience-card:nth-child(2) .experience-list li:nth-child(1)', 'Developed and evaluated solutions in applied Machine Learning research.'],
      ['.experience-stack .experience-card:nth-child(2) .experience-list li:nth-child(2)', 'Ran experiments and analyzed results to support technical decisions.'],
      ['.experience-stack .experience-card:nth-child(2) .experience-list li:nth-child(3)', 'Established reproducible development and evaluation processes.'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(1)', 'Applied Research'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(2)', 'Machine Learning'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(3)', 'Experimentation'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(4)', 'Reproducibility'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(5)', 'Technical Evaluation'],
      ['#fc-exp-cargo', 'Full stack developer and machine learning engineer'],
      ['#fc-exp-empresa', 'Independent consulting · Educational institution · Remote'],
      ['#fc-exp-periodo', '2026 — present'],
      ['#fc-exp-lead', 'Developed a facial-attendance and medical-document triage system, from modeling to preparation for CPU deployment.'],
      ['#fc-exp-facts div:nth-child(1) dt', '574'],
      ['#fc-exp-facts div:nth-child(1) dd', 'automated tests'],
      ['#fc-exp-facts div:nth-child(2) dd', 'facial p95 on CPU'],
      ['#fc-exp-facts div:nth-child(3) dd', 'server without a GPU'],
      ['#experiencia-face-clock .tag-list li:nth-child(1)', 'Computer Vision'],
      ['#experiencia-face-clock .experience-links a:nth-child(1)', 'Overview · 3 min <span class="card-link-arrow" aria-hidden="true">→</span>'],
      ['#experiencia-face-clock .experience-links a:nth-child(2)', 'Technical evidence →'],
      ['#experiencia-face-clock .experience-links a:nth-child(3)', 'Public repository →'],
      ['.experience-stack .experience-card:nth-child(4) h3', 'Teaching Assistant — Algorithms, Calculus, and Pre-Calculus'],
      ['.experience-stack .experience-card:nth-child(4) .experience-company', 'Federal University of Ceará — Quixadá Campus · On-site'],
      ['.experience-stack .experience-card:nth-child(4) .experience-list li', 'Supported undergraduate classes in algorithms, data structures, complexity, and calculus.'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(1)', 'Data Structures'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(2)', 'Algorithms'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(3)', 'Complexity'],
      ['#projetos .section-kicker', 'Selected projects'],
      ['#projetos .section-heading h2', 'Problems, solutions, and code.'],
      ['#projetos .section-heading .text-link', 'All repositories →'],
      ['#projetos .project-card:nth-child(1) .status', 'Final acceptance testing'],
      ['#projetos .project-card:nth-child(1) .project-overline', 'Flagship project'],
      ['#projetos .project-card:nth-child(1) h3', 'Face Clock Evoluir'],
      ['#projetos .project-card:nth-child(1) > p:not(.project-overline)', 'Facial attendance for an educational institution. I developed models, backend, data, security, tests, and the deployment package.'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(1)', 'Overview · 3 min <span class="card-link-arrow" aria-hidden="true">→</span>'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(2)', 'Technical evidence →'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(3)', 'Public repository →'],
      ['#projetos .project-card:nth-child(2) .status', 'Completed'],
      ['#projetos .project-card:nth-child(2) h3', 'Triple Roman Domination'],
      ['#projetos .project-card:nth-child(2) > p', 'Combinatorial-optimization thesis: GA and ACO metaheuristics, an ILP formulation correction, and evaluation on 362 graphs.'],
      ['#projetos .project-card:nth-child(2) .tag-list li:nth-child(3)', 'Graph Theory'],
      ['#projetos .project-card:nth-child(2) .tag-list li:nth-child(4)', 'Metaheuristics'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(1)', 'Overview · 3 min <span class="card-link-arrow" aria-hidden="true">→</span>'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(2)', 'Technical evidence →'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(3)', 'Code →'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(4)', 'Read thesis →'],
      ['#projetos .project-card:nth-child(3) .status', 'In development'],
      ['#projetos .project-card:nth-child(3) h3', 'Brazilian Emergency Aid — data engineering'],
      ['#projetos .project-card:nth-child(3) > p', 'Chunked ingestion through binary <code>COPY</code> over 31.6&nbsp;GB; instrumentation isolated the cause of memory growth (r = 0.99).'],
      ['#projetos .project-card:nth-child(3) .project-links a', 'Code and documentation →'],
      ['#projetos .project-card:nth-child(1) .tag-list li:nth-child(1)', 'Computer Vision'],
      ['#competencias .section-kicker', 'Skills'],
      ['#competencias h2', 'Tools and methods.'],
      ['#competencias .skill-group:nth-child(1) h3', 'Programming and data'],
      ['#competencias .skill-group:nth-child(2) h3', 'Modeling and evaluation'],
      ['#competencias .skill-group:nth-child(2) p', 'PyTorch, Scikit-learn, SciPy, cross-validation, calibration, ablation'],
      ['#competencias .skill-group:nth-child(3) h3', 'Applied ML'],
      ['#competencias .skill-group:nth-child(3) p', 'Computer vision, OCR, LLMs, DSPy, time series, vector search'],
      ['#competencias .skill-group:nth-child(4) h3', 'Application engineering'],
      ['#competencias .skill-group:nth-child(4) p', 'FastAPI, PostgreSQL, pgvector, ONNX Runtime, Docker, CI, and pytest'],
      ['#curriculo .section-kicker', 'Résumé'],
      ['#curriculo h2', 'One-page résumé.'],
      ['#curriculo .contact-card > div:first-child > p:last-child', 'Full academic record on Lattes.'],
      ['#curriculo .contact-actions a:nth-child(1)', 'Open PDF'],
      ['#curriculo .contact-actions a:nth-child(2)', 'Download PDF'],
      ['#curriculo .contact-actions a:nth-child(3)', 'LaTeX source'],
      ['#curriculo .contact-actions a:nth-child(4)', 'Lattes Curriculum (CNPq)'],
      ['#contato .section-kicker', 'Contact'],
      ['#contato h2', 'Let’s talk.'],
      ['#contato .contact-card > div:first-child > p:last-child', 'Seeking opportunities in Data Science, ML Engineering, and Applied ML.'],
      ['#contato .contact-actions a:nth-child(1)', 'Send email'],
      ['footer .footer-content > p:last-child', 'Built with HTML, CSS, and JavaScript.'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Home page'],
      ['.hero-meta', 'aria-label', 'Professional information'],
      ['.first-impression-card', 'aria-label', 'Professional profile in twenty seconds'],
      ['.impact-band', 'aria-label', 'Highlighted results'],
      ['.reading-path', 'aria-label', 'Portfolio reading progression'],
      ['#experiencia .tag-list', 'aria-label', 'Experience technologies'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list', 'aria-label', 'Experience technologies'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list', 'aria-label', 'Teaching assistantship topics'],
      ['#projetos .project-card:nth-child(1) .tag-list', 'aria-label', 'Project technologies'],
      ['#projetos .project-card:nth-child(2) .tag-list', 'aria-label', 'Project technologies'],
      ['#experiencia-face-clock .experience-facts', 'aria-label', 'Consulting engagement summary'],
      ['#experiencia-face-clock .tag-list', 'aria-label', 'Consulting technologies'],
      ['#curriculo .contact-actions', 'aria-label', 'Résumé actions'],
    ],
  },
  '404': {
    title: 'Page not found | Israel Souza Ferreira',
    description: 'Page not found on Israel Souza Ferreira’s portfolio.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="/#projetos"]', 'Projects'],
      ['.nav-menu a[href="/#curriculo"]', 'Résumé'],
      ['.nav-menu a[href="/#contato"]', 'Contact'],
      ['.case-hero .eyebrow', 'Error 404'],
      ['.case-title', 'This page does not exist.'],
      ['#erro-texto', 'The address may have changed, or the link you followed is out of date. The projects are all one click away from here.'],
      ['.hero-actions a:nth-child(1)', 'Go to the homepage'],
      ['.hero-actions a:nth-child(2)', 'View projects'],
      ['footer .text-link', 'Back to portfolio'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
    ],
  },
  'face-clock': {
    title: 'Face Clock Evoluir | Israel Souza Ferreira',
    description: 'Face Clock Evoluir: facial-biometric attendance and medical-document triage, presented from business impact to threshold, frame-count, FAISS, and concurrency experiments.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href="tecnico.html"]', 'Technical breakdown'],
      ['.nav-menu a[href*="face-clock-evoluir-public"]', 'Public repository'],
      ['.case-breadcrumb', '← Back to projects'],
      ['.case-hero .eyebrow', 'Applied product · Computer vision · Under acceptance testing'],
      ['.case-title', 'Face Clock Evoluir'],
      ['.case-intro', 'Attendance system for an educational institution, with face recognition, location validation, and medical-document triage by phone.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'Understand the system'],
      ['.case-hero .hero-actions a:nth-child(2)', 'Technical details'],
      ['.case-hero .hero-actions a:nth-child(3)', 'Public repository'],
      ['#problema .section-kicker', 'The problem'],
      ['#problema h2', 'Facial attendance and work-hour management.'],
      ['#problema .case-prose p:nth-child(1)', 'Recognize the employee and validate their location in a simple daily workflow.'],
      ['#problema .case-prose p:nth-child(2)', 'Individual and kiosk check-ins, integrated with shifts, hour balances, and medical-document submission.'],
      ['#problema .case-prose p:nth-child(3)', 'Out-of-schedule punches are recorded and flagged without blocking them.'],
      ['#como-funciona .section-kicker', 'How it works'],
      ['#como-funciona h2', 'From camera to attendance record.'],
      ['.flow-step:nth-child(1) strong', 'Capture'],
      ['.flow-step:nth-child(2) strong', 'Representation'],
      ['.flow-step:nth-child(3) strong', 'Search'],
      ['.flow-step:nth-child(3) p', 'pgvector compares embeddings through cosine similarity in both 1:1 and 1:N modes.'],
      ['.flow-step:nth-child(4) strong', 'Context'],
      ['.flow-step:nth-child(4) p', 'Geofencing, liveness checks, and replay protection strengthen the validity of each attempt.'],
      ['.flow-step:nth-child(5) strong', 'Record'],
      ['.flow-step:nth-child(5) p', 'Punch persistence and shift-deviation flags.'],
      ['#maquina-estados .section-kicker', 'Kiosk behavior'],
      ['#maquina-estados h2', 'State-machine validation.'],
      ['#maquina-estados .case-prose > p:nth-child(1)', 'Each punch is validated against the previous state.'],
      ['#maquina-estados .case-prose > p:nth-child(2)', 'After face and location validation, <code>PontoFSM</code> allows direct clock-out, repeated breaks, and clock-out during a break.'],
      ['#fsm-title', 'Attendance-record automaton'],
      ['#fsm-description', 'States are shown as circles. The main path goes from no punch to clock-in, break begins, return, and clock-out. There is a shortcut from clock-in to clock-out, a transition from return to another break, and a direct clock-out from a break.'],
      ['#fsm-empty-line-1', 'No'],
      ['#fsm-empty-line-2', 'punch'],
      ['#fsm-entry', 'Clock-in'],
      ['#fsm-break-line-1', 'Break'],
      ['#fsm-break-line-2', 'begins'],
      ['#fsm-return', 'Return'],
      ['#fsm-exit', 'Clock-out'],
      ['#fsm-direct-label', 'direct exit'],
      ['#fsm-break-again-label', 'another break'],
      ['#fsm-exit-on-break-label', 'exit during break'],
      ['#fsm-mobile-direct-title', 'Shortcut:'],
      ['#fsm-mobile-direct-copy', 'Clock-in → Clock-out (direct exit)'],
      ['#fsm-mobile-break-title', 'Repetition:'],
      ['#fsm-mobile-break-copy', 'Return → Break begins (another break)'],
      ['#fsm-mobile-exit-break-title', 'Early end:'],
      ['#fsm-mobile-exit-break-copy', 'Break begins → Clock-out (exit during break)'],
      ['#fsm-legend-state', 'Circle:'],
      ['#fsm-legend-state-copy', 'state of the last punch'],
      ['#fsm-legend-arrow', 'Arrow:'],
      ['#fsm-legend-arrow-copy', 'next allowed punch'],
      ['#fsm-legend-branch', 'Curved path:'],
      ['#fsm-legend-branch-copy', 'allowed alternative path'],
      ['#arquitetura .section-kicker', 'Architecture'],
      ['#arquitetura h2', 'Components separated by responsibility.'],
      ['.architecture-card:nth-child(1) > span', 'Interface'],
      ['.architecture-card:nth-child(1) h3', 'Web and kiosk mode'],
      ['.architecture-card:nth-child(1) p', 'Camera and location capture, responsive flows, and secure device provisioning.'],
      ['.architecture-card:nth-child(2) > span', 'Application'],
      ['.architecture-card:nth-child(2) p', 'Authentication, business rules, shifts, hour balances, and APIs organized into services.'],
      ['.architecture-card:nth-child(3) > span', 'Data'],
      ['.architecture-card:nth-child(3) p', 'Transactional data and vector search in the same database, with migrations and controlled persistence.'],
      ['.architecture-card:nth-child(4) > span', 'Machine learning'],
      ['.architecture-card:nth-child(4) h3', 'Inference service'],
      ['.architecture-card:nth-child(4) p', 'Face recognition and medical-document classification isolated from the transactional core.'],
      ['#atestados .section-kicker', 'Beyond biometrics'],
      ['#atestados h2', 'Medical-document triage.'],
      ['#resumo .section-kicker', 'Summary'],
      ['#qualidade .section-kicker', 'Quality'],
      ['#qualidade h2', 'Delivery-package audit.'],
      ['#qualidade .case-result:nth-child(2) span', 'portable inference, with optional acceleration when available'],
      ['#qualidade .case-result:nth-child(3) span', 'secure remote access without exposing the backend directly'],
      ['#status .section-kicker', 'Current status'],
      ['#status h2', 'In final acceptance testing.'],
      ['.case-cta .section-kicker', 'Public showcase'],
      ['.case-cta h2', 'Architecture and documentation.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'See the technical breakdown'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open on GitHub'],
      ['.case-cta .contact-actions a:nth-child(3)', 'View other projects'],
      ['#face-case-intro', 'Attendance system for an educational institution, with face recognition, location validation, and medical-document triage by phone.'],
      ['#resumo h2', 'The essentials.'],
      ['#resumo .case-list li:nth-child(1)', '<strong>Problem:</strong> record attendance without cards, passwords, or queues, including off-site work.'],
      ['#resumo .case-list li:nth-child(2)', '<strong>Responsibility:</strong> models, backend, data, security, testing, and preparation for deployment.'],
      ['#resumo .case-list li:nth-child(3)', '<strong>Solution:</strong> 1:N biometrics, geofencing, FastAPI, PostgreSQL/pgvector, and neural + OCR triage.'],
      ['#resumo .case-list li:nth-child(4)', '<strong>Evidence:</strong> 574 tests; four facial-recognition decisions measured; five medical-document classifiers compared; delivery package audited.'],
      ['#resumo .case-list li:nth-child(5)', '<strong>Status:</strong> working system in final acceptance testing.'],
      ['.flow-step:nth-child(1) p', 'Three frames for liveness checks.'],
      ['.flow-step:nth-child(2) p', 'YuNet + SFace turn each face into a normalized 128-dimensional vector.'],
      ['#evidencias .section-kicker', 'Decisions through experiment'],
      ['#evidencias h2', 'Four measurements changed the system.'],
      ['#evidencias article:nth-child(1) span', 'Risk'],
      ['#evidencias article:nth-child(1) p', 'The 1:1 verification threshold accepted too many unknowns in 1:N. Calibration reduced the error on the reference data.'],
      ['#evidencias article:nth-child(2) span', 'Latency'],
      ['#evidencias article:nth-child(2) p', 'Accuracy was unchanged from 1 to 8 frames. Three retain the median and motion check.'],
      ['#evidencias article:nth-child(3) span', 'Architecture'],
      ['#evidencias article:nth-child(3) strong', 'FAISS: not adopted'],
      ['#evidencias article:nth-child(3) p', 'Exact search: 0.076&nbsp;ms over 1,000 vectors. HNSW was faster, but its recall@1 of 0.915 favored retaining exact search.'],
      ['#evidencias article:nth-child(4) span', 'Concurrency'],
      ['#evidencias article:nth-child(4) p', 'Simultaneous punches caused failures in the shared model. Serializing inference fixed the race.'],
      ['#evidencias .evidence-ladder-link', 'See protocols, tables, and limitations →'],
      ['#atestado-lead', 'A neural network and OCR prioritize the queue for human review.'],
      ['#atestado-resumo', 'Held-out test: 87.5% accuracy and seven fewer false positives at the same recall. Final approval is human.'],
      ['#atestado-rotulos', 'Human feedback supports retraining with labeling rules to avoid contradictions.'],
      ['#qualidade .case-prose > p', 'I installed and audited the client delivery package, identifying incorrect volume permissions and a model that differed from the validated one.'],
      ['#qualidade .case-result:nth-child(1) span', 'automated tests passing in the Docker pipeline'],
      ['#status .case-prose p:nth-child(1)', 'Contracted, functional system in final validation before deployment. The public repository documents architecture and decisions without exposing client code or data.'],
      ['footer .text-link', 'Back to portfolio'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
      ['.case-meta', 'aria-label', 'Project information'],
      ['.system-flow', 'aria-label', 'Flow from facial recognition to attendance record'],
      ['.state-machine', 'aria-label', 'Punch flow: no punch leads to clock-in; clock-in leads to break or clock-out; a break leads to return or clock-out; return leads to another break or clock-out.'],
      ['#qualidade .case-results', 'aria-label', 'Engineering indicators'],
      ['#resumo .case-list', 'aria-label', 'Project summary'],
    ],
  },
  'face-clock-tecnico': {
    title: 'Face Clock Evoluir — technical breakdown | Israel Souza Ferreira',
    description: 'Face Clock Evoluir experiments: facial threshold, frame count, FAISS, concurrency, classification baselines, security, and production benchmarks.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="index.html"]', 'Case study'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href*="face-clock-evoluir-public"]', 'Public repository'],
      ['.case-breadcrumb', '← Back to the case study'],
      ['.case-hero .eyebrow', 'Technical deep dive · Face Clock Evoluir'],
      ['.case-title', 'The technical structure in detail.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'See the classification experiment'],
      ['.case-hero .hero-actions a:nth-child(2)', 'See the model diagnosis'],
      ['.case-hero .hero-actions a:nth-child(3)', 'See the freeze-depth experiment'],
      ['.case-hero .hero-actions a:nth-child(4)', 'See engineering and security'],
      ['.case-meta li:nth-child(1)', 'Controlled experiments'],
      ['.case-meta li:nth-child(2)', 'Baseline comparison'],
      ['.case-meta li:nth-child(5)', 'Application security'],
      ['#atestados .section-kicker', 'Classification experiment'],
      ['#atestados h2', 'A ladder of baselines, from trivial to hybrid.'],
      ['#atestado-lead', 'I compared trivial, classical, neural, and hybrid classifiers under the same selection and test protocol.'],
      ['#atestado-dados', 'Separate service with selective fine-tuning. Versioned, stratified split generated with a fixed seed: 297 training, 64 validation, and 64 test documents. The test set was excluded from early stopping and hyperparameter selection.'],
      ['#atestado-metodo', 'Hyperparameters were selected by grid search with stratified five-fold cross-validation <em>within training</em>, optimizing F1 for the certificate class (31% of the data). The majority baseline reaches 68.8% accuracy and zero F1; the test set was used only for final measurement.'],
      ['#tabela-baselines-titulo', 'Baseline ladder on the held-out test set'],
      ['#tabela-baselines-cabecalho', '<th scope="col">Approach</th><th scope="col">Accuracy</th><th scope="col">Precision</th><th scope="col">Recall</th><th scope="col">F1</th>'],
      ['#tabela-linha-dummy', '<th scope="row">Majority class (floor)</th><td>0.688</td><td>0.000</td><td>0.000</td><td>0.000</td>'],
      ['#tabela-linha-hog-svm', '<th scope="row">HOG + linear SVM</th><td>0.750</td><td>0.583</td><td>0.700</td><td>0.636</td>'],
      ['#tabela-linha-hog-rbf', '<th scope="row">HOG + RBF SVM</th><td>0.797</td><td>0.733</td><td>0.550</td><td>0.629</td>'],
      ['#tabela-linha-cnn', '<th scope="row">EfficientNet, original head</th><td>0.766</td><td>0.609</td><td>0.700</td><td>0.651</td>'],
      ['#tabela-linha-embeddings', '<th scope="row">Embeddings + Logistic Regression</th><td>0.875</td><td>0.875</td><td>0.700</td><td>0.778</td>'],
      ['#tabela-baselines-nota', '64 test documents, evaluated once. Precision, recall, and F1 refer to the certificate class; the threshold is the default 0.5.'],
      ['#atestados .case-result:nth-child(1) span', 'F1 for the certificate class of the winning solution: EfficientNet as an embedding extractor + Logistic Regression'],
      ['#atestados .case-result:nth-child(2) span', 'accuracy of the hybrid solution on the held-out test set, above the network’s original head (0.766)'],
      ['#atestados .case-result:nth-child(3) span', 'false positives relative to the original neural head, preserving the same recall of 0.700'],
      ['#atestado-hog', 'HOG + SVM reached F1 0.636, below the original neural head (0.651). The selected solution combines EfficientNet’s 1,280-dimensional embeddings with Logistic Regression. OCR provides rule-based review.'],
      ['#atestado-precisao', 'Both heads recover 14 of 20 certificates, while false positives fall from 9 to 2. ROC AUC rises from 0.814 to 0.892; PR AUC, from 0.697 to 0.823.'],
      ['#atestado-ressalvas', 'The 64 test documents do not support rankings based on small F1 differences. The three embedding classifiers scored 0.904–0.908 in cross-validation; HOG rankings changed on the test set. Since the backbone was fine-tuned on training images, embedding cross-validation is optimistic. Comparisons across families must use the held-out test.'],
      ['#metodo .section-kicker', 'Investigation method'],
      ['#metodo h2', 'Measure before concluding.'],
      ['#metodo .case-prose .lead', 'I investigated OCR failures and identified images loaded with incorrect orientation.'],
      ['#metodo .case-result:nth-child(1) span', 'documents triaged automatically using objective quality signals'],
      ['#metodo .case-result:nth-child(2) span', 'images reached the model rotated because of an ignored EXIF metadata tag'],
      ['#metodo .case-result:nth-child(3) span', 'lines removed after concluding that an experiment\u2019s premise did not hold'],
      ['#metodo .case-list li:nth-child(1)', '<strong>EXIF orientation:</strong> the pipeline ignored the <code>Orientation</code> tag and sent rotated documents to the network and OCR. In the checked samples, orientation normalization restored document identification.'],
      ['#metodo .case-list li:nth-child(2)', '<strong>Hypothesis validation:</strong> the orientation detector flagged 45% of the data; 91 of 109 “180°” cases were screenshots. EXIF metadata distinguished actual rotation from detector noise.'],
      ['#metodo .case-list li:nth-child(3)', '<strong>Training/inference consistency:</strong> I centralized normalization in image loading and the training loader to avoid <em>train/serve skew</em>. After retraining, the classifier effect was neutral.'],
      ['#metodo .case-list li:nth-child(4)', '<strong>Paired metrics:</strong> I rejected Jensen-Shannon after demonstrating zero marginal divergence in a case with 100% document-level disagreement. I adopted document-by-document comparisons.'],
      ['#diagnostico .section-kicker', 'Experimental diagnosis'],
      ['#diagnostico h2', 'Hypotheses evaluated through experiments.'],
      ['#diagnostico .case-prose .lead', 'I investigated the classifier’s limited learning through controlled experiments, changing one variable at a time.'],
      ['#diagnostico .case-result:nth-child(1) span', 'hypotheses ruled out by experiment: capacity, overfitting, and loss regularization'],
      ['#diagnostico .case-result:nth-child(2) span', 'epochs for the same parameters to fully fit a subset, refuting a lack of capacity'],
      ['#diagnostico .case-result:nth-child(3) span', 'percentage points of validation accuracy, across two causes isolated by experiment'],
      ['#diagnostico .case-list li:nth-child(1)', '<strong>Capacity:</strong> without regularization, the same parameters fit a subset in four epochs. The memorization test ruled out insufficient capacity.'],
      ['#diagnostico .case-list li:nth-child(2)', '<strong>Label smoothing:</strong> removing it did not raise the observed confidence ceiling, ruling out the initial hypothesis.'],
      ['#diagnostico .case-list li:nth-child(3)', '<strong>Threshold:</strong> I simulated the pipeline across nine values. Lower thresholds improved the isolated classifier but worsened the final result by favoring the less accurate component.'],
      ['#diagnostico .case-list li:nth-child(4)', '<strong>Augmentation:</strong> removing horizontal flipping alone had no effect. Reducing the total transformation load raised validation accuracy by thirteen percentage points and extended learning from four to twenty-three epochs.'],
      ['#diagnostico .case-list li:nth-child(5)', '<strong>Early stopping:</strong> accuracy saturated on the small validation set. I compared three criteria in isolated runs; the selected criterion allowed training for three times longer before stopping.'],
      ['#diagnostico .case-list li:nth-child(6)', '<strong>Reevaluation:</strong> after the fixes, the network crossed the threshold on 23.7% of documents, up from 0.6%. Agreement with OCR moved from chance to moderate, and probability squared error fell below one quarter. I reran existing evaluation tools to revise the conclusion about the network’s contribution.'],
      ['#congelamento .section-kicker', 'Architecture validation'],
      ['#congelamento h2', 'Fine-tuning depth evaluated with 5-fold.'],
      ['#congelamento-lead', 'The training (97%) versus test (70%, 40 images) gap prompted a cross-validation comparison of three unfreezing depths.'],
      ['#congelamento-contexto', 'With ImageNet weights, I compared head only, head + last block, and head + last two blocks. Protocol: stratified 5-fold on 406 training images, up to 30 epochs, patience 7, the same seed and class balancing.'],
      ['#congelamento-svg-titulo', 'Validation accuracy by unfreezing depth, 5-fold'],
      ['#congelamento-svg-desc', 'Column chart with error bars (standard deviation) comparing three configurations: A, 67.0% plus or minus 3.9; B, 74.9% plus or minus 6.7; C, the production configuration, 84.2% plus or minus 1.7.'],
      ['#congelamento-tip-a', 'Configuration A: 67.0% average validation accuracy, discarded.'],
      ['#congelamento-tip-b', 'Configuration B: 74.9% average validation accuracy, discarded.'],
      ['#congelamento-tip-c', 'Configuration C: 84.2% average validation accuracy, kept in the pipeline.'],
      ['#congelamento-valor-a', '67.0%'],
      ['#congelamento-valor-b', '74.9%'],
      ['#congelamento-valor-c', '84.2%'],
      ['#congelamento-cat-a', 'A — head only'],
      ['#congelamento-cat-b', 'B — +1 block'],
      ['#congelamento-cat-c', 'C — +2 blocks (current)'],
      ['#congelamento-status-a', 'discarded'],
      ['#congelamento-status-b', 'discarded'],
      ['#congelamento-status-c', 'kept in the pipeline'],
      ['#congelamento-figura-legenda', 'Mean validation accuracy and standard deviation across five folds.'],
      ['#congelamento .case-result:nth-child(1) span', 'average validation accuracy of the production configuration — the highest and most stable of the three'],
      ['#congelamento .case-result:nth-child(2) span', 'accuracy of the configuration that only trains the classifier head — insufficient capacity for the domain'],
      ['#congelamento .case-result:nth-child(3) span', 'images in the test set that triggered the initial alarm — too much variance to support a conclusion on its own'],
      ['#congelamento-conclusao', 'Unfreezing two blocks retained the best result and lowest variance; one block reached 74.9% ± 6.7%. The training/validation gap was around 10 points in 5-fold, versus 27 on the small test set. Evaluation confirmed the selected architecture and indicated a need for more data, especially non-certificates.'],
      ['#engenharia .section-kicker', 'Engineering and security'],
      ['#engenharia h2', 'Reliability built in layers.'],
      ['#engenharia .case-prose > .lead', 'Validation of identity, session, authorization, device, and biometric attempt.'],
      ['#engenharia .auth-summary .section-kicker', 'In simple terms'],
      ['#engenharia .auth-summary p:nth-child(2)', '<strong>Login generates a signed temporary credential; protected routes validate it before performing any action.</strong>'],
      ['#engenharia .auth-summary code', 'Login → signed JWT → Bearer token → validated claims → authorized route'],
      ['#engenharia .auth-summary p:last-child', 'FastAPI’s <code>OAuth2PasswordBearer</code> standardizes how the API receives the token. In this project, it does not represent social login through Google or Microsoft.'],
      ['#engenharia .case-list li:nth-child(1)', '<strong>JWT with typed claims:</strong> the signed token carries identity, access role, work mode, and expiration without trusting a client-supplied <code>user_id</code>.'],
      ['#engenharia .case-list li:nth-child(2)', '<strong>Persistent logout:</strong> revoked tokens are stored in PostgreSQL, remaining invalid across restarts and multiple application processes.'],
      ['#engenharia .case-list li:nth-child(3)', '<strong>Passwords with bcrypt:</strong> hashes are produced through Passlib with deliberate computational cost; the original password is never stored or recovered.'],
      ['#engenharia .case-list li:nth-child(4)', '<strong>Controlled recovery:</strong> password resets use single-use tokens with expiration and usage tracking.'],
      ['#engenharia .case-list li:nth-child(5)', '<strong>Authorization and anti-IDOR:</strong> beyond authentication, the API verifies whether each user may access a resource, including sensitive medical documents.'],
      ['#engenharia .case-list li:nth-child(6)', '<strong>Provisioned kiosk:</strong> each device uses an API key obtained through PIN activation and brute-force protection; the key is not embedded in public HTML.'],
      ['#engenharia .case-list li:nth-child(7)', '<strong>Protected biometrics:</strong> multiple frames, liveness, a SHA-256 anti-replay fingerprint, and technical controls for biometric and medical data; legal compliance assessment is outside the scope of this project.'],
      ['#engenharia .case-list li:nth-child(8)', '<strong>Restricted deployment:</strong> locally exposed backend, HTTPS tunnel, versioned migrations, and persistent volumes.'],
      ['#entrega .section-kicker', 'Hardware constraint'],
      ['#entrega h2', 'The target server had no GPU.'],
      ['#entrega .case-prose > .lead', 'The target server had Intel HD 4600, 8&nbsp;GB RAM, and no dedicated GPU. The initial image included about 6&nbsp;GB of CUDA and cuDNN unused on that hardware.'],
      ['#entrega .case-prose > p:nth-of-type(2)', 'I measured <strong>disk</strong> and <strong>memory</strong> separately. CUDA drove disk cost; in RAM, the facial package loaded five models to use two, replicated per server process.'],
      ['#entrega .case-results .case-result:nth-child(1) span', 'of RAM returned to the system, about one quarter of the machine'],
      ['#entrega .case-results .case-result:nth-child(2) span', 'in inference-image size, from 8.1&nbsp;GB to 433&nbsp;MB'],
      ['#entrega .case-results .case-result:nth-child(3) span', 'classifier decisions changed when switching runtime'],
      ['#entrega .case-prose > p:nth-of-type(3)', 'I migrated the classifier to ONNX Runtime. The export script compares runtimes on the held-out test and fails if any decision changes. Preprocessing was bit-identical, with no changed decisions.'],
      ['#camada-errada .section-kicker', 'Interface diagnosis'],
      ['#camada-errada h2', 'Five failures identified in the interface and package.'],
      ['#camada-errada .case-prose > .lead', 'I identified five failures that code tests and the browser console did not detect.'],
      ['#camada-errada .case-results .case-result:nth-child(1) span', 'of decoded image per 120&nbsp;px thumbnail, ten of them on one screen'],
      ['#camada-errada .case-results .case-result:nth-child(2) strong', '2,356 → 10&nbsp;KiB'],
      ['#camada-errada .case-results .case-result:nth-child(2) span', 'per sample once the thumbnail is generated server-side, in 33&nbsp;ms'],
      ['#camada-errada .case-results .case-result:nth-child(3) span', 'pages with the same broken layout under HTTP&nbsp;200 and an error-free console'],
      ['#camada-errada .case-prose > p:nth-of-type(2)', '<strong>Browser memory:</strong> 4080 × 3060 photos (2.3 MB) filled 120 px cards, consuming about 48 MiB of bitmap memory each. <code>blob:</code> URLs were not released. The endpoint returned the correct image, but tests did not check its memory cost.'],
      ['#camada-errada .case-formula .section-kicker', 'The access control that the stylesheet undid'],
      ['#camada-errada .case-formula p:nth-of-type(2)', '<strong>The attribute that hides an element loses on specificity to any class rule.</strong>'],
      ['#camada-errada .case-formula p:nth-of-type(3)', 'CSS class rules overrode the hiding attribute and displayed restricted cards. I replaced five local patches with a general rule, checked by a test in access-controlled stylesheets.'],
      ['#camada-errada .case-list li:nth-child(1)', '<strong>Layout:</strong> three screens lost the menu/content container. Screenshot comparison revealed the defect despite HTTP 200 and an error-free console.'],
      ['#camada-errada .case-list li:nth-child(2)', '<strong>Interface authorization:</strong> the screen requested director-only photos and displayed the 403 as a loading failure. I added a restriction explanation and avoided unauthorized requests.'],
      ['#camada-errada .case-list li:nth-child(3)', '<strong>Delivery guide:</strong> instructions referenced a directory missing from the package. I linked the guide to the version variable and began checking the extracted <code>tar</code>.'],
      ['#camada-errada .case-prose > p:nth-of-type(3)', 'Three fixes received automated tests. For visual and delivery changes, I adopted screenshots and extracted-package inspection.'],
      ['#multi-stage .section-kicker', 'Delivery benchmark'],
      ['#multi-stage h2', 'The multi-stage gain, without changing the runtime.'],
      ['#multi-stage .case-prose > .lead', 'I isolated the multi-stage effect in two ONNX images with the same code, model, and dependencies: direct installation in the final image or a separate build copying only the runtime.'],
      ['#tabela-multi-stage-titulo', 'Equivalent ONNX image, measured on the same host and commit'],
      ['#tabela-multi-stage-cabecalho', '<tr><th scope="col">Build</th><th scope="col">Size</th><th scope="col">Difference</th></tr>'],
      ['#tabela-multi-stage-single', '<th scope="row">Single-stage reference</th><td>446.2 MiB</td><td>—</td>'],
      ['#tabela-multi-stage-multi', '<th scope="row">Production multi-stage</th><td>413.3 MiB</td><td>−32.9 MiB (−7.4%)</td>'],
      ['#tabela-multi-stage-nota', 'Both images loaded the ONNX model and returned <code>200</code> from <code>/health</code>. The benchmark is reproducible through the project Dockerfiles and scripts.'],
      ['#multi-stage-conclusao', 'Multi-stage saved 32.9 MiB. The historical 94.6% reduction came mainly from removing CUDA and PyTorch from inference.'],
      ['#progressao .section-kicker', 'Delivery trajectory'],
      ['#progressao h2', 'From 10.59&nbsp;GB to 1.11&nbsp;GB, in three separable decisions.'],
      ['#progressao .case-prose > .lead', 'The manifest records image sizes per release. The series separates the effects of runtime, facial-model, and packaging changes.'],
      ['#tabela-progressao-titulo', 'Image size per release, read from the delivery manifest'],
      ['#tabela-progressao-cabecalho', '<tr><th scope="col">Release</th><th scope="col">Backend</th><th scope="col">Inference</th><th scope="col">Total</th><th scope="col">What changed</th></tr>'],
      ['#tabela-progressao-100', '<th scope="row">1.0.0</th><td>2.52&nbsp;GB</td><td>8.06&nbsp;GB</td><td>10.59&nbsp;GB</td><td>starting point</td>'],
      ['#tabela-progressao-102', '<th scope="row">1.0.2</th><td>not rebuilt</td><td>0.43&nbsp;GB</td><td>—</td><td>inference moves from CUDA + PyTorch to ONNX Runtime</td>'],
      ['#tabela-progressao-108', '<th scope="row">1.0.8</th><td>2.17&nbsp;GB</td><td>0.42&nbsp;GB</td><td>2.60&nbsp;GB</td><td>no single cause recorded in the manifest</td>'],
      ['#tabela-progressao-1010', '<th scope="row">1.0.10</th><td>0.69&nbsp;GB</td><td>0.42&nbsp;GB</td><td>1.11&nbsp;GB</td><td>the facial-model swap, driven by licensing, takes the heavy dependency with it</td>'],
      ['#tabela-progressao-121', '<th scope="row">1.2.1</th><td>0.69&nbsp;GB</td><td>0.42&nbsp;GB</td><td>1.11&nbsp;GB</td><td>unchanged for four releases</td>'],
      ['#tabela-progressao-nota', 'Values in bytes in the manifest, written by the release script itself on every build. The 1.0.0 images are still preserved locally, which allows the starting line to be re-measured rather than trusted.'],
      ['#progressao .case-results .case-result:nth-child(1) strong', '&minus;9.47&nbsp;GB'],
      ['#progressao .case-results .case-result:nth-child(1) span', 'between the first delivery and the current one, both images combined'],
      ['#progressao .case-results .case-result:nth-child(2) strong', '9.5×'],
      ['#progressao .case-results .case-result:nth-child(2) span', 'smaller overall; the inference image alone became 19× smaller'],
      ['#progressao .case-results .case-result:nth-child(3) strong', '414&nbsp;MB'],
      ['#progressao .case-results .case-result:nth-child(3) span', 'is what the client downloads today, with the images compressed into the package'],
      ['#progressao-conclusao', 'The largest drop (7.6 GB in inference) came from adapting the runtime to hardware; the next came from replacing the facial model for licensing. Since 1.0.10, size remained stable while behavior, navigation, and documentation evolved.'],
      ['.case-highlight .section-kicker', 'Architecture decision'],
      ['.case-cta .section-kicker', 'Project context'],
      ['.case-cta h2', 'Back to the system overview.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'See the case study'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open on GitHub'],
      ['#face-tech-title', 'From results to evidence.'],
      ['#face-tech-intro', 'Experimental protocols, baselines, benchmarks, and limitations, with reproducible evidence.'],
      ['.face-tech-hero .hero-actions a:nth-child(1)', 'Facial recognition'],
      ['.face-tech-hero .hero-actions a:nth-child(2)', 'Classification experiment'],
      ['.face-tech-hero .hero-actions a:nth-child(3)', 'Model diagnosis'],
      ['.face-tech-hero .hero-actions a:nth-child(4)', 'Engineering and security'],
      ['.face-tech-hero .hero-actions a:nth-child(5)', 'Delivery trajectory'],
      ['.face-tech-hero .case-meta li:nth-child(1)', '1:N recognition'],
      ['.face-tech-hero .case-meta li:nth-child(2)', 'Controlled experiments'],
      ['.face-tech-hero .case-meta li:nth-child(3)', 'FAISS + pgvector'],
      ['.face-tech-hero .case-meta li:nth-child(4)', 'PyTorch + scikit-learn'],
      ['.face-tech-hero .case-meta li:nth-child(5)', 'Security and delivery preparation'],
      ['.face-tech-hero .case-meta li:nth-child(6)', 'Explicit limitations'],
      ['#reconhecimento .section-kicker', 'Facial recognition'],
      ['#reconhecimento h2', 'Four inherited decisions, four measurements.'],
      ['#reconhecimento-lead', 'I reproduced the kiosk pipeline to evaluate the threshold, frame count, vector index, and model replacement.'],
      ['#reconhecimento-scroll', 'Swipe the table to compare all four columns →'],
      ['#tabela-reconhecimento-titulo', 'From inherited assumption to measured decision'],
      ['#tabela-reconhecimento-cabecalho', '<th scope="col">Question</th><th scope="col">Before</th><th scope="col">Measurement</th><th scope="col">Decision</th>'],
      ['#reconhecimento-limiar', '<th scope="row">Which threshold?</th><td>0.363, published for 1:1</td><td>45.4% of unknowns accepted; at 0.50, 0.2%</td><td>0.50, with recalibration planned for the real population</td>'],
      ['#reconhecimento-frames', '<th scope="row">How many frames?</th><td>5 frames, 160&nbsp;ms apart</td><td>identical accuracy from 1 to 8; two extras cost ~3&nbsp;s of CPU in the measured pipeline</td><td>3 frames: median + liveness, without redundancy</td>'],
      ['#reconhecimento-faiss', '<th scope="row">Adopt FAISS?</th><td>“it will scale better”</td><td>exact search: 0.076&nbsp;ms/1,000 vectors; HNSW: 0.04&nbsp;ms, recall@1 0.915</td><td>keep transactional search in pgvector</td>'],
      ['#reconhecimento-modelo', '<th scope="row">Did the model swap cost accuracy?</th><td>unknown</td><td>same FAR=0 at the comparable point; 32× less CPU</td><td>YuNet + SFace, with compatible licensing</td>'],
      ['#tabela-reconhecimento-nota', 'Threshold and frame count were measured on a public population and controlled synthetic sessions. They indicate direction; they do not replace calibration on the client population and kiosk.'],
      ['#reconhecimento .case-result:nth-child(1) span', 'p95 with one concurrent identification, using the current 3-frame burst'],
      ['#reconhecimento .case-result:nth-child(2) span', 'p95 with 20 concurrent identifications in the CPU-only benchmark'],
      ['#reconhecimento .case-result:nth-child(3) strong', '~1.2 million'],
      ['#reconhecimento .case-result:nth-child(3) span', 'vectors before exact search is projected to reach 50&nbsp;ms'],
      ['#reconhecimento-concorrencia .section-kicker', 'Unplanned finding'],
      ['#reconhecimento-concorrencia p:nth-child(2)', '<strong>Two simultaneous clock-ins caused 6 out of 6 extraction failures.</strong>'],
      ['#reconhecimento-concorrencia p:nth-child(3)', 'Detector and recognizer shared state in the thread pool: 8 punches caused 24 failures in 24 extractions. I serialized model access and added a regression test with 8 threads × 3 frames.'],
      ['#reconhecimento-reproducao', 'Reproduction lives in notebooks 15–18 and <code>ml/face_bench.py</code>: the same extraction, normalization, and thresholds used by the inference service, with data sources and limitations stated.'],
      ['footer .text-link', 'Back to portfolio'],
      ['#engenharia .case-list li:nth-child(9)', '<strong>XSS prevention:</strong> I replaced markup containing user data with DOM nodes, <code>textContent</code>, and <code>addEventListener</code>, avoiding interpolation into <code>onclick</code>.'],
      ['#engenharia .case-list li:nth-child(10)', '<strong>Schema healthcheck:</strong> I added comparison of the applied migration against the revision expected by the code, alongside database connectivity checks.'],
      ['#procedencia h2', 'Packaged-model traceability.'],
      ['#procedencia .case-prose > .lead', 'The delivery-image audit identified a PyTorch checkpoint that did not match the versioned checksum.'],
      ['#procedencia .case-prose > p:nth-of-type(2)', 'An experiment overwrote the promoted checkpoint. The packaged ONNX also differed from the versioned checkpoints, as shown by image-level probability comparisons.'],
      ['#procedencia .case-prose > p:nth-of-type(3)', 'The documented export command failed due to undeclared dependencies, leading to manual exports without traceability.'],
      ['#procedencia .case-list li:nth-child(1)', '<strong>Release validation:</strong> the gate now checks checksums and aborts on mismatch.'],
      ['#procedencia .case-list li:nth-child(2)', '<strong>Lineage:</strong> export records the checkpoint-to-ONNX link, verified at release.'],
      ['#procedencia .case-list li:nth-child(3)', '<strong>Reproducibility:</strong> I declared dependencies and obtained two byte-identical exports.'],
      ['#procedencia-conclusao', 'I adopted distributed-artifact auditing as a step complementing code tests.'],
      ['#execucao .lead', 'CPU inference remains synchronous; asynchronous concurrency handles I/O waits.'],
      ['#execucao .case-highlight-note', 'Load testing revealed connections held during bcrypt, exhausting the pool. With hashes costing about 100&nbsp;ms, each connection limited throughput to ten logins per second. The diagnosis indicated releasing connections before hashing.'],
      ['#isolamento .section-kicker', 'Inference isolation'],
      ['#isolamento .lead', 'I retained triage in a separate service after measuring its processing cost.'],
      ['#isolamento .case-highlight-note', 'The network took 14&nbsp;ms and OCR took 909&nbsp;ms (98% of processing time). Merging triage into the two-process backend would occupy half its capacity for about one second. A separate service preserves capacity for facial attendance.'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
      ['.case-meta', 'aria-label', 'Topics on this page'],
      ['.security-list', 'aria-label', 'Application security layers'],
      ['#atestados .case-results', 'aria-label', 'Results of the medical-document classification experiment'],
      ['#metodo .case-results', 'aria-label', 'Investigation indicators'],
      ['#metodo .case-list', 'aria-label', 'Technical decisions from the investigation'],
      ['#diagnostico .case-results', 'aria-label', 'Diagnosis indicators'],
      ['#diagnostico .case-list', 'aria-label', 'Experiments conducted'],
      ['#congelamento .case-results', 'aria-label', 'Freeze-depth experiment results'],
      ['#reconhecimento .case-results', 'aria-label', 'Current facial-recognition latency'],
    ],
  },
  'triple-roman': {
    title: 'Triple Roman Domination | Israel Souza Ferreira',
    description: 'How to defend an empire with half the troops: Constantine’s strategy explained visually, and the thesis that proposed the first algorithms for the problem.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href="tecnico.html"]', 'Technical breakdown'],
      ['.nav-menu a[href*="Triple-Roman"]', 'Repository'],
      ['.case-breadcrumb', '← Back to projects'],
      ['.case-hero .eyebrow', 'Undergraduate thesis · Combinatorial optimization · Completed'],
      ['.case-title', 'Triple Roman Domination'],
      ['#trd-intro', 'Graph-optimization thesis: I implemented genetic and ant-colony algorithms and corrected an exact formulation from the literature.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'See the strategy'],
      ['.case-hero .hero-actions a:nth-child(2)', 'See the technical breakdown'],
      ['.case-hero .hero-actions a:nth-child(3)', 'Repository'],
      ['.case-meta li:nth-child(2)', 'Genetic Algorithm'],
      ['.case-meta li:nth-child(3)', 'Ant Colony Optimization'],
      ['.case-meta li:nth-child(4)', 'Integer Linear Programming'],
      ['#resumo .section-kicker', 'Summary'],
      ['#trd-resumo-titulo', 'Contributions and results.'],
      ['#trd-resumo-1', '<strong>Problem:</strong> protect graph regions at minimum cost with support from neighbors. It is NP-complete.'],
      ['#trd-resumo-2', '<strong>Implementation:</strong> ant-colony and genetic-algorithm metaheuristics in C++.'],
      ['#trd-resumo-3', '<strong>Correction:</strong> a counterexample to the published model and a proposed valid formulation.'],
      ['#trd-resumo-4', '<strong>Evidence:</strong> 362 graphs under three metrics declared before the experiments. Only 6 ended up more than 50% away from the reference.'],
      ['#trd-resumo-5', '<strong>Format:</strong> undergraduate thesis in Computer Science at UFC Quixadá, defended in February 2025.'],
      ['#trd-estrategia-kicker', 'Constantine’s strategy'],
      ['#trd-estrategia-titulo', 'Half the legions, the same territory.'],
      ['#trd-estrategia-lead', 'The historical strategy redistributes troops among regions that can support each other.'],
      ['#trd-passo1-titulo', 'Eight neighbouring regions'],
      ['#trd-passo1-texto', 'Gaul, Rome, Constantinople, Iberia, Asia Minor, Egypt, North Africa, and Britain, linked by their borders.'],
      ['#trd-passo2-titulo', 'Half the force'],
      ['#trd-passo2-texto', 'From fifty down to about twenty-five legions: not enough to occupy every region.'],
      ['#trd-passo3-titulo', 'Defence in depth'],
      ['#trd-passo3-texto', 'Regions without troops depend on neighbors that can help without leaving themselves undefended.'],
      ['#trd-retrato-legenda', 'Constantine the Great, who reorganized the defence of the empire in the fourth century. Bust at the Museo Chiaramonti, Vatican. Photograph by Marie-Lan Nguyen, public domain.'],
      ['#trd-regra-kicker', 'The rule of the game'],
      ['#trd-regra-titulo', 'Three legions of defence for every region.'],
      ['#trd-formula-kicker', 'Defense rule'],
      ['#trd-formula-frase', '<strong>Each region needs three defense legions. Neighbors may send troops while keeping one legion of their own.</strong>'],
      ['#trd-formula-codigo', 'troops in the region + (troops of each neighbour − 1) ≥ 3'],
      ['#trd-formula-nota', 'Each region receives 0, 2, 3, or 4 legions. The objective is to minimize the total while satisfying the defense rule.'],
      ['#trd-regra-texto', 'A region holding 4 legions rescues any neighbour on its own: it sends 3 and keeps 1. One holding 2 can only send 1 — it needs company.'],
      ['#trd-lab-kicker', 'Try it'],
      ['#trd-lab-titulo', 'Distribute the legions of the empire.'],
      ['#trd-help', 'Click a region to change its troops: 0 → 2 → 3 → 4. The map flags right away who has been left exposed.'],
      ['#trd-map-titulo', 'Interactive map of the eight regions of the empire'],
      ['#trd-map-desc', 'Each circle is a region and each line is a border. The number inside a circle is its amount of legions. Use Tab to move across regions and Enter to change their troops.'],
      ['#trd-score-custo-rotulo', 'Cost'],
      ['#trd-score-custo-unidade', 'legions'],
      ['#trd-score-otimo-rotulo', 'Best possible'],
      ['#trd-score-otimo-unidade', 'legions'],
      ['#trd-botao-otimo', 'Show an optimal solution'],
      ['#trd-botao-limpar', 'Empty the map'],
      ['#trd-lab-nota', 'The map starts on one of five optimal solutions, with eight legions.'],
      ['#trd-legenda-vazio', 'no troops, depends on its neighbours'],
      ['#trd-legenda-tropas', 'holding troops, sends one less than it has'],
      ['#trd-legenda-exposto', 'exposed: short of three legions of defence'],
      ['#trd-figura-legenda', 'The same solution over the original map: two regions holding four legions cover the other six. Figure from the thesis, drawn by the author based on Gray (2015).'],
      ['#trd-variacao-kicker', 'Why three?'],
      ['#trd-variacao-titulo', 'The third version of a classic problem.'],
      ['#trd-variacao-lead', 'Formalized in 2004, the problem gained versions requiring more supporting legions per region.'],
      ['#trd-var1-tag', '2004'],
      ['#trd-var1-titulo', 'Roman domination'],
      ['#trd-var1-texto', 'One legion of relief per region. A single strong neighbour is enough.'],
      ['#trd-var2-tag', '2016'],
      ['#trd-var2-titulo', 'Double Roman domination'],
      ['#trd-var2-texto', 'Two legions. A single ordinary neighbour no longer suffices.'],
      ['#trd-var3-tag', '2021 · this work'],
      ['#trd-var3-titulo', 'Triple Roman domination'],
      ['#trd-var3-texto', 'Three legions. The most demanding of the three, and the one tolerating the most simultaneous failures.'],
      ['#trd-var4-tag', 'The trade-off'],
      ['#trd-var4-titulo', 'Cost of redundancy'],
      ['#trd-var4-texto', 'More supporting legions increase cost and tolerance to simultaneous failures.'],
      ['#trd-dificuldade-kicker', 'Why it is hard'],
      ['#trd-dificuldade-titulo', 'Easy to check, hard to find.'],
      ['#trd-dificuldade-lead', 'Validating a distribution is simple; finding the cheapest requires combinatorial search.'],
      ['#trd-dificuldade-texto', 'The search space grows exponentially: 65,536 distributions for eight regions and a 61-digit count for one hundred. The problem is <strong>NP-complete</strong>.'],
      ['#trd-numero-1', 'possible distributions across eight regions'],
      ['#trd-numero-2', 'distributions across one hundred regions'],
      ['#trd-numero-3', 'no exact and fast algorithm is known for the problem'],
      ['#trd-trabalho-kicker', 'What I did'],
      ['#trd-trabalho-titulo', 'Three ways in, and one correction.'],
      ['#trd-card1-tag', 'Metaheuristic'],
      ['#trd-card1-titulo', 'Ant colony'],
      ['#trd-card1-texto', 'Artificial ants construct solutions and reinforce choices through pheromones. This method had the best overall performance.'],
      ['#trd-card2-tag', 'Metaheuristic'],
      ['#trd-card2-titulo', 'Genetic algorithm'],
      ['#trd-card2-texto', 'A population of solutions that cross over, mutate, and compete. The cheapest ones survive.'],
      ['#trd-card3-tag', 'Exact method'],
      ['#trd-card3-titulo', 'Integer linear programming'],
      ['#trd-card3-texto', 'Constraint model solved by a solver, used as a reference for the metaheuristics.'],
      ['#trd-card4-tag', 'Correction'],
      ['#trd-card4-titulo', 'A published model that failed'],
      ['#trd-card4-texto', 'I demonstrated an invalid solution accepted by the published formulation and proposed a correction.'],
      ['#trd-resultados-kicker', 'Results'],
      ['#trd-resultados-titulo', '362 graphs, measured against the optimum.'],
      ['#trd-resultados-lead', 'Classic benchmarks, real networks, and graphs generated for this work. Where the solver proved optimality, the comparison is against the optimum.'],
      ['#trd-resultado-1', 'graphs evaluated, across classic benchmarks, real networks, and generated instances'],
      ['#trd-resultado-2', 'ant colony optimization achieved the best observed combination of runtime and quality in most cases'],
      ['#trd-resultado-3', 'graphs, among all the ones evaluated, ended up more than 50% away from the optimum'],
      ['#trd-resultados-texto', 'The genetic algorithm was competitive on smaller, structured graphs, reaching the optimum in some cases where ACO did not.'],
      ['#trd-destaque-kicker', 'What this leaves for the field'],
      ['#trd-destaque-texto', 'The work provides a corrected exact formulation and instances with computed optima for future research comparisons.'],
      ['#trd-aplicacoes-kicker', 'Where this shows up today'],
      ['#trd-aplicacoes-titulo', 'The same problem, without legions.'],
      ['#trd-aplicacoes-lead', 'The model represents coverage across regions with limited supporting capacity.'],
      ['#trd-aplicacao-1', '<strong>Stores and warehouses:</strong> covering every neighbourhood, including those without a store, without starving whoever comes to the rescue.'],
      ['#trd-aplicacao-2', '<strong>Servers and antennas:</strong> where to place them so the network stays served when one point goes down — and when two go down together.'],
      ['#trd-aplicacao-3', '<strong>Teams and on-call rosters:</strong> spreading ambulances or crews across regions that cover one another without leaving themselves uncovered.'],
      ['#trd-aplicacoes-nota', 'Military defense and network coverage appear in the literature; stores and rosters are analogies. The thesis studies the mathematical problem.'],
      ['#trd-ponte-kicker', 'Deep dive'],
      ['#trd-ponte-titulo', 'Definition, algorithms, and results.'],
      ['#trd-ponte-lead', 'The technical page covers the formal definition, model correction, algorithms, and experimental tables.'],
      ['#aprofundamento .hero-actions a', 'See the technical breakdown →'],
      ['#trd-cta-kicker', 'Code and experiments'],
      ['#trd-cta-titulo', 'Explore the implementation and the full thesis.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'Open repository'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open thesis'],
      ['.case-cta .contact-actions a:nth-child(3)', 'Technical breakdown'],
      ['footer .text-link', 'Back to portfolio'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
      ['.case-meta', 'aria-label', 'Project information'],
      ['.system-flow', 'aria-label', 'Three steps of the defence strategy'],
      ['.trd-legend', 'aria-label', 'Map legend'],
      ['#dificuldade .case-results', 'aria-label', 'The difficulty in numbers'],
      ['#resultados .case-results', 'aria-label', 'Results summary'],
      ['#aplicacoes .case-list', 'aria-label', 'Applications of the problem'],
      ['.portrait img', 'alt', 'Marble bust of the emperor Constantine the Great, seen from the front.'],
      ['.case-figure img', 'alt', 'Map of the Roman Empire drawn as a graph, with the labels of an optimal Triple Roman Domination solution on its vertices.'],
    ],
  },
  'triple-roman-tecnico': {
    title: 'Triple Roman Domination — technical breakdown | Israel Souza Ferreira',
    description: 'Technical deep dive into the thesis on Triple Roman Domination: formal definition, the counterexample that breaks the previous ILP formulation, the GA and ACO algorithms, and the result tables.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="index.html"]', 'Overview'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href*="Triple-Roman"]', 'Repository'],
      ['.case-breadcrumb', '← Back to the overview'],
      ['.case-hero .eyebrow', 'Technical deep dive · Triple Roman Domination'],
      ['.case-title', 'Model, algorithms, and experiments.'],
      ['#trdt-intro', 'Formal definition, ILP formulation correction, GA and ACO metaheuristics, and results on 362 graphs.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'See the correction of the exact model'],
      ['.case-hero .hero-actions a:nth-child(2)', 'See the algorithms'],
      ['.case-hero .hero-actions a:nth-child(3)', 'See the results'],
      ['.case-meta li:nth-child(1)', 'Integer Linear Programming'],
      ['.case-meta li:nth-child(2)', 'Genetic Algorithm'],
      ['#trdt-def-kicker', 'Definition'],
      ['#trdt-def-titulo', 'The problem, formally.'],
      ['#trdt-def-lead', 'Given a graph <em>G</em> and a function <em>h</em> assigning each vertex a label in {0, 1, 2, 3, 4}, a vertex is <strong>active</strong> when its label is greater than zero. The active neighbourhood of <em>v</em>, written <em>AN(v)</em>, is the set of active neighbours of <em>v</em>.'],
      ['#trdt-def-formula-kicker', 'Triple Roman Domination function'],
      ['#trdt-def-formula-nota', 'The weight of <em>h</em> is the sum of its labels. The triple Roman domination number γ<sub>3R</sub>(G) is the smallest possible weight of a valid function, and the problem is to determine it. The decision version is NP-complete, including when restricted to bipartite and chordal graphs.'],
      ['#trdt-def-equivalencia', 'Subtracting |AN(v)| from both sides gives the form used in the overview: every active neighbour contributes <em>h(u) − 1</em>, that is, it sends everything but one legion, while the vertex itself contributes its full <em>h(v)</em>. The two readings are the same inequality.'],
      ['#trdt-def-teorema', '<strong>A result that trims the model:</strong> for every non-trivial connected graph there exists an optimal function that never uses the label 1 (Abdollahzadeh Ahangar <em>et al.</em>, 2021). Whenever a vertex receives 1, it can be zeroed while a neighbour is promoted, without increasing the weight. That is why both the exact formulation and the metaheuristics work only with {0, 2, 3, 4} — one variable fewer per vertex.'],
      ['#trdt-def-limites', 'The bounds used as reference in the work: γ<sub>3R</sub>(G) ≥ ⌈4n / (Δ+1)⌉ for connected graphs with Δ ≥ 3 and n ≥ 2 (Valenzuela-Tripodoro <em>et al.</em>, 2024), and γ<sub>3R</sub>(G) ≤ 3n/2 for connected graphs with δ ≥ 2 (Hajjari <em>et al.</em>, 2023).'],
      ['#trdt-pli-kicker', 'Exact model'],
      ['#trdt-pli-titulo', 'A published formulation that accepts an invalid solution.'],
      ['#trdt-pli-lead', 'The only Integer Linear Programming formulation available for the problem (Vengaldas <em>et al.</em>, 2023) uses six binary variables per vertex and four families of constraints. The constraint responsible for zero-labelled vertices is linearly too loose: there are labellings that satisfy it without being triple Roman domination functions.'],
      ['#trdt-pli-restricao-kicker', 'The faulty constraint'],
      ['#trdt-pli-restricao-nota', 'Here <em>q</em>, <em>r</em>, and <em>s</em> indicate labels 2, 3, and 4; <em>t</em> and <em>x</em> indicate the existence of some neighbour labelled 2 and some neighbour labelled 3. Summing fractions lets two neighbours labelled 2 “pay” the constraint together with the indicator <em>t</em>, even though two neighbours labelled 2 are not enough under the definition.'],
      ['#trdt-c10-titulo', 'Ten-vertex cycle with an invalid labelling accepted by the previous model'],
      ['#trdt-c10-desc', 'Ten vertices arranged in a circle. Seven receive label 2 and three receive label 0. Each vertex labelled 0 has exactly two neighbours labelled 2, which does not satisfy the definition of the problem.'],
      ['#trdt-c10-legenda', 'Counterexample on the cycle C<sub>10</sub>. Each vertex labelled 0 has two neighbours labelled 2, which yields ⅔ + ½ = 7/6 ≥ 1 in the constraint above. Under the definition, however, it only receives 1 + 1 = 2 legions of defence, below the required 3.'],
      ['#trdt-pli-consequencia', 'The authors refine that model into two further versions and show they are equivalent to one another. Since the faulty constraint is precisely the one modelling zero-labelled vertices and it remains in all three versions, all three inherit the flaw.'],
      ['#trdt-pli-nova-kicker', 'The proposed formulation'],
      ['#trdt-pli-nova-nota', 'The constraint is the definition itself written in binary variables, after cancelling the |AN(v)| term: a neighbour labelled 2 contributes 1, one labelled 3 contributes 2, and one labelled 4 contributes 3 — exactly “sends everything but one legion”. Dropping the label 1 through the theorem above reduces the model from 6|V| variables and 4|V| constraints to 3|V| variables and 2|V| constraints.'],
      ['#trdt-alg-kicker', 'Algorithms'],
      ['#trdt-alg-titulo', 'Two metaheuristics, the same solution format.'],
      ['#trdt-alg-lead', 'In both algorithms a solution is a vector of <em>n</em> positions holding values in {0, 2, 3, 4}, and the cost to minimize is the sum of those positions. What changes is how the search space is traversed.'],
      ['#trdt-ga-kicker', 'FLGA'],
      ['#trdt-ga-titulo', 'Genetic algorithm.'],
      ['#trdt-ga-item1', '<strong>Initial population by heuristic:</strong> four variants were compared. H1 draws a vertex, labels it 2, and zeroes its neighbourhood; H2 does the same with label 4 and then tries to lower labels; H3 walks the vertices in decreasing order of degree; H4 mixes the three in equal parts. H4 won and defines the FLGA.'],
      ['#trdt-ga-item2', '<strong>Repair instead of discard:</strong> crossover and mutation produce infeasible solutions often. Rather than rejecting them, the <code>feasibilityCheck</code> routine walks the violated vertices and raises the label to the minimum that restores feasibility. The population is fully feasible at the end of every generation.'],
      ['#trdt-ga-item3', '<strong>Greedy reduction:</strong> <code>decreaseLabels</code> tries to lower each label (4 → 3 → 2 → 0) and undoes any change that breaks feasibility for the vertex or its active neighbourhood. This is what keeps the repair step from accumulating needless slack.'],
      ['#trdt-ga-item4', '<strong>Operators:</strong> tournament selection, one- or two-point crossover drawn for each pair, mutation replacing one position with a random label, and elitism preserving ⌈population × rate⌉ individuals.'],
      ['#trdt-ga-item5', '<strong>Stopping:</strong> a maximum number of generations, or a maximum number of consecutive generations without improvement — whichever comes first.'],
      ['#trdt-tabela-h-titulo', 'Comparison between the four initial-population heuristics'],
      ['#trdt-tabela-h-cabecalho', '<th scope="col">Graph</th><th scope="col">|V|</th><th scope="col">H1</th><th scope="col">H2</th><th scope="col">H3</th><th scope="col">H4</th><th scope="col">ILP</th>'],
      ['#trdt-tabela-h-nota', 'Excerpt of 5 of the 24 random graphs used in this comparison; fitness values (lower is better). The name g<em>N</em>-.<em>p</em> means <em>N</em> vertices and connection probability 0.<em>p</em>. The asterisk marks the cases where the solver proved optimality within the time limit.'],
      ['#trdt-aco-kicker', 'ACO-FL'],
      ['#trdt-aco-titulo', 'Ant colony optimization with local search.'],
      ['#trdt-aco-lead', 'The implementation follows the <em>Max-Min Ant System</em> inside the <em>Hyper-Cube Framework</em>: every vertex carries a pheromone τ<sub>v</sub> ∈ [0,1], initialized at 0.5 and bounded to [0.001, 0.999].'],
      ['#trdt-aco-item1', '<strong>Construction:</strong> each ant picks vertices to receive label 4 and zeroes their neighbourhood, until the auxiliary graph is exhausted. The choice uses deg(u) · τ<sub>u</sub>: with a fixed probability it takes the maximum, otherwise it draws by proportional roulette.'],
      ['#trdt-aco-item2', '<strong>Extend and reduce:</strong> <code>extendSolution</code> promotes a fraction of the vertices to label 4, deliberately making the solution more expensive in order to escape local minima; <code>reduceSolution</code> then walks the vertices in decreasing order of degree, lowering labels while feasibility holds.'],
      ['#trdt-aco-item3', '<strong>RVNS local search:</strong> it destroys part of the solution, rebuilds, extends, and reduces. The intensity of the destruction grows with the neighbourhood level k, which rises on every iteration without improvement and returns to 1 as soon as a better solution appears.'],
      ['#trdt-aco-item4', '<strong>Pheromones guided by convergence:</strong> the factor φ decides the weight of the iteration best against the global best — only the iteration best while φ &lt; 0.4, only the global best once φ ≥ 0.8. If φ goes past 0.99, pheromones are reinitialized to avoid stagnation.'],
      ['#trdt-tabela-rvns-titulo', 'Contribution of the RVNS local search'],
      ['#trdt-tabela-rvns-cabecalho', '<th scope="col">Graph</th><th scope="col">|V|</th><th scope="col">ACO with RVNS</th><th scope="col">ACO without RVNS</th><th scope="col">ILP</th>'],
      ['#trdt-tabela-rvns-nota', 'Excerpt of 5 of the 30 random graphs. The version with local search is the one named ACO-FL. The gain shows up mainly on large sparse graphs, where construction alone stalls.'],
      ['#trdt-exp-kicker', 'Protocol'],
      ['#trdt-exp-titulo', 'How the experiments were set up.'],
      ['#trdt-exp-item1', '<strong>Instances — 362 graphs:</strong> 50 sparse matrices from the BAI collection, 186 from Harwell-Boeing, 56 graphs from Miscellaneous Networks, 10 graphs from each classic family (cycles, paths, stars, and trees), and 30 Erdős-Rényi random graphs from 25 to 250 vertices with connection probability 0.2, 0.5, and 0.8.'],
      ['#trdt-exp-item2', '<strong>Exact reference:</strong> the ILP model was implemented in Python with Pyomo and NetworkX. The free CPLEX edition is limited to a thousand variables and a thousand constraints, which covers graphs of up to 333 vertices; beyond that, CBC was used. Each instance had at most 900 seconds, and the solver returns the best solution found — which is not always provably optimal.'],
      ['#trdt-exp-item3', '<strong>Parameter tuning:</strong> the configuration of both algorithms was set by <code>irace</code> over a representative subset of 115 graphs, 5 from each collection, covering small, medium, and large instances. No parameter was hand-tuned over the full set.'],
      ['#trdt-exp-item4', '<strong>Environment:</strong> Intel Core i5-8265U at 1.60 GHz, 8 GB of RAM, Ubuntu 22.04.5 LTS. Metaheuristics in C++ compiled with G++ 11.4.0 and the flags <code>-std=c++17 -Wall -Wextra -Ofast -finline-functions -march=native</code>.'],
      ['#trdt-tabela-param-aco-titulo', 'ACO parameters returned by irace'],
      ['#trdt-tabela-param-aco-cabecalho', '<th scope="col">Parameter</th><th scope="col">Search range</th><th scope="col">With RVNS</th><th scope="col">Without RVNS</th>'],
      ['#trdt-tabela-param-ga-titulo', 'FLGA parameters returned by irace'],
      ['#trdt-tabela-param-ga-cabecalho', '<th scope="col">Parameter</th><th scope="col">Search range</th><th scope="col">Tuned value</th>'],
      ['#trdt-tabela-param-ga-nota', 'The population size is the order of the graph divided by the value in the last column.'],
      ['#trdt-res-kicker', 'Results'],
      ['#trdt-res-titulo', 'ACO-FL and FLGA, compared with the exact reference when available.'],
      ['#trdt-res-lead', 'The relative gap compares the best solution found by the metaheuristics against the solution of the exact model. In the reported run, ACO-FL achieved the best observed combination in most instances, but the advantage is not uniform: on small dense graphs and on some graphs with many local optima, FLGA gets closer.'],
      ['#trdt-tabela-cmp-titulo', 'ACO-FL, FLGA, and ILP on the random graphs'],
      ['#trdt-tabela-cmp-cabecalho', '<th scope="col">Graph</th><th scope="col">|V|</th><th scope="col">|E|</th><th scope="col">ACO-FL</th><th scope="col">FLGA</th><th scope="col">ILP</th><th scope="col">Gap</th>'],
      ['#trdt-cmp-l1', '<th scope="row">g25-.2</th><td>25</td><td>61</td><td>19</td><td>24</td><td>19*</td><td>0.00%</td>'],
      ['#trdt-cmp-l2', '<th scope="row">g25-.8</th><td>25</td><td>235</td><td>7</td><td>7</td><td>7*</td><td>0.00%</td>'],
      ['#trdt-cmp-l3', '<th scope="row">g50-.5</th><td>50</td><td>637</td><td>12</td><td>12</td><td>12*</td><td>0.00%</td>'],
      ['#trdt-cmp-l4', '<th scope="row">g75-.2</th><td>75</td><td>549</td><td>34</td><td>39</td><td>28*</td><td>21.43%</td>'],
      ['#trdt-cmp-l5', '<th scope="row">g100-.5</th><td>100</td><td>2490</td><td>19</td><td>17</td><td>14*</td><td>21.43%</td>'],
      ['#trdt-cmp-l6', '<th scope="row">g150-.2</th><td>150</td><td>2299</td><td>39</td><td>47</td><td>32</td><td>21.88%</td>'],
      ['#trdt-cmp-l7', '<th scope="row">g200-.8</th><td>200</td><td>15947</td><td>12</td><td>12</td><td>8*</td><td>50.00%</td>'],
      ['#trdt-cmp-l8', '<th scope="row">g225-.8</th><td>225</td><td>20015</td><td>12</td><td>8</td><td>8*</td><td>0.00%</td>'],
      ['#trdt-cmp-l9', '<th scope="row">g250-.2</th><td>250</td><td>6249</td><td>52</td><td>54</td><td>39</td><td>33.33%</td>'],
      ['#trdt-tabela-cmp-nota', 'Excerpt of 9 of the 30 random graphs. The gap is computed over the better of the two metaheuristics. On g100-.5 and g225-.8 it is FLGA that comes out ahead, reaching the optimum on the latter.'],
      ['#trdt-tabela-fam-titulo', 'Classic families, with γ<sub>3R</sub> known from the ILP'],
      ['#trdt-tabela-fam-cabecalho', '<th scope="col">Graph</th><th scope="col">|V|</th><th scope="col">γ<sub>3R</sub></th><th scope="col">ACO-FL</th><th scope="col">FLGA</th>'],
      ['#trdt-fam-l1', '<th scope="row">Cycle C<sub>100</sub></th><td>100</td><td>135</td><td>135</td><td>146</td>'],
      ['#trdt-fam-l2', '<th scope="row">Path P<sub>100</sub></th><td>100</td><td>135</td><td>135</td><td>147</td>'],
      ['#trdt-fam-l3', '<th scope="row">Star S<sub>100</sub></th><td>100</td><td>4</td><td>4</td><td>4</td>'],
      ['#trdt-fam-l4', '<th scope="row">Tree T<sub>100</sub></th><td>100</td><td>132</td><td>143</td><td>141</td>'],
      ['#trdt-fam-l5', '<th scope="row">Cycle C<sub>250</sub></th><td>250</td><td>335</td><td>339</td><td>359</td>'],
      ['#trdt-fam-l6', '<th scope="row">Tree T<sub>250</sub></th><td>250</td><td>354</td><td>366</td><td>380</td>'],
      ['#trdt-tabela-fam-nota', 'On cycles and paths ACO-FL reproduces the optimum up to a hundred vertices. The star is trivial for both: a single centre labelled 4 solves the whole graph. On random trees FLGA is sometimes ahead.'],
      ['#trdt-met-kicker', 'Results and impact communicated'],
      ['#trdt-met-titulo', 'The three metrics behind every claim.'],
      ['#trdt-met-lead', 'Runtime, fitness, and gap were defined before the experiments and applied to both algorithms and the exact model.'],
      ['#trdt-met1-tag', 'Criterion 1'],
      ['#trdt-met1-titulo', 'Runtime'],
      ['#trdt-met1-texto', 'Seconds per instance, measured on the same machine with the same compiler flags.'],
      ['#trdt-met2-tag', 'Criterion 2'],
      ['#trdt-met2-titulo', 'Fitness, the weight of the solution'],
      ['#trdt-met2-texto', 'Sum of labels in the best solution found, compared with the exact model value.'],
      ['#trdt-met3-tag', 'Criterion 3'],
      ['#trdt-met3-titulo', 'Relative gap'],
      ['#trdt-met3-texto', 'Percentage distance between the best metaheuristic solution and the ILP reference.'],
      ['#trdt-met4-tag', 'How it is computed'],
      ['#trdt-met4-titulo', 'gap = (best − ILP) / ILP'],
      ['#trdt-met4-texto', 'The numerator uses the better of the two metaheuristics.'],
      ['#trdt-met-impacto-intro', 'Research contributions:'],
      ['#trdt-met-impacto-1', '<strong>Corrected formulation:</strong> a counterexample demonstrating the published ILP flaw.'],
      ['#trdt-met-impacto-2', '<strong>Implementation:</strong> genetic-algorithm and ant-colony metaheuristics.'],
      ['#trdt-met-impacto-3', '<strong>A reusable set of instances:</strong> 30 random graphs generated with exact γ<sub>3R</sub> values, plus exact values for most of the remaining instances — comparison material for later research.'],
      ['#trdt-met-impacto-4', '<strong>Experimental selection:</strong> RVNS local search and H4 initial population compared under the same protocol.'],
      ['#trdt-met-impacto-5', '<strong>Gap:</strong> only 6 of the 362 graphs were more than 50% above the reference.'],
      ['#trdt-lim-kicker', 'Limits of what was measured'],
      ['#trdt-lim-titulo', 'What the numbers do not say.'],
      ['#trdt-lim-item1', '<strong>Not every reference value is a proven optimum.</strong> The solver ran under a 900-second limit per instance. Without the asterisk, the value in the ILP column is merely the best solution found within that time, and the corresponding gap is an upper estimate.'],
      ['#trdt-lim-item2', '<strong>Larger gaps on dense graphs.</strong> When the optimum is a small number such as 8, each extra legion costs many percentage points: the 50% on g200-.8 is the difference between 12 and 8. The relative gap overstates the distance in those cases.'],
      ['#trdt-lim-item3', '<strong>One run per instance.</strong> The metaheuristics are stochastic, and the reported results do not come from multiple runs with confidence intervals, which rules out claiming small differences between the two algorithms.'],
      ['#trdt-lim-item4', '<strong>Open work.</strong> Widening the hyperparameter search, testing other selection, crossover, mutation, and elitism strategies for the GA, evaluating other choice mechanisms for the ACO, and cutting runtime through implementation optimizations.'],
      ['#trdt-cta-kicker', 'Project context'],
      ['#trdt-cta-titulo', 'Back to the overview of the problem.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'See the overview'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open on GitHub'],
      ['.case-cta .contact-actions a:nth-child(3)', 'Open thesis'],
      ['footer .text-link', 'Back to portfolio'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
      ['.case-meta', 'aria-label', 'Topics on this page'],
      ['#ga .case-list', 'aria-label', 'Components of the genetic algorithm'],
      ['#aco .case-list', 'aria-label', 'Stages of the ant colony algorithm'],
      ['#experimentos .case-list', 'aria-label', 'Experimental protocol'],
      ['#metricas .case-list', 'aria-label', 'Impact communicated'],
      ['#limites .case-list', 'aria-label', 'Limitations of the study'],
    ],
  },
};

const originalContent = new Map();
const originalAttributes = new Map();
const pageTranslations = englishPages[page];

pageTranslations?.content.forEach(([selector]) => {
  const element = document.querySelector(selector);
  if (element) originalContent.set(element, element.innerHTML);
});

pageTranslations?.attributes.forEach(([selector, attribute]) => {
  const element = document.querySelector(selector);
  if (element) originalAttributes.set(selector + ':' + attribute, element.getAttribute(attribute));
});

const originalTitle = document.title;
const descriptionMeta = document.querySelector('meta[name="description"]');
const originalDescription = descriptionMeta?.getAttribute('content');

let currentLanguage = 'pt';

function applyLanguage(language) {
  currentLanguage = language;
  root.lang = language === 'en' ? 'en' : 'pt-BR';

  pageTranslations?.content.forEach(([selector, english]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = language === 'en' ? english : originalContent.get(element);
  });

  pageTranslations?.attributes.forEach(([selector, attribute, english]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const original = originalAttributes.get(selector + ':' + attribute);
    element.setAttribute(attribute, language === 'en' ? english : original);
  });

  document.title = language === 'en' ? pageTranslations?.title || originalTitle : originalTitle;
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      'content',
      language === 'en' ? pageTranslations?.description || originalDescription : originalDescription
    );
  }

  const resumeFiles = language === 'en'
    ? {
        pdf: 'assets/israel_cv_en.pdf',
        tex: 'assets/israel-cv-english.tex',
        download: 'Israel-Souza-Ferreira-Resume.pdf',
      }
    : {
        pdf: 'assets/israel_cv_pt.pdf',
        tex: 'assets/israel-cv-portugues.tex',
        download: 'Israel-Souza-Ferreira-Curriculo.pdf',
      };

  document.querySelectorAll('[data-resume-action]').forEach((link) => {
    const action = link.dataset.resumeAction;

    if (action === 'source') {
      link.href = resumeFiles.tex;
      link.setAttribute('download', '');
      link.removeAttribute('target');
      link.removeAttribute('rel');
      return;
    }

    link.href = resumeFiles.pdf;

    if (action === 'download') {
      link.setAttribute('download', resumeFiles.download);
      link.removeAttribute('target');
      link.removeAttribute('rel');
      return;
    }

    link.removeAttribute('download');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  languageCode.textContent = language === 'en' ? 'PT' : 'EN';
  languageName.textContent = interfaceText[language].languageName;
  const languageLabel = interfaceText[language].switchLanguage;
  languageToggle.setAttribute('aria-label', languageLabel);
  languageToggle.setAttribute('title', languageLabel);

  const menuIsOpen = navToggle.getAttribute('aria-expanded') === 'true';
  const menuLabel = menuIsOpen
    ? interfaceText[language].closeMenu
    : interfaceText[language].openMenu;
  navToggle.setAttribute('aria-label', menuLabel);
  navToggle.querySelector('.sr-only').textContent = menuLabel;

  try {
    localStorage.setItem('portfolio-language', language);
  } catch {
    // Language switching remains available when storage is unavailable.
  }
}

let savedLanguage;
try {
  savedLanguage = localStorage.getItem('portfolio-language');
} catch {
  savedLanguage = null;
}
applyLanguage(savedLanguage === 'en' ? 'en' : 'pt');

function setTheme(theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem('portfolio-theme', theme);
  } catch {
    // O tema continua funcional quando o armazenamento está indisponível.
  }
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  const themeLabel = theme === 'dark'
    ? interfaceText[currentLanguage].lightTheme
    : interfaceText[currentLanguage].darkTheme;
  themeToggle.setAttribute('aria-label', themeLabel);
  themeToggle.setAttribute('title', themeLabel);
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

languageToggle.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
  setTheme(root.dataset.theme);
  closeMenu();
});

function closeMenu() {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', interfaceText[currentLanguage].openMenu);
  navToggle.querySelector('.sr-only').textContent = interfaceText[currentLanguage].openMenu;
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navMenu.classList.toggle('open', !isOpen);
  const menuLabel = isOpen
    ? interfaceText[currentLanguage].openMenu
    : interfaceText[currentLanguage].closeMenu;
  navToggle.setAttribute('aria-label', menuLabel);
  navToggle.querySelector('.sr-only').textContent = menuLabel;
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
  if (window.innerWidth > 820) closeMenu();
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

document.querySelectorAll('.card-clickable').forEach((card) => {
  const primaryLink = card.querySelector('.card-primary-link');
  if (!primaryLink) return;

  card.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    // Não navega quando o clique apenas encerra uma seleção de texto do card.
    if (window.getSelection()?.toString()) return;
    window.location.assign(primaryLink.href);
  });
});

year.textContent = new Date().getFullYear();

/* Mapa interativo da Dominação Romana Tripla — só existe na visão geral do projeto. */
const trdLab = document.querySelector('.trd-lab');

if (trdLab) {
  const trdOptimalWeight = 8;
  const trdLabelCycle = [0, 2, 3, 4];
  const trdOptimalSolution = { iberia: 4, constantinopla: 4 };

  const trdNeighbours = {
    britania: ['galia', 'iberia'],
    galia: ['britania', 'iberia', 'roma'],
    iberia: ['britania', 'galia', 'roma', 'africa'],
    roma: ['galia', 'iberia', 'africa', 'constantinopla', 'egito'],
    africa: ['iberia', 'roma', 'egito'],
    constantinopla: ['roma', 'asiamenor', 'egito'],
    asiamenor: ['constantinopla', 'egito'],
    egito: ['roma', 'africa', 'constantinopla', 'asiamenor'],
  };

  const trdRegionNames = {
    pt: {
      britania: 'Britânia',
      galia: 'Gália',
      iberia: 'Ibéria',
      roma: 'Roma',
      africa: 'África do Norte',
      constantinopla: 'Constantinopla',
      asiamenor: 'Ásia Menor',
      egito: 'Egito',
    },
    en: {
      britania: 'Britain',
      galia: 'Gaul',
      iberia: 'Iberia',
      roma: 'Rome',
      africa: 'North Africa',
      constantinopla: 'Constantinople',
      asiamenor: 'Asia Minor',
      egito: 'Egypt',
    },
  };

  const trdMessages = {
    pt: {
      empty: 'Mapa vazio: as oito regiões estão descobertas.',
      exposedOne: 'Uma região não reúne três legiões de defesa.',
      exposedMany: (total) => `${total} regiões não reúnem três legiões de defesa.`,
      optimal: 'Império protegido pelo custo mínimo. Não existe arranjo mais barato.',
      valid: (weight) => `Império protegido, mas por ${weight} legiões: o melhor arranjo custa ${trdOptimalWeight}.`,
      node: (name, value, exposed) => exposed
        ? `${name}: ${value} legiões, região desprotegida. Ative para alterar.`
        : `${name}: ${value} legiões. Ative para alterar.`,
    },
    en: {
      empty: 'Empty map: all eight regions are uncovered.',
      exposedOne: 'One region does not reach three legions of defence.',
      exposedMany: (total) => `${total} regions do not reach three legions of defence.`,
      optimal: 'The empire is protected at minimum cost. No cheaper arrangement exists.',
      valid: (weight) => `The empire is protected, but at ${weight} legions: the best arrangement costs ${trdOptimalWeight}.`,
      node: (name, value, exposed) => exposed
        ? `${name}: ${value} legions, region left exposed. Activate to change.`
        : `${name}: ${value} legions. Activate to change.`,
    },
  };

  const trdNodes = [...trdLab.querySelectorAll('.trd-node')];
  const trdStatus = trdLab.querySelector('#trd-status');
  const trdStatusText = trdLab.querySelector('#trd-status-text');
  const trdCost = trdLab.querySelector('#trd-score-custo');
  const trdLabels = {};

  trdNodes.forEach((node) => {
    const value = Number(node.querySelector('.trd-node-value').textContent) || 0;
    trdLabels[node.dataset.region] = value;
  });

  /* Defesa disponível em v: as tropas da própria região mais o que cada vizinho
     ativo pode enviar, já descontada a legião que ele precisa deixar em casa. */
  function trdDefence(region) {
    return trdNeighbours[region].reduce(
      (total, neighbour) => (trdLabels[neighbour] > 0 ? total + trdLabels[neighbour] - 1 : total),
      trdLabels[region]
    );
  }

  function trdRender() {
    const language = currentLanguage === 'en' ? 'en' : 'pt';
    const names = trdRegionNames[language];
    const messages = trdMessages[language];
    let weight = 0;
    let exposed = 0;

    trdNodes.forEach((node) => {
      const region = node.dataset.region;
      const value = trdLabels[region];
      const isExposed = trdDefence(region) < 3;

      weight += value;
      if (isExposed) exposed += 1;

      node.classList.toggle('is-troops', value > 0 && !isExposed);
      node.classList.toggle('is-exposed', isExposed);
      node.querySelector('.trd-node-value').textContent = String(value);
      node.querySelector('.trd-node-name').textContent = names[region];
      node.setAttribute('aria-label', messages.node(names[region], value, isExposed));
    });

    trdCost.textContent = String(weight);
    trdStatus.classList.toggle('is-exposed', exposed > 0);

    if (weight === 0) {
      trdStatusText.textContent = messages.empty;
    } else if (exposed === 1) {
      trdStatusText.textContent = messages.exposedOne;
    } else if (exposed > 1) {
      trdStatusText.textContent = messages.exposedMany(exposed);
    } else if (weight === trdOptimalWeight) {
      trdStatusText.textContent = messages.optimal;
    } else {
      trdStatusText.textContent = messages.valid(weight);
    }
  }

  function trdCycleRegion(region) {
    const next = (trdLabelCycle.indexOf(trdLabels[region]) + 1) % trdLabelCycle.length;
    trdLabels[region] = trdLabelCycle[next];
    trdRender();
  }

  trdNodes.forEach((node) => {
    node.addEventListener('click', () => trdCycleRegion(node.dataset.region));
    node.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      trdCycleRegion(node.dataset.region);
    });
  });

  trdLab.querySelectorAll('[data-trd-action]').forEach((button) => {
    button.addEventListener('click', () => {
      Object.keys(trdLabels).forEach((region) => {
        trdLabels[region] = button.dataset.trdAction === 'optimal'
          ? trdOptimalSolution[region] || 0
          : 0;
      });
      trdRender();
    });
  });

  languageToggle.addEventListener('click', trdRender);
  trdRender();
}
