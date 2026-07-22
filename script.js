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
    title: 'Israel Souza Ferreira | Portfolio',
    description: 'Portfolio of Israel Souza Ferreira — machine learning engineering, NLP, information retrieval, MLOps, and time-series forecasting.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="#sobre"]', 'About'],
      ['.nav-menu a[href="#experiencia"]', 'Experience'],
      ['.nav-menu a[href="#projetos"]', 'Projects'],
      ['.nav-menu a[href="#competencias"]', 'Skills'],
      ['.nav-menu a[href="#curriculo"]', 'Résumé'],
      ['.nav-menu a[href="#contato"]', 'Contact'],
      ['.hero .eyebrow', 'Machine Learning · NLP · Information Retrieval · MLOps'],
      ['.hero h1', 'I turn complex problems into data-driven solutions.'],
      ['.hero-description', 'I am <strong>Israel Souza Ferreira</strong>, a machine learning researcher with hands-on experience in multimodal systems, information retrieval, time-series forecasting, and end-to-end MLOps.'],
      ['.hero-actions a:nth-child(1)', 'View projects'],
      ['.hero-actions a:nth-child(2)', 'View résumé'],
      ['.hero-meta li:nth-child(1)', '📍 Fortaleza, Ceará, Brazil'],
      ['.hero-meta li:nth-child(2)', '● Open to opportunities'],
      ['.terminal-card code', '<span class="terminal-muted">$</span> profile --summary\n\n<span class="terminal-key">focus</span>: ML engineering and research\n<span class="terminal-key">languages</span>: Python, C++, and SQL\n<span class="terminal-key">interests</span>:\n  - multimodal multitask regressors\n  - MLOps and inference APIs\n  - representation learning\n  - time-series forecasting\n\n<span class="terminal-success">status: building solutions</span>'],
      ['#sobre .section-kicker', 'About me'],
      ['#sobre h2', 'Applied research with practical impact.'],
      ['#sobre .lead', 'My path combines academic research and the development of projects aimed at real-world problems. I strive to build technically sound, reproducible, and well-documented solutions.'],
      ['#sobre .lead + p', 'I build and deploy machine learning systems by combining reproducible experimentation, inference APIs, and rigorous model evaluation.'],
      ['#experiencia .experience-layout > div:first-child .section-kicker', 'Experience'],
      ['#experiencia .experience-layout > div:first-child h2', 'Applied research with engineering depth.'],
      ['#experiencia .experience-layout > div:first-child .lead', 'From literature review to multimodal systems and reproducible pipeline implementation.'],
      ['.experience-heading h3', 'Machine Learning Researcher'],
      ['.experience-company', 'Tieta Artificial Intelligence · CNPq RHAE Fellow'],
      ['.experience-period', 'Apr 2025 — present'],
      ['.experience-facts div:nth-child(1) dd', 'ENEM questions'],
      ['.experience-facts div:nth-child(2) dd', 'simultaneous tasks'],
      ['.experience-facts div:nth-child(3) dd', 'dataset period'],
      ['.experience-list li:nth-child(1)', 'Developed a <strong>multimodal multitask regressor</strong> to estimate IRT parameters, reconstruct the ICC curve, predict success rate, and classify pedagogical area, competency, and skill.'],
      ['.experience-list li:nth-child(2)', 'Designed text–image fusion with MoE/MMoE, attention, and <i>cross-attention</i>, using Portulan Serafim-900M embeddings and DCAE-compressed visual representations.'],
      ['.experience-list li:nth-child(3)', 'Implemented a <strong>supervised reasoning channel</strong> with local LLMs, DSPy, and <i>Chain of Thought</i>, incorporating justified solutions as a third regressor modality.'],
      ['.experience-list li:nth-child(4)', 'Delivered a <strong>multimodal top-k search API</strong> with FastAPI, RelRep, BERTScore, and FAISS for question retrieval and ranking.'],
      ['.experience-list li:nth-child(5)', 'Built reproducible training and evaluation workflows in PyTorch with Docker, Git, GitLab CI/CD, and statistical tests.'],
      ['#projetos .section-kicker', 'Selected projects'],
      ['#projetos .section-heading h2', 'Work that shows how I think and build.'],
      ['#projetos .section-heading .text-link', 'All repositories →'],
      ['#projetos .project-card:nth-child(1) .status', 'Under acceptance testing'],
      ['#projetos .project-card:nth-child(1) > p', 'Facial biometric time-tracking system in final acceptance testing for an educational institution, combining face recognition, geofencing, medical-document classification, and a secure backend.'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(1)', 'Explore project →'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(2)', 'View technical showcase →'],
      ['#projetos .project-card:nth-child(2) .status', 'In development'],
      ['#projetos .project-card:nth-child(2) > p', 'An MLOps system under development for forecasting dengue notifications by state, with data pipelines, experimentation, and an inference service.'],
      ['#projetos .project-card:nth-child(2) .project-links a', 'Code →'],
      ['#projetos .project-card:nth-child(3) .status', 'Completed'],
      ['#projetos .project-card:nth-child(3) h3', 'Triple Roman Domination'],
      ['#projetos .project-card:nth-child(3) > p', 'The first GA- and ACO-based metaheuristics in the literature for the TRDP, together with a corrected ILP formulation for exact solutions.'],
      ['#projetos .project-card:nth-child(3) .tag-list li:nth-child(3)', 'Graph Theory'],
      ['#projetos .project-card:nth-child(3) .tag-list li:nth-child(4)', 'Metaheuristics'],
      ['#projetos .project-card:nth-child(3) .project-links a:nth-child(1)', 'Explore project →'],
      ['#projetos .project-card:nth-child(3) .project-links a:nth-child(2)', 'Code →'],
      ['#projetos .project-card:nth-child(3) .project-links a:nth-child(3)', 'Read thesis →'],
      ['#projetos .project-card:nth-child(4) .status', 'Being reworked'],
      ['#projetos .project-card:nth-child(4) h3', 'Brazilian Emergency Aid — Query Benchmark'],
      ['#projetos .project-card:nth-child(4) > p', 'A system for evaluating SQL indexing strategies over 257,170,290 public records — a 31.6 GB dataset. It compares indexed and non-indexed search, aggregation, and JOIN workloads.'],
      ['#projetos .project-card:nth-child(4) .project-links a', 'Code and documentation →'],
      ['#competencias .section-kicker', 'Skills'],
      ['#competencias h2', 'Tools for investigating, modeling, and communicating.'],
      ['#competencias .lead', 'A technical foundation covering the full data-project lifecycle, from initial analysis to communicating results.'],
      ['#competencias .skill-group:nth-child(1) h3', 'Languages and data'],
      ['#competencias .skill-group:nth-child(1) p', 'Python, C++, SQL, Bash, Pandas, NumPy, PostgreSQL, and Git'],
      ['#competencias .skill-group:nth-child(2) h3', 'Modeling and research'],
      ['#competencias .skill-group:nth-child(2) p', 'PyTorch, MMoE, MoE, PLE, Transformers, DSPy, information retrieval, time series, and metaheuristics'],
      ['#competencias .skill-group:nth-child(3) h3', 'Engineering and MLOps'],
      ['#competencias .skill-group:nth-child(4) h3', 'Communication and practices'],
      ['#competencias .skill-group:nth-child(4) p', 'Data visualization, technical documentation, scientific writing, testing, and reproducibility'],
      ['#competencias .soft-skills .section-kicker', 'Soft skills'],
      ['#competencias .soft-skills h2', 'Intellectual curiosity, analytical rigor, and technical persistence.'],
      ['#competencias .soft-skills .lead', 'Skills demonstrated in how I investigate, build, and share solutions.'],
      ['#competencias .soft-skill-card:nth-child(1) h3', 'Analytical thinking'],
      ['#competencias .soft-skill-card:nth-child(1) p', 'Critical evaluation of metrics, hypotheses, and experimental results before making decisions.'],
      ['#competencias .soft-skill-card:nth-child(2) h3', 'Structured problem-solving'],
      ['#competencias .soft-skill-card:nth-child(2) p', 'Systematic investigation of root causes across models, pipelines, APIs, and infrastructure.'],
      ['#competencias .soft-skill-card:nth-child(3) h3', 'Self-directed learning'],
      ['#competencias .soft-skill-card:nth-child(3) p', 'Learning new technologies and foundations according to the real needs of each project.'],
      ['#competencias .soft-skill-card:nth-child(4) h3', 'Technical communication'],
      ['#competencias .soft-skill-card:nth-child(4) p', 'Documenting experiments, architectural decisions, and research results for different audiences.'],
      ['#competencias .soft-skill-card:nth-child(5) h3', 'Collaboration'],
      ['#competencias .soft-skill-card:nth-child(5) p', 'Remote development with version control, review, and alignment of hypotheses and implementations.'],
      ['#competencias .soft-skill-card:nth-child(6) h3', 'Ownership and organization'],
      ['#competencias .soft-skill-card:nth-child(6) p', 'End-to-end work with attention to documentation, reproducibility, and concrete deliverables.'],
      ['#curriculo .section-kicker', 'Résumé'],
      ['#curriculo h2', 'Experience in applied research and machine learning engineering.'],
      ['#curriculo .contact-card > div:first-child > p:last-child', 'Read the professional résumé PDF and the academic Lattes Curriculum. Together, they cover experience, education, projects, and technical skills.'],
      ['#curriculo .contact-actions a:nth-child(1)', 'Open PDF'],
      ['#curriculo .contact-actions a:nth-child(2)', 'Download PDF'],
      ['#curriculo .contact-actions a:nth-child(3)', 'LaTeX source'],
      ['#curriculo .contact-actions a:nth-child(4)', 'Lattes Curriculum'],
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
      ['.experience-facts', 'aria-label', 'Research project scale'],
      ['#experiencia .tag-list', 'aria-label', 'Experience technologies'],
      ['#projetos .project-card:nth-child(1) .tag-list', 'aria-label', 'Project technologies'],
      ['#projetos .project-card:nth-child(2) .tag-list', 'aria-label', 'Project technologies'],
      ['#projetos .project-card:nth-child(3) .tag-list', 'aria-label', 'Project technologies'],
      ['#projetos .project-card:nth-child(4) .tag-list', 'aria-label', 'Project technologies'],
      ['#curriculo .contact-actions', 'aria-label', 'Résumé actions'],
    ],
  },
  'face-clock': {
    title: 'Face Clock Evoluir | Israel Souza Ferreira',
    description: 'Face Clock Evoluir case study: workforce time tracking with facial biometrics, geofencing, medical-document classification, and production engineering.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href*="face-clock-evoluir-public"]', 'Technical showcase'],
      ['.case-breadcrumb', '← Back to projects'],
      ['.case-hero .eyebrow', 'Applied product · Computer vision · Under acceptance testing'],
      ['.case-title', 'Face Clock Evoluir'],
      ['.case-intro', 'A workforce time-tracking system developed for an educational institution, combining facial biometrics, location validation, and medical-document classification in an architecture designed for real-world use.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'View technical showcase'],
      ['.case-hero .hero-actions a:nth-child(2)', 'Understand the system'],
      ['.case-hero .hero-actions a:nth-child(3)', 'View engineering decisions'],
      ['#problema .section-kicker', 'The problem'],
      ['#problema h2', 'Record attendance without creating friction.'],
      ['#problema .case-prose p:nth-child(1)', 'A time-tracking system must recognize the right person, confirm that they are at an allowed location, and remain simple enough for daily use.'],
      ['#problema .case-prose p:nth-child(2)', 'Face Clock Evoluir replaces shareable identifiers, such as cards and passwords, with contextual biometric verification. The solution supports both individual clock-in and kiosk mode, integrating attendance with shifts, hour balances, and medical-document submission.'],
      ['#problema .case-prose p:nth-child(3)', 'The most important product decision was to separate observation from punishment: a clock-in outside the expected schedule is recorded and flagged, not blocked. The system reports the deviation without inventing payroll rules.'],
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
      ['#maquina-estados .case-prose p:nth-child(2)', 'After facial authentication and location validation, the system resolves the next action with <code>PontoFSM</code>. A person can leave directly after clocking in, take one or more breaks, and only end the workday after a valid return.'],
      ['#fsm-empty-line-1', 'No'],
      ['#fsm-empty-line-2', 'punch'],
      ['#fsm-entry', 'Clock-in'],
      ['#fsm-break-line-1', 'Break'],
      ['#fsm-break-line-2', 'begins'],
      ['#fsm-return', 'Return'],
      ['#fsm-exit', 'Clock-out'],
      ['#fsm-direct-label', 'direct exit'],
      ['#fsm-break-again-label', 'another break'],
      ['#fsm-mobile-direct-title', 'Shortcut:'],
      ['#fsm-mobile-direct-copy', 'Clock-in → Clock-out (direct exit)'],
      ['#fsm-mobile-break-title', 'Repetition:'],
      ['#fsm-mobile-break-copy', 'Return → Break begins (another break)'],
      ['#fsm-legend-state', 'Circle:'],
      ['#fsm-legend-state-copy', 'state of the last punch'],
      ['#fsm-legend-arrow', 'Arrow:'],
      ['#fsm-legend-arrow-copy', 'next allowed punch'],
      ['#fsm-legend-branch', 'Curved path:'],
      ['#fsm-legend-branch-copy', 'shortcut or another break'],
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
      ['#atestados .case-prose p:nth-child(1)', 'A hybrid pipeline combines EfficientNet-B0 and OCR to assist in identifying medical documents submitted through the platform.'],
      ['#atestados .case-prose p:nth-child(2)', 'The classifier runs in its own service and was structured with selective fine-tuning, hyperparameter search, and stratified validation. The final decision remains human: the model supports triage but does not replace administrative review.'],
      ['#atestados .case-prose p:nth-child(3)', 'Human decisions can also feed future retraining. To prevent incorrect labels, rejected documents are included as negative examples only when human and model agree; ambiguous cases are excluded from the training set.'],
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
      ['#qualidade .section-kicker', 'Quality'],
      ['#qualidade h2', 'Validated beyond the development environment.'],
      ['#qualidade .case-prose > p', 'The application was tested as a real production stack, without development shortcuts that could hide missing files, incorrect permissions, or startup failures. Browser tests also uncovered problems that static code inspection did not detect.'],
      ['#qualidade .case-result:nth-child(1) span', 'automated tests passing in the Docker pipeline'],
      ['#qualidade .case-result:nth-child(2) span', 'portable inference, with optional acceleration when available'],
      ['#qualidade .case-result:nth-child(3) span', 'secure remote access without exposing the backend directly'],
      ['#status .section-kicker', 'Current status'],
      ['#status h2', 'In final acceptance testing.'],
      ['#status .case-prose p:nth-child(1)', 'The system is not yet completed or delivered: it is in the final validation stage before definitive deployment at the institution.'],
      ['#status .case-prose p:nth-child(2)', 'Because this is a product developed for a client, its source code is proprietary. The public repository presents the architecture, technologies, and technical decisions without exposing institutional data, credentials, or operational details.'],
      ['.case-cta .section-kicker', 'Public showcase'],
      ['.case-cta h2', 'Explore the architecture and technical documentation.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'Open on GitHub'],
      ['.case-cta .contact-actions a:nth-child(2)', 'View other projects'],
      ['footer .text-link', 'Back to portfolio'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
      ['.case-meta', 'aria-label', 'Project information'],
      ['.system-flow', 'aria-label', 'Flow from facial recognition to attendance record'],
      ['.state-machine', 'aria-label', 'Punch flow: no punch leads to clock-in; clock-in leads to break or clock-out; a break leads to return; return leads to another break or clock-out.'],
      ['.security-list', 'aria-label', 'Application security layers'],
      ['.case-results', 'aria-label', 'Engineering indicators'],
    ],
  },
  'triple-roman': {
    title: 'Triple Roman Domination | Israel Souza Ferreira',
    description: 'Undergraduate thesis case study by Israel Souza Ferreira: the first metaheuristics and a corrected ILP formulation for the Triple Roman Domination Problem.',
    content: [
      ['.skip-link', 'Skip to content'],
      ['.nav-menu a[href="../../index.html#projetos"]', 'Projects'],
      ['.nav-menu a[href*="Triple-Roman"]', 'Repository'],
      ['.case-breadcrumb', '← Back to projects'],
      ['.case-hero .eyebrow', 'Undergraduate thesis · Combinatorial optimization · Completed'],
      ['.case-title', 'Triple Roman Domination in graphs'],
      ['.case-intro', 'The first Genetic Algorithm- and Ant Colony Optimization-based metaheuristics for the TRDP, with a corrected Integer Linear Programming formulation for exact solutions.'],
      ['.case-hero .hero-actions a:nth-child(1)', 'View code on GitHub'],
      ['.case-hero .hero-actions a:nth-child(2)', 'Read thesis'],
      ['.case-hero .hero-actions a:nth-child(3)', 'View contributions'],
      ['.case-meta li:nth-child(2)', 'Genetic Algorithm'],
      ['.case-meta li:nth-child(4)', 'Integer Linear Programming'],
      ['.case-block:nth-of-type(1) .section-kicker', 'The problem'],
      ['.case-block:nth-of-type(1) h2', 'Minimum-cost network protection.'],
      ['.case-block:nth-of-type(1) .lead', 'Triple Roman Domination models how to distribute protection levels among graph vertices, ensuring vulnerable regions are covered by their neighbors while minimizing total cost.'],
      ['.case-block:nth-of-type(1) .case-prose > p:nth-child(2)', 'The idea originated in defense problems and also relates to scenarios such as server allocation and network coverage. Because the decision version is NP-complete, finding an optimal solution becomes difficult as instances grow. This motivates approximation methods that can produce good solutions in practical time.'],
      ['.case-formula .section-kicker', 'The rule, in one line'],
      ['.case-formula p:nth-child(2)', '<strong>Each region must receive enough protection from its neighborhood.</strong>'],
      ['.case-formula code', 'Σ protection in the neighborhood of v ≥ 3 + number of active neighbors'],
      ['.case-formula p:last-child', 'Formally, each vertex receives a value from 0 to 4. The total weight is the sum of these values; the goal is to find a valid configuration with the smallest possible weight.'],
      ['.case-figure figcaption', 'Example of an optimal Triple Roman Domination function. Vertices represent regions and edges represent their connections; the numbers indicate the protection level assigned to each region. Source: author’s thesis.'],
      ['#contribuicoes .section-kicker', 'Contributions'],
      ['#contribuicoes h2', 'What this work adds.'],
      ['#contribuicoes .case-list li:nth-child(1)', '<strong>First metaheuristics for the TRDP:</strong> implementation and evaluation of GA- and ACO-based approaches.'],
      ['#contribuicoes .case-list li:nth-child(2)', '<strong>Corrected ILP:</strong> an Integer Linear Programming formulation that fixes inconsistencies in a previous proposal and serves as an exact reference.'],
      ['#contribuicoes .case-list li:nth-child(3)', '<strong>Experimental benchmark:</strong> generation of 30 random graphs and computation of exact γ<sub>3R</sub>(G) values, along with exact solutions for most other evaluated instances.'],
      ['#contribuicoes .case-list li:nth-child(4)', '<strong>Comparative analysis:</strong> evaluation of four GA heuristics, the impact of RVNS on ACO, and relative gaps against optimal solutions.'],
      ['.case-highlight .section-kicker', 'Scientific contribution'],
      ['.case-highlight .lead', 'The work not only proposes novel approximation methods for the TRDP; it also establishes a corrected exact reference and expands the set of instances with known values for future research.'],
      ['.case-block:nth-of-type(3) .section-kicker', 'Results'],
      ['.case-block:nth-of-type(3) h2', 'Performance with nuance.'],
      ['.case-block:nth-of-type(3) .case-prose > p:nth-child(1)', '<strong>ACO-FL</strong>, combining ACO and RVNS, outperformed <strong>GA-FL</strong> in most cases in both runtime and solution quality. GA-FL nevertheless remained competitive in specific scenarios, especially on smaller and structured graphs.'],
      ['.case-block:nth-of-type(3) .case-prose > p:nth-child(2)', 'The comparison used the relative gap against optimal ILP solutions. Among all evaluated graphs, only six had a gap above 50%; all others remained below that threshold.'],
      ['.case-result:nth-child(1) span', 'random graphs generated with exact values computed'],
      ['.case-result:nth-child(2) span', 'best performance in most evaluated cases'],
      ['.case-result:nth-child(3) strong', '6 graphs'],
      ['.case-result:nth-child(3) span', 'with a relative gap above 50% in the experimental set'],
      ['.case-block:nth-of-type(4) .section-kicker', 'Next steps'],
      ['.case-block:nth-of-type(4) h2', 'Where the research can go next.'],
      ['.case-block:nth-of-type(4) .case-prose p', 'The work proposes expanding hyperparameter search and investigating new selection, crossover, mutation, and elitism strategies for GA. For ACO, it suggests evaluating other selection and exploration methods, as well as implementation and compiler optimizations to reduce runtime.'],
      ['.case-cta .section-kicker', 'Code and experiments'],
      ['.case-cta h2', 'Explore the implementation and full thesis.'],
      ['.case-cta .contact-actions a:nth-child(1)', 'Open repository'],
      ['.case-cta .contact-actions a:nth-child(2)', 'Open thesis'],
      ['footer .text-link', 'Back to portfolio'],
    ],
    attributes: [
      ['nav', 'aria-label', 'Main navigation'],
      ['.brand', 'aria-label', 'Back to portfolio'],
      ['.case-meta', 'aria-label', 'Project information'],
      ['.case-figure img', 'alt', 'Map of the Roman Empire represented as a graph, with the labels of an optimal Triple Roman Domination function on its vertices.'],
      ['.case-results', 'aria-label', 'Results summary'],
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

document.querySelectorAll('.project-card-clickable').forEach((card) => {
  const primaryLink = card.querySelector('.project-primary-link');
  if (!primaryLink) return;

  card.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    window.location.assign(primaryLink.href);
  });
});

year.textContent = new Date().getFullYear();
