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
    title: 'Israel Souza Ferreira | Data Scientist',
    description: 'Portfolio of Israel Souza Ferreira — data science, statistical modeling, controlled experimentation, machine learning, and MLOps.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="#sobre"]', 'About'],
      ['.nav-menu a[href="#experiencia"]', 'Experience'],
      ['.nav-menu a[href="#projetos"]', 'Projects'],
      ['.nav-menu a[href="#competencias"]', 'Skills'],
      ['.nav-menu a[href="#curriculo"]', 'Résumé'],
      ['.nav-menu a[href="#contato"]', 'Contact'],
      ['.hero .eyebrow', 'Neural Networks · Statistics · Computational Performance · Experimentation'],
      ['.hero h1', 'I turn data into decisions — and measure whether they actually hold up.'],
      ['.hero-description', 'I am <strong>Israel Souza Ferreira</strong>, a data scientist with an analytical, mathematical-technical profile. I implement and optimize neural networks with a focus on computational performance, backed by controlled experimentation — under one rule: measure before concluding.'],
      ['.hero-quote', '<em lang="la">Sapientis est mutare consilium.</em> — I start from an a priori hypothesis; if the facts do not confirm it, I change my mind, as the scientific method requires.'],
      ['.hero-actions a:nth-child(1)', 'View projects'],
      ['.hero-actions a:nth-child(2)', 'View résumé'],
      ['.hero-meta li:nth-child(1)', '<svg class="location-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg> Fortaleza, Ceará, Brazil'],
      ['.hero-meta li:nth-child(2)', '● Open to opportunities'],
      ['.terminal-card code', '<span class="terminal-muted">$</span> profile --summary\n\n<span class="terminal-key">focus</span>: neural networks and computational performance\n<span class="terminal-key">languages</span>: Python, SQL, and C++\n<span class="terminal-key">interests</span>:\n  - multitask and multimodal neural networks\n  - optimization and computational performance\n  - statistical modeling and experiments\n  - MLOps and inference APIs\n\n<span class="terminal-success">status: measuring before concluding</span>'],
      ['#sobre .section-kicker', 'About me'],
      ['#sobre h2', 'Rigorous analysis with practical impact.'],
      ['#sobre .lead', 'I combine academic research with projects aimed at real problems in education and public health. I work across the full cycle: extraction at scale, modeling, experimental design, and communicating to whoever has to decide.'],
      ['#experiencia .experience-layout > div:first-child .section-kicker', 'Experience'],
      ['#experiencia .experience-layout > div:first-child h2', 'Data science with engineering depth.'],
      ['#experiencia .experience-layout > div:first-child .lead', 'Applied research in education, the end-to-end delivery of a contracted machine learning system, and academic tutoring in algorithms and computational complexity.'],
      ['.experience-heading h3', 'Data Scientist / R&amp;D — applied research in education'],
      ['.experience-company', 'Tieta Artificial Intelligence · CNPq RHAE Fellow'],
      ['.experience-period', 'Apr 2025 — Jun 2026'],
      ['.experience-facts div:nth-child(1) dt', 'Statistical modeling'],
      ['.experience-facts div:nth-child(1) dd', 'IRT and multitask regression'],
      ['.experience-facts div:nth-child(2) dt', 'Experimentation'],
      ['.experience-facts div:nth-child(2) dd', 'paired evaluation and ablation'],
      ['.experience-facts div:nth-child(3) dt', 'Communication'],
      ['.experience-facts div:nth-child(3) dd', 'reproducible results'],
      ['.experience-list li:nth-child(1)', 'Modeled psychometric parameters of educational items with Item Response Theory, validating the estimates against reference parameters.'],
      ['.experience-list li:nth-child(2)', 'Designed paired evaluations to compare approaches under the same protocol, measuring correlation with the reference and inference cost.'],
      ['.experience-list li:nth-child(3)', 'Built signal-extraction pipelines with language models orchestrated by DSPy, and tested multitask regression architectures.'],
      ['#experiencia .tag-list li:nth-child(1)', 'Data Science'],
      ['#experiencia .tag-list li:nth-child(2)', 'Statistics'],
      ['#experiencia .tag-list li:nth-child(3)', 'Item Response Theory'],
      ['#experiencia .tag-list li:nth-child(7)', 'NLP'],
      ['.experience-stack .experience-card:nth-child(2) h3', 'R&amp;D Researcher — Research and Innovation Training Program'],
      ['.experience-stack .experience-card:nth-child(2) .experience-company', 'Tieta Artificial Intelligence · Remote'],
      ['.experience-stack .experience-card:nth-child(2) .experience-period', 'Jul 2026 — present'],
      ['.experience-stack .experience-card:nth-child(2) .experience-list li:nth-child(1)', 'Building an OCR-based segmentation pipeline for scanned exam papers, extracting structured questions for educational analysis.'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(2)', 'Document Segmentation'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list li:nth-child(3)', 'Computer Vision'],
      ['#fc-exp-cargo', 'Full stack developer and machine learning engineer'],
      ['#fc-exp-empresa', 'Independent consulting · Educational institution · Remote'],
      ['#fc-exp-periodo', '2026 — present'],
      ['#fc-exp-lead', 'Face Clock Evoluir: employees clock in by looking at a camera. No badge, no password, no fingerprint — and the system works out on its own who they are, among everyone enrolled, in under a second.'],
      ['#fc-exp-facts div:nth-child(1) dt', 'End to end'],
      ['#fc-exp-facts div:nth-child(1) dd', 'models, backend, data, and deployment'],
      ['#fc-exp-facts div:nth-child(2) dd', 'automated tests running on every change'],
      ['#fc-exp-facts div:nth-child(3) dd', 'the client’s server had no GPU — and it still fit'],
      ['#fc-exp-lista li:nth-child(1)', 'Delivered the whole system, end to end: the screen the employee uses, the kiosk on the wall, the models that recognize the face, the database, and the installation on the server.'],
      ['#fc-exp-lista li:nth-child(2)', 'Made the recognition tell one person apart from everyone enrolled — and reject photos of photos, which is how a system like this gets fooled.'],
      ['#fc-exp-lista li:nth-child(3)', 'Before, someone in HR opened medical certificates one by one, as they arrived from employees’ phones, just to check they really were certificates. I taught the system to do that triage on its own.'],
      ['#fc-exp-lista li:nth-child(4)', 'When the model was getting too much wrong, I resisted the obvious answer — swapping in a bigger model — and ruled it out by experiment: capacity was already more than enough. The real causes were two others, and isolating them one at a time gave back 16 percentage points of accuracy.'],
      ['#fc-exp-lista li:nth-child(5)', 'Close to delivery, I found out the client’s server had no GPU and only 8&nbsp;GB of memory. I fit the entire application back inside that limit without giving anything up — and, along the way, found three defects that would have kept the installation from working.'],
      ['.experience-teaser', 'How do you prove, by experiment, that the cause of an error is this one and not another? And how did a server with no GPU come to run facial recognition in real time, deciding exactly as it did before? That is what the case study covers — in plain language, before reaching a single line of code.'],
      ['#experiencia-face-clock .experience-links a:nth-child(1)', 'See the case study <span class="card-link-arrow" aria-hidden="true">→</span>'],
      ['#experiencia-face-clock .experience-links a:nth-child(2)', 'See the technical breakdown →'],
      ['#experiencia-face-clock .experience-links a:nth-child(3)', 'Public repository →'],
      ['.experience-stack .experience-card:nth-child(4) h3', 'Teaching Assistant — Algorithms, Calculus, and Pre-Calculus'],
      ['.experience-stack .experience-card:nth-child(4) .experience-company', 'Federal University of Ceará — Quixadá Campus · On-site'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts div:nth-child(1) dt', 'Data structures'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts div:nth-child(1) dd', 'and algorithms'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts div:nth-child(2) dt', 'Complexity'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts div:nth-child(2) dd', 'asymptotic analysis'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts div:nth-child(3) dt', 'Calculus'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts div:nth-child(3) dd', 'and pre-calculus'],
      ['.experience-stack .experience-card:nth-child(4) .experience-list li:nth-child(1)', 'Supported undergraduate classes in data structures, algorithms, and complexity analysis, translating quantitative content for students still building their foundations.'],
      ['.experience-stack .experience-card:nth-child(4) .experience-list li:nth-child(2)', 'Reinforced Calculus and Pre-Calculus fundamentals — the mathematical base that now supports statistical modeling and neural-network optimization.'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(1)', 'Data Structures'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(2)', 'Algorithms'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(3)', 'Computational Complexity'],
      ['.experience-stack .experience-card:nth-child(4) .tag-list li:nth-child(4)', 'Calculus'],
      ['#projetos .section-kicker', 'Selected projects'],
      ['#projetos .section-heading h2', 'Work that shows how I think and build.'],
      ['#projetos .section-heading .text-link', 'All repositories →'],
      ['#projetos .project-card:nth-child(1) .status', 'Completed'],
      ['#projetos .project-card:nth-child(1) h3', 'Triple Roman Domination'],
      ['#projetos .project-card:nth-child(1) > p', 'The first GA- and ACO-based metaheuristics in the literature for the TRDP, together with a corrected ILP formulation for exact solutions.'],
      ['#projetos .project-card:nth-child(1) .tag-list li:nth-child(3)', 'Graph Theory'],
      ['#projetos .project-card:nth-child(1) .tag-list li:nth-child(4)', 'Metaheuristics'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(1)', 'Explore project <span class="card-link-arrow" aria-hidden="true">→</span>'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(2)', 'View technical breakdown →'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(3)', 'Code →'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(4)', 'Read thesis →'],
      ['#projetos .project-card:nth-child(2) .status', 'In development'],
      ['#projetos .project-card:nth-child(2) h3', 'Brazilian Emergency Aid — Ingestion and performance experiments'],
      ['#projetos .project-card:nth-child(2) > p', 'Picked back up on my own initiative after the academic submission. Chunked ingestion through binary <code>COPY</code> over 31.6 GB of public data; instrumentation tied memory growth to retained deduplication identifiers (r = 0.99).'],
      ['#projetos .project-card:nth-child(2) .project-links a', 'Code and documentation →'],
      ['#competencias .section-kicker', 'Skills'],
      ['#competencias h2', 'Tools for investigating, modeling, and communicating.'],
      ['#competencias .lead', 'A technical foundation covering the full data-project lifecycle, from initial analysis to communicating results.'],
      ['#competencias .skill-group:nth-child(1) h3', 'Languages and querying'],
      ['#competencias .skill-group:nth-child(1) p', 'Python, SQL, C++, Bash, Pandas, NumPy, and Git'],
      ['#competencias .skill-group:nth-child(2) h3', 'Analysis and statistics'],
      ['#competencias .skill-group:nth-child(2) p', 'SciPy, Scikit-learn, hypothesis testing, correlation analysis, cross-validation, model calibration, and ablation analysis'],
      ['#competencias .skill-group:nth-child(3) h3', 'Neural networks and computational performance'],
      ['#competencias .skill-group:nth-child(3) p', 'PyTorch, time series (LSTM, PLE), MoE/MMoE, Transformers, DSPy, vector search, and metaheuristics'],
      ['#competencias .skill-group:nth-child(4) h3', 'Data and infrastructure'],
      ['#competencias .skill-group:nth-child(4) p', 'PostgreSQL, pgvector, FAISS, MLflow, Docker, FastAPI, GitHub Actions, Streamlit, and data visualization'],
      ['#competencias .soft-skills .section-kicker', 'Analytical principles'],
      ['#competencias .soft-skills h2', 'How I work.'],
      ['#competencias .soft-skills .lead', 'I state a hypothesis before looking at the result — and change my mind whenever the facts do not confirm it.'],
      ['#competencias .soft-skill-card:nth-child(1) h3', 'Measure before concluding'],
      ['#competencias .soft-skill-card:nth-child(1) p', 'A hypothesis without an experiment is a guess. I simulate the change over real data before touching the system — that is how an obvious fix turned out to be a regression.'],
      ['#competencias .soft-skill-card:nth-child(2) h3', 'Keep experiments reproducible'],
      ['#competencias .soft-skill-card:nth-child(2) p', 'Control group, one variable at a time, isolated environment. Any conclusion can be re-run by someone else.'],
      ['#competencias .soft-skill-card:nth-child(3) h3', 'Revise hypotheses in the face of facts'],
      ['#competencias .soft-skill-card:nth-child(3) p', 'I start from an a priori hypothesis, but change position when facts and evidence contradict it. That is the commitment I expect from scientific work.'],
      ['#curriculo .section-kicker', 'Résumé'],
      ['#curriculo h2', 'Experience in data science, statistical modeling, and machine learning.'],
      ['#curriculo .contact-card > div:first-child > p:last-child', 'Read the professional résumé PDF and the academic version, the Lattes Curriculum — CNPq’s official platform, where education, output, and affiliations can be checked at the source. Together, they cover experience, education, projects, and technical skills.'],
      ['#curriculo .contact-actions a:nth-child(1)', 'Open PDF'],
      ['#curriculo .contact-actions a:nth-child(2)', 'Download PDF'],
      ['#curriculo .contact-actions a:nth-child(3)', 'LaTeX source'],
      ['#curriculo .contact-actions a:nth-child(4)', 'Lattes Curriculum (CNPq)'],
      ['#curriculo .contact-actions a:nth-child(5)', 'Lattes as PDF'],
      ['#contato .section-kicker', 'Contact'],
      ['#contato h2', 'Let’s talk about data, research, or opportunities.'],
      ['#contato .contact-card > div:first-child > p:last-child', 'Send me a message or visit my professional profiles.'],
      ['#contato .contact-actions a:nth-child(1)', 'Send email'],
      ['footer .footer-content > p:last-child', 'Built with HTML, CSS, and JavaScript.'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Home page'],
      ['.hero-meta', 'aria-label', 'Professional information'],
      ['.terminal-card', 'aria-label', 'Professional summary'],
      ['.experience-facts', 'aria-label', 'Research experience summary'],
      ['#experiencia .tag-list', 'aria-label', 'Experience technologies'],
      ['.experience-stack .experience-card:nth-child(2) .tag-list', 'aria-label', 'Experience technologies'],
      ['.experience-stack .experience-card:nth-child(4) .experience-facts', 'aria-label', 'Teaching assistantship summary'],
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
    description: 'Face Clock Evoluir case study: workforce time tracking with facial biometrics, geofencing, medical-document classification, and production engineering.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href="tecnico.html"]', 'Technical breakdown'],
      ['.nav-menu a[href*="face-clock-evoluir-public"]', 'Public repository'],
      ['.case-breadcrumb', '← Back to projects'],
      ['.case-hero .eyebrow', 'Applied product · Computer vision · Under acceptance testing'],
      ['.case-title', 'Face Clock Evoluir'],
      ['.case-intro', 'A workforce time-tracking system developed for an educational institution, combining facial biometrics, location validation, and medical-document classification in an architecture designed for real-world use.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'Understand the system'],
      ['.case-hero .hero-actions a:nth-child(2)', 'See the technical breakdown'],
      ['.case-hero .hero-actions a:nth-child(3)', 'Public repository'],
      ['#problema .section-kicker', 'The problem'],
      ['#problema h2', 'Record attendance without creating friction.'],
      ['#problema .case-prose p:nth-child(1)', 'A time-tracking system must recognize the right person, confirm that they are at an allowed location, and remain simple enough for daily use.'],
      ['#problema .case-prose p:nth-child(2)', 'The system replaces cards and passwords with contextual biometric verification, serves both individual check-in and a kiosk mode, and ties attendance to shifts, hour banks, and medical-certificate submission.'],
      ['#problema .case-prose p:nth-child(3)', 'The most important product decision was to separate observation from punishment: a clock-in outside the expected schedule is recorded and flagged, not blocked.'],
      ['#como-funciona .section-kicker', 'How it works'],
      ['#como-funciona h2', 'From camera to attendance record.'],
      ['#como-funciona .case-section-heading .lead', 'Recognition is only one stage in a flow that also considers quality, security, and context.'],
      ['.flow-step:nth-child(1) strong', 'Capture'],
      ['.flow-step:nth-child(1) p', 'Multiple frames reduce dependence on a single image and make it possible to filter poor samples.'],
      ['.flow-step:nth-child(2) strong', 'Representation'],
      ['.flow-step:nth-child(2) p', 'InsightFace transforms each face into a normalized 512-dimensional vector.'],
      ['.flow-step:nth-child(3) strong', 'Search'],
      ['.flow-step:nth-child(3) p', 'pgvector compares embeddings through cosine similarity in both 1:1 and 1:N modes.'],
      ['.flow-step:nth-child(4) strong', 'Context'],
      ['.flow-step:nth-child(4) p', 'Geofencing, liveness checks, and replay protection strengthen the validity of each attempt.'],
      ['.flow-step:nth-child(5) strong', 'Record'],
      ['.flow-step:nth-child(5) p', 'The clock-in is persisted, and any shift deviations are shown without preventing the record.'],
      ['#maquina-estados .section-kicker', 'Kiosk behavior'],
      ['#maquina-estados h2', 'A flow controlled by a finite-state machine.'],
      ['#maquina-estados .case-prose p:nth-child(1)', 'The state machine controls punch types and prevents inconsistent sequences: each new record is validated against the previous state.'],
      ['#maquina-estados .case-prose p:nth-child(2)', 'After facial authentication and location validation, <code>PontoFSM</code> resolves the next action: you can clock out right after clocking in, take breaks, and end the shift during a break without recording a return that never happened.'],
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
      ['#atestados h2', 'Intelligent medical-document triage.'],
      ['#atestado-lead', 'When someone submits a medical certificate through the system, a computer-vision model and an automatic reading of the text check whether the document really is a medical certificate, before it reaches the person who approves it.'],
      ['#atestado-resumo', 'Triage does not decide on its own: it organizes the queue and flags what looks out of place, but the final word belongs to a person. On documents the model had never seen, the chosen version is right 87.5% of the time and makes seven fewer mistakes than the previous one, without recognizing fewer certificates.'],
      ['#atestado-rotulos', 'Human decisions can feed retraining. To prevent incorrect labels, rejected documents only become negative examples when person and model agree.'],
      ['#resumo .section-kicker', 'Summary'],
      ['#resumo h2', 'The essentials in five points.'],
      ['#resumo .case-list li:nth-child(1)', '<strong>Problem and user:</strong> recording staff attendance at an educational institution without cards, passwords, or queues — including people who work off-site.'],
      ['#resumo .case-list li:nth-child(2)', '<strong>My responsibility:</strong> sole end-to-end delivery — models, backend, database, security, testing, and deployment.'],
      ['#resumo .case-list li:nth-child(3)', '<strong>Architecture:</strong> facial biometrics with vector search in PostgreSQL (<code>pgvector</code>), GPS geofencing, medical-document triage with a neural network and OCR, and a FastAPI backend on Docker.'],
      ['#resumo .case-list li:nth-child(4)', '<strong>Evidence:</strong> 292 automated tests in a Docker pipeline; 468 documents triaged by objective quality signals; a silent image-orientation bug diagnosed through EXIF metadata; sixteen percentage points of validation accuracy recovered across two causes isolated by experiment; five classification approaches compared under the same protocol, from the trivial classifier to the winning hybrid.'],
      ['#resumo .case-list li:nth-child(5)', '<strong>Status:</strong> contracted system, functional and in final acceptance testing before deployment.'],
      ['#deep-dive .section-kicker', 'Going deeper'],
      ['#deep-dive h2', 'From here on, the detail.'],
      ['#ponte-lead', 'The technical page documents the comparison between classification approaches, the diagnosis of a silent bug, the experiments that isolated the model’s underfitting, and the security layers.'],
      ['#deep-dive .hero-actions a', 'See the technical breakdown →'],
      ['#qualidade .section-kicker', 'Quality'],
      ['#qualidade h2', 'Validated beyond the development environment.'],
      ['#qualidade .case-prose > p', 'The application was tested as a real production stack, without the development shortcuts that hide missing files, wrong permissions, or startup failures. Browser tests revealed problems that reading the code did not catch.'],
      ['#qualidade .case-result:nth-child(1) span', 'automated tests passing in the Docker pipeline'],
      ['#qualidade .case-result:nth-child(2) span', 'portable inference, with optional acceleration when available'],
      ['#qualidade .case-result:nth-child(3) span', 'secure remote access without exposing the backend directly'],
      ['#status .section-kicker', 'Current status'],
      ['#status h2', 'In final acceptance testing.'],
      ['#status .case-prose p:nth-child(1)', 'The system is not yet completed or delivered: it is in the final validation stage before definitive deployment at the institution.'],
      ['#status .case-prose p:nth-child(2)', 'Because it is a client product, the code is proprietary. The public repository shows architecture, technologies, and technical decisions without exposing institutional data.'],
      ['.case-cta .section-kicker', 'Public showcase'],
      ['.case-cta h2', 'Explore the architecture and technical documentation.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'See the technical breakdown'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open on GitHub'],
      ['.case-cta .contact-actions a:nth-child(3)', 'View other projects'],
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
    description: 'Technical deep dive into Face Clock Evoluir: experimental diagnosis of the classifier, a baseline ladder for medical-document triage, and the application security layers.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="index.html"]', 'Case study'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href*="face-clock-evoluir-public"]', 'Public repository'],
      ['.case-breadcrumb', '← Back to the case study'],
      ['.case-hero .eyebrow', 'Technical deep dive · Face Clock Evoluir'],
      ['.case-title', 'The technical structure in detail.'],
      ['.case-intro', 'This page documents what supports the numbers in the case study: how each classification approach was compared under the same protocol, how a silent bug was diagnosed, how the cause of the model’s underfitting was isolated by experiment, and how the application is protected in layers.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'See the classification experiment'],
      ['.case-hero .hero-actions a:nth-child(2)', 'See the model diagnosis'],
      ['.case-hero .hero-actions a:nth-child(3)', 'See the freeze-depth experiment'],
      ['.case-hero .hero-actions a:nth-child(4)', 'See engineering and security'],
      ['.case-meta li:nth-child(1)', 'Controlled experiments'],
      ['.case-meta li:nth-child(2)', 'Baseline comparison'],
      ['.case-meta li:nth-child(5)', 'Application security'],
      ['#atestados .section-kicker', 'Classification experiment'],
      ['#atestados h2', 'A ladder of baselines, from trivial to hybrid.'],
      ['#atestado-lead', 'The medical-certificate classifier was not merely tuned until it looked good: it was compared against explicit alternatives, from the trivial classifier to the hybrid one, all under the same selection protocol and the same final measurement.'],
      ['#atestado-dados', 'The classifier runs in its own service and was structured with selective fine-tuning and a reproducible comparison between approaches. The split is stratified, generated by a seeded script, and versioned: 297 documents for training, 64 for validation, and 64 for the final test; the test set took part neither in early stopping nor in hyperparameter selection.'],
      ['#atestado-metodo', 'The comparison was built as a ladder of baselines, from trivial to hybrid. Each candidate had its hyperparameters chosen by grid search with five-fold stratified cross-validation <em>inside the training set</em>, optimizing F1 for the minority class — certificates account for 31% of the data. No test image took part in the search; it was used only for the final measurement. The floor comes from a classifier that always answers the majority class: 68.8% accuracy with an F1 of zero, which already shows that accuracy alone does not describe this problem.'],
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
      ['#atestado-hog', 'The experiment avoided a shallow conclusion in two directions. HOG + SVM, an entirely classical approach, reached an F1 of 0.636 — above the floor, but below the network’s original head (0.651): edges and layout are not enough to separate these documents. And the winning alternative’s gain did not come from replacing the network with a classical method, but from recombining them: EfficientNet supplies the 1,280-dimensional embeddings and Logistic Regression makes the final decision. OCR remains a rule-based review layer.'],
      ['#atestado-precisao', 'Both heads recover the same number of certificates, 14 of the 20 in the test set; what changes is the cost of that recovery, from 9 false positives to 2. And the improvement is not merely a threshold choice: the ranking of documents by probability also improved, with ROC AUC going from 0.814 to 0.892 and PR AUC from 0.697 to 0.823.'],
      ['#atestado-ressalvas', 'With 64 test documents, small F1 differences do not support a ranking. Among the three classifiers over embeddings, cross-validation results fell within 0.004 of each other (0.904 to 0.908) and the order observed on the test set is not significant; among the HOG baselines, the best model in cross-validation was not the best on the test set. Cross-validation on the embeddings is also not an apples-to-apples match for HOG: the backbone was fine-tuned on those same training images, so its internal number is optimistic by construction. The fair comparison between the two families is the test set, where neither had seen the documents.'],
      ['#metodo .section-kicker', 'Investigation method'],
      ['#metodo h2', 'Measure before concluding.'],
      ['#metodo .case-prose .lead', 'The pipeline OCR was returning poor results on part of the documents. Rather than swapping the tool, the source of the problem was investigated — and it was not the OCR.'],
      ['#metodo .case-result:nth-child(1) span', 'documents triaged automatically using objective quality signals'],
      ['#metodo .case-result:nth-child(2) span', 'images reached the model rotated because of an ignored EXIF metadata tag'],
      ['#metodo .case-result:nth-child(3) span', 'lines removed after concluding that an experiment\u2019s premise did not hold'],
      ['#metodo .case-list li:nth-child(1)', '<strong>Diagnosing the silent bug:</strong> phone photos carry the rotation needed for display in the EXIF <code>Orientation</code> tag. Viewers apply that tag; the imaging library used in the pipeline does not. Documents reached the neural network and the OCR sideways without raising any error — only unreadable text. In the verified samples, normalizing orientation took extraction from no recognized terms to correct identification of the document.'],
      ['#metodo .case-list li:nth-child(2)', '<strong>Discarding my own false positive:</strong> the OCR orientation detector reported rotation across 45% of the dataset. Cross-checking against file type showed that 91 of 109 \u201c180\u00b0\u201d cases were screen captures — which are never upside down. The signal was detector noise, not a property of the data; only the EXIF metadata confirmed the hypothesis.'],
      ['#metodo .case-list li:nth-child(3)', '<strong>Fixing without train/serve skew:</strong> normalizing orientation only at inference would have created <em>train/serve skew</em>, since the model had been trained on those same rotated images. The fix was centralized in a single read path, applied to the training data loader as well, followed by retraining — whose effect on the classifier was reported as neutral rather than as a gain.'],
      ['#metodo .case-list li:nth-child(4)', '<strong>Choosing metrics by fit, not sophistication:</strong> Jensen-Shannon divergence was considered for comparing two pipelines and discarded after a numerical demonstration: in a constructed case with disagreement on 100% of documents, the divergence between marginal distributions is exactly zero. The comparison moved to paired instruments that see disagreement document by document.'],
      ['#diagnostico .section-kicker', 'Experimental diagnosis'],
      ['#diagnostico h2', 'Rule out hypotheses — including your own.'],
      ['#diagnostico .case-prose .lead', 'The classifier was not learning as much as it should. Instead of reaching for the usual guess — a bigger model — each candidate cause became a controlled experiment, with a control group and one variable at a time.'],
      ['#diagnostico .case-result:nth-child(1) span', 'hypotheses ruled out by experiment: capacity, overfitting, and loss regularization'],
      ['#diagnostico .case-result:nth-child(2) span', 'epochs for the same parameters to fully fit a subset, refuting a lack of capacity'],
      ['#diagnostico .case-result:nth-child(3) span', 'percentage points of validation accuracy, across two causes isolated by experiment'],
      ['#diagnostico .case-list li:nth-child(1)', '<strong>The obvious answer, tested and rejected:</strong> the standard reaction to a model that will not learn is to add capacity. A memorization test showed that the same trainable parameters fully fit a small subset within four epochs once regularization was removed. Capacity was ample — extra parameters would have cost slower training without moving the result.'],
      ['#diagnostico .case-list li:nth-child(2)', '<strong>One of my own hypotheses, overturned by the experiment:</strong> the initial suspicion was that label smoothing imposed a confidence ceiling, since the theoretical ceiling sat just above the observed maximum. The controlled experiment removed the smoothing and the ceiling did not rise. The proximity between the two numbers was coincidence, not cause — and the earlier conclusion was revised.'],
      ['#diagnostico .case-list li:nth-child(3)', '<strong>The intuitive fix would have made things worse:</strong> the decision threshold looked too high, and lowering it seemed the natural adjustment. Simulating the full pipeline across nine thresholds showed the opposite: reducing the value improves the classifier in isolation and degrades the final result, because it gives voice to the less accurate component. Measuring prevented a regression in production.'],
      ['#diagnostico .case-list li:nth-child(4)', '<strong>The real cause, and a second hypothesis corrected:</strong> what remained was the set of transformations applied to training images. The suspicion was horizontal flipping, invalid for documents because mirrored text never occurs among real inputs. Removing it alone changed nothing measurable; reducing the full transformation load raised validation accuracy by thirteen percentage points and kept the model learning for twenty-three epochs, against four before. The problem was the aggregate volume, not the transformation intuition had pointed to.'],
      ['#diagnostico .case-list li:nth-child(5)', '<strong>A second bottleneck, exposed by the first fix:</strong> with the model already better, I noticed training stopped while it was still improving — the stopping criterion measured accuracy, which on a small validation set moves in large jumps and saturates. I compared three criteria in isolated training runs; the one I had bet on came last, and the winner let the model train three times longer before stopping.'],
      ['#diagnostico .case-list li:nth-child(6)', '<strong>The earlier conclusion, invalidated by the fixes themselves:</strong> while the classifier was stuck, measurement indicated it contributed almost nothing — the OCR carried the result alone. Re-running the same evaluation reversed the picture: the network began crossing the decision threshold on 23.7% of documents against 0.6% before, agreement between the two components moved from chance level to moderate, and the squared error of the probabilities fell to under a quarter of its original value. The conclusion held for the defective model, not for the problem. Because the evaluation instruments were already in place, re-checking cost a re-run, with no new code.'],
      ['#congelamento .section-kicker', 'Architecture validation'],
      ['#congelamento h2', 'An overfitting alarm that the 5-fold defused.'],
      ['#congelamento-lead', 'The unfreezing configuration used in production looked like it was overfitting: 97% training accuracy against 70% on a test set of only 40 images. Instead of accepting that diagnosis, three unfreezing depths were compared under the same cross-validation protocol.'],
      ['#congelamento-contexto', 'The network starts from ImageNet-pretrained weights; the question is how many final blocks to unfreeze for the medical-certificate domain. Three options entered the comparison: only the classifier head, the head plus the last feature block, and the head plus the last two feature blocks — this last one already in production. Each ran under stratified 5-fold cross-validation over the 406 training images, up to 30 epochs with early stopping at a patience of 7, always with the same seed and the same class balancing.'],
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
      ['#congelamento-figura-legenda', 'Mean validation accuracy for each configuration, with the standard deviation across the five folds: the production configuration does not just win — it is also the most stable of the three.'],
      ['#congelamento .case-result:nth-child(1) span', 'average validation accuracy of the production configuration — the highest and most stable of the three'],
      ['#congelamento .case-result:nth-child(2) span', 'accuracy of the configuration that only trains the classifier head — insufficient capacity for the domain'],
      ['#congelamento .case-result:nth-child(3) span', 'images in the test set that triggered the initial alarm — too much variance to support a conclusion on its own'],
      ['#congelamento-conclusao', 'The intermediate configuration, with only one block unfrozen, generalized worse and less consistently (74.9% ± 6.7%) than the current one with two blocks — unfreezing more did not make things worse, contradicting the natural suspicion that more trainable parameters would increase overfitting. The 27-point gap that triggered the initial alarm did not reappear in the 5-fold: there, between training and validation, it sat around 10 points for the current configuration — the difference came from the variance of a small test set, not real memorization. The architecture already in production was confirmed, and the next quality gain depends on more data — especially the minority class, non-certificate — not on adjusting the unfreezing depth.'],
      ['#engenharia .section-kicker', 'Engineering and security'],
      ['#engenharia h2', 'Reliability built in layers.'],
      ['#engenharia .case-prose > .lead', 'Identity is validated at different levels: user, session, authorization, device, and biometric attempt. Each layer reduces a different type of risk.'],
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
      ['#engenharia .case-list li:nth-child(7)', '<strong>Protected biometrics:</strong> multiple frames, liveness, a SHA-256 anti-replay fingerprint, and controls for sensitive data under Brazil’s LGPD.'],
      ['#engenharia .case-list li:nth-child(8)', '<strong>Restricted deployment:</strong> locally exposed backend, HTTPS tunnel, versioned migrations, and persistent volumes.'],
      ['.case-highlight .section-kicker', 'Architecture decision'],
      ['.case-highlight .lead', 'CPU-bound inference operations remain synchronous; asynchronous concurrency is reserved for I/O waits. This avoids complexity without benefit and makes explicit where each execution model actually helps.'],
      ['.case-highlight .case-highlight-note', 'A load test exposed the other side of that boundary. Logins were failing on connection-pool exhaustion, and the apparent diagnosis — a pool that was too small — was the wrong one: the user lookup opened a transaction, and the connection stayed checked out for the entire bcrypt computation, CPU work that never touches the database. With a hash costing around 100&nbsp;ms, each connection serves at most ten logins per second no matter how idle the CPU is. Releasing the connection before the hash matters more than enlarging the pool.'],
      ['.case-cta .section-kicker', 'Project context'],
      ['.case-cta h2', 'Back to the system overview.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'See the case study'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open on GitHub'],
      ['footer .text-link', 'Back to portfolio'],
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
      ['.case-title', 'How do you defend an entire empire with half the troops?'],
      ['#trd-intro', 'Constantine faced this in the fourth century. It became a mathematical problem that no computer solves quickly to this day. My thesis attacked it with algorithms inspired by ants and by evolution — and corrected a published model that was wrong.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'See the strategy'],
      ['.case-hero .hero-actions a:nth-child(2)', 'See the technical breakdown'],
      ['.case-hero .hero-actions a:nth-child(3)', 'Repository'],
      ['.case-meta li:nth-child(2)', 'Genetic Algorithm'],
      ['.case-meta li:nth-child(3)', 'Ant Colony Optimization'],
      ['.case-meta li:nth-child(4)', 'Integer Linear Programming'],
      ['#resumo .section-kicker', 'Summary'],
      ['#trd-resumo-titulo', 'The essentials in five points.'],
      ['#trd-resumo-1', '<strong>The problem:</strong> protecting every region of a graph at the lowest cost, with the ungarrisoned ones depending on their neighbours. It is NP-complete.'],
      ['#trd-resumo-2', '<strong>My contribution:</strong> the first two metaheuristics in the literature for the problem — ant colony optimization and a genetic algorithm, in C++.'],
      ['#trd-resumo-3', '<strong>The correction:</strong> the exact formulation published earlier accepts invalid solutions. I show the counterexample and propose the first correct one.'],
      ['#trd-resumo-4', '<strong>Evidence:</strong> 362 graphs under three metrics declared before the experiments. Only 6 ended up more than 50% away from the reference.'],
      ['#trd-resumo-5', '<strong>Format:</strong> undergraduate thesis in Computer Science at UFC Quixadá, defended in February 2025.'],
      ['#trd-estrategia-kicker', 'Constantine’s strategy'],
      ['#trd-estrategia-titulo', 'Half the legions, the same territory.'],
      ['#trd-estrategia-lead', 'Eight regions, fifty legions. When only twenty-five were left, garrisoning everything became impossible — so the emperor changed the question.'],
      ['#trd-passo1-titulo', 'Eight neighbouring regions'],
      ['#trd-passo1-texto', 'Gaul, Rome, Constantinople, Iberia, Asia Minor, Egypt, North Africa, and Britain, linked by their borders.'],
      ['#trd-passo2-titulo', 'Half the force'],
      ['#trd-passo2-texto', 'From fifty down to about twenty-five legions: not enough to occupy every region.'],
      ['#trd-passo3-titulo', 'Defence in depth'],
      ['#trd-passo3-texto', 'A region may sit without troops, as long as its neighbours can come to the rescue without leaving themselves undefended.'],
      ['#trd-retrato-legenda', 'Constantine the Great, who reorganized the defence of the empire in the fourth century. Bust at the Museo Chiaramonti, Vatican. Photograph by Marie-Lan Nguyen, public domain.'],
      ['#trd-regra-kicker', 'The rule of the game'],
      ['#trd-regra-titulo', 'Three legions of defence for every region.'],
      ['#trd-formula-kicker', 'The whole rule, in one sentence'],
      ['#trd-formula-frase', '<strong>Every region must add up to three legions of defence: the ones already stationed there plus the ones its neighbours can send — and every neighbour that sends help has to leave one legion behind.</strong>'],
      ['#trd-formula-codigo', 'troops in the region + (troops of each neighbour − 1) ≥ 3'],
      ['#trd-formula-nota', 'Each region receives 0, 2, 3, or 4 legions. The cost is the sum of all of them. The problem is to find the cheapest valid distribution.'],
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
      ['#trd-lab-nota', 'It opens on one of the five optimal solutions: eight legions, nobody exposed. No valid arrangement is cheaper.'],
      ['#trd-legenda-vazio', 'no troops, depends on its neighbours'],
      ['#trd-legenda-tropas', 'holding troops, sends one less than it has'],
      ['#trd-legenda-exposto', 'exposed: short of three legions of defence'],
      ['#trd-figura-legenda', 'The same solution over the original map: two regions holding four legions cover the other six. Figure from the thesis, drawn by the author based on Gray (2015).'],
      ['#trd-variacao-kicker', 'Why three?'],
      ['#trd-variacao-titulo', 'The third version of a classic problem.'],
      ['#trd-variacao-lead', 'Constantine’s idea became a mathematical problem in 2004 and gained increasingly demanding versions. Only one thing changes: how many legions of relief each region must gather.'],
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
      ['#trd-var4-titulo', 'More robust, not cheaper'],
      ['#trd-var4-texto', 'Requiring three instead of one costs more legions. The gain is not economy: it is margin to absorb simultaneous outages.'],
      ['#trd-dificuldade-kicker', 'Why it is hard'],
      ['#trd-dificuldade-titulo', 'Easy to check, hard to find.'],
      ['#trd-dificuldade-lead', 'Checking whether a distribution works takes an instant. Finding the cheapest one is another story.'],
      ['#trd-dificuldade-texto', 'With eight regions there are 65,536 distributions. With a hundred, the count has 61 digits — <strong>billions of times every atom on Earth</strong>. A computer testing a billion per second since the Big Bang would have covered a negligible fraction. And the problem is <strong>NP-complete</strong>: no exact and fast method is known.'],
      ['#trd-numero-1', 'possible distributions on a map of only eight regions'],
      ['#trd-numero-2', 'distributions on a network of a hundred points: billions of times every atom on Earth'],
      ['#trd-numero-3', 'no exact and fast algorithm is known for the problem'],
      ['#trd-trabalho-kicker', 'What I did'],
      ['#trd-trabalho-titulo', 'Three ways in, and one correction.'],
      ['#trd-card1-tag', 'Metaheuristic'],
      ['#trd-card1-titulo', 'Ant colony'],
      ['#trd-card1-texto', 'Artificial ants assemble distributions and leave a trail on the choices that worked. This was the method that performed best.'],
      ['#trd-card2-tag', 'Metaheuristic'],
      ['#trd-card2-titulo', 'Genetic algorithm'],
      ['#trd-card2-texto', 'A population of solutions that cross over, mutate, and compete. The cheapest ones survive.'],
      ['#trd-card3-tag', 'Exact method'],
      ['#trd-card3-titulo', 'Integer linear programming'],
      ['#trd-card3-texto', 'The problem as a system of constraints, solved by a solver while the graph stays small. It is the ruler for the other two.'],
      ['#trd-card4-tag', 'Correction'],
      ['#trd-card4-titulo', 'A published model that failed'],
      ['#trd-card4-texto', 'The exact formulation in the literature accepted invalid distributions. I showed a counterexample and proposed the first correct one.'],
      ['#trd-resultados-kicker', 'Results'],
      ['#trd-resultados-titulo', '362 graphs, measured against the optimum.'],
      ['#trd-resultados-lead', 'Classic benchmarks, real networks, and graphs generated for this work. Where the exact solver answered, the comparison is against the optimum.'],
      ['#trd-resultado-1', 'graphs evaluated, across classic benchmarks, real networks, and generated instances'],
      ['#trd-resultado-2', 'ant colony optimization won in most cases, in both runtime and quality'],
      ['#trd-resultado-3', 'graphs, among all the ones evaluated, ended up more than 50% away from the optimum'],
      ['#trd-resultados-texto', 'The genetic algorithm was not discarded: it stayed competitive on smaller, structured graphs, and sometimes reached the optimum where ant colony optimization did not.'],
      ['#trd-destaque-kicker', 'What this leaves for the field'],
      ['#trd-destaque-texto', 'Beyond the first two approximation algorithms proposed for this problem, the work leaves behind a corrected exact reference and a set of instances with optimal values already computed, which other research can use for comparison.'],
      ['#trd-aplicacoes-kicker', 'Where this shows up today'],
      ['#trd-aplicacoes-titulo', 'The same problem, without legions.'],
      ['#trd-aplicacoes-lead', 'Swap regions for neighbourhoods and legions for warehouses: how many warehouses supply the whole city, knowing that whoever covers a neighbour cannot run out of stock? Same arithmetic.'],
      ['#trd-aplicacao-1', '<strong>Stores and warehouses:</strong> covering every neighbourhood, including those without a store, without starving whoever comes to the rescue.'],
      ['#trd-aplicacao-2', '<strong>Servers and antennas:</strong> where to place them so the network stays served when one point goes down — and when two go down together.'],
      ['#trd-aplicacao-3', '<strong>Teams and on-call rosters:</strong> spreading ambulances or crews across regions that cover one another without leaving themselves uncovered.'],
      ['#trd-aplicacoes-nota', 'The literature cites military defence, servers, and network coverage; store and on-call are analogies. The work is about the mathematical problem, not an applied case.'],
      ['#trd-ponte-kicker', 'Deep dive'],
      ['#trd-ponte-titulo', 'From here on, the detail.'],
      ['#trd-ponte-lead', 'The technical page covers the formal definition, the counterexample that breaks the previous formulation, both algorithms step by step, and the measured tables.'],
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
      ['.case-title', 'The technical structure in detail.'],
      ['#trdt-intro', 'This page documents what supports the overview: the formal definition of the problem, the counterexample that invalidates the previously published exact formulation, the formulation proposed in its place, both algorithms step by step, and the tables measured over 362 graphs.'],
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
      ['#trdt-res-titulo', 'ACO-FL against FLGA, measured by the optimum.'],
      ['#trdt-res-lead', 'The relative gap compares the best solution found by the metaheuristics against the solution of the exact model. ACO-FL wins on most instances, but the advantage is not uniform: on small dense graphs, and on some graphs with many local optima, FLGA gets closer.'],
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
      ['#trdt-met-lead', 'No comparison in this work rests on impression: the three criteria below were declared before the experiments and applied equally to both metaheuristics and to the exact model.'],
      ['#trdt-met1-tag', 'Criterion 1'],
      ['#trdt-met1-titulo', 'Runtime'],
      ['#trdt-met1-texto', 'Seconds per instance, measured on the same machine and with the same compiler flags. It answers for computational efficiency — and for nothing else.'],
      ['#trdt-met2-tag', 'Criterion 2'],
      ['#trdt-met2-titulo', 'Fitness, the weight of the solution'],
      ['#trdt-met2-texto', 'The sum of the labels of the best function found. Since it is exactly the quantity the problem asks to minimize, it compares directly against the value from the exact model.'],
      ['#trdt-met3-tag', 'Criterion 3'],
      ['#trdt-met3-titulo', 'Relative gap'],
      ['#trdt-met3-texto', 'The percentage distance between the best metaheuristic solution and the value obtained by the ILP. It is the metric that supports saying “it landed this many percent from the optimum”.'],
      ['#trdt-met4-tag', 'How it is computed'],
      ['#trdt-met4-titulo', 'gap = (best − ILP) / ILP'],
      ['#trdt-met4-texto', 'The better of the two metaheuristics goes into the numerator, rather than each one separately: the gap measures the distance from the set of proposed methods to the exact reference.'],
      ['#trdt-met-impacto-intro', 'From those three metrics, what the work states publicly:'],
      ['#trdt-met-impacto-1', '<strong>First correct exact formulation:</strong> the previously published ILP model accepts invalid solutions, and the text shows the counterexample that proves the flaw.'],
      ['#trdt-met-impacto-2', '<strong>First metaheuristics for the problem:</strong> until then there was no genetic-algorithm or ant-colony approach for Triple Roman Domination.'],
      ['#trdt-met-impacto-3', '<strong>A reusable set of instances:</strong> 30 random graphs generated with exact γ<sub>3R</sub> values, plus exact values for most of the remaining instances — comparison material for later research.'],
      ['#trdt-met-impacto-4', '<strong>Components justified by measurement:</strong> the RVNS local search and the H4 initial-population heuristic were chosen by comparison under the same protocol, not by preference.'],
      ['#trdt-met-impacto-5', '<strong>An honest account of the margin:</strong> across 362 graphs evaluated, only 6 landed more than 50% away from the reference value; every other one stayed below that threshold.'],
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
