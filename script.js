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
      ['.hero .eyebrow', 'Data Science · Statistics · Experimentation · Machine Learning'],
      ['.hero h1', 'I turn data into decisions — and measure whether they actually hold up.'],
      ['.hero-description', 'I am <strong>Israel Souza Ferreira</strong>, a data scientist with hands-on experience in statistical modeling, controlled experimentation, and end-to-end MLOps. What sets me apart is evaluation: measure before concluding, and distrust your own result.'],
      ['.hero-actions a:nth-child(1)', 'View projects'],
      ['.hero-actions a:nth-child(2)', 'View résumé'],
      ['.hero-meta li:nth-child(1)', '<svg class="location-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg> Fortaleza, Ceará, Brazil'],
      ['.hero-meta li:nth-child(2)', '● Open to opportunities'],
      ['.terminal-card code', '<span class="terminal-muted">$</span> profile --summary\n\n<span class="terminal-key">focus</span>: data science and machine learning\n<span class="terminal-key">languages</span>: Python, SQL, and C++\n<span class="terminal-key">interests</span>:\n  - statistical modeling and experiments\n  - multimodal multitask regressors\n  - MLOps and inference APIs\n\n<span class="terminal-success">status: measuring before concluding</span>'],
      ['#sobre .section-kicker', 'About me'],
      ['#sobre h2', 'Rigorous analysis with practical impact.'],
      ['#sobre .lead', 'My path combines academic research and the development of projects aimed at real-world problems in education and public health. I strive to produce technically sound, reproducible, and well-documented analysis.'],
      ['#sobre .lead + p', 'I work across the full data problem cycle: extracting and preparing data at scale, statistical and predictive modeling, experimental design, and communicating results to the people who have to decide with them.'],
      ['#experiencia .experience-layout > div:first-child .section-kicker', 'Experience'],
      ['#experiencia .experience-layout > div:first-child h2', 'Data science with engineering depth.'],
      ['#experiencia .experience-layout > div:first-child .lead', 'Statistical modeling and experimentation applied to educational proficiency analysis and exam performance prediction.'],
      ['.experience-heading h3', 'Data Scientist — AI for proficiency analysis'],
      ['.experience-company', 'Tieta Artificial Intelligence · CNPq RHAE Fellow'],
      ['.experience-period', 'Apr 2025 — Jul 2026'],
      ['.experience-facts div:nth-child(1) dt', 'Statistical modeling'],
      ['.experience-facts div:nth-child(1) dd', 'IRT and multitask regression'],
      ['.experience-facts div:nth-child(2) dt', 'Experimentation'],
      ['.experience-facts div:nth-child(2) dd', 'paired evaluation and ablation'],
      ['.experience-facts div:nth-child(3) dt', 'Communication'],
      ['.experience-facts div:nth-child(3) dd', 'reproducible results'],
      ['.experience-list li:nth-child(1)', 'Modeled latent psychometric parameters of educational items with Item Response Theory, validating model estimates against reference parameters.'],
      ['.experience-list li:nth-child(2)', 'Designed paired evaluations over the same items to compare competing approaches, quantifying both the correlation of each estimated signal with reference parameters and its inference cost — the evidence behind the decision on which approach to carry forward.'],
      ['.experience-list li:nth-child(3)', 'Built signal-extraction pipelines with language models orchestrated by DSPy, including procedural dialogue generation and cognitive-trajectory tracking.'],
      ['.experience-list li:nth-child(4)', 'Tested relative representations and attention-based reducers in multitask regression models over textual and visual data.'],
      ['.experience-list li:nth-child(5)', 'Structured reproducible experiments, evaluation metrics, and technical documentation to support the conclusions of the research cycle.'],
      ['#experiencia .tag-list li:nth-child(1)', 'Data Science'],
      ['#experiencia .tag-list li:nth-child(2)', 'Statistics'],
      ['#experiencia .tag-list li:nth-child(3)', 'Item Response Theory'],
      ['#experiencia .tag-list li:nth-child(7)', 'NLP'],
      ['#projetos .section-kicker', 'Selected projects'],
      ['#projetos .section-heading h2', 'Work that shows how I think and build.'],
      ['#projetos .section-heading .text-link', 'All repositories →'],
      ['#projetos .project-card:nth-child(1) .status', 'Under acceptance testing'],
      ['#projetos .project-card:nth-child(1) > p', 'Facial biometric time-tracking system in final acceptance testing for an educational institution, combining face recognition, geofencing, medical-document classification, and a secure backend.'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(1)', 'Explore project →'],
      ['#projetos .project-card:nth-child(1) .project-links a:nth-child(2)', 'View technical showcase →'],
      ['#projetos .project-card:nth-child(2) .status', 'Completed'],
      ['#projetos .project-card:nth-child(2) h3', 'Triple Roman Domination'],
      ['#projetos .project-card:nth-child(2) > p', 'The first GA- and ACO-based metaheuristics in the literature for the TRDP, together with a corrected ILP formulation for exact solutions.'],
      ['#projetos .project-card:nth-child(2) .tag-list li:nth-child(3)', 'Graph Theory'],
      ['#projetos .project-card:nth-child(2) .tag-list li:nth-child(4)', 'Metaheuristics'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(1)', 'Explore project →'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(2)', 'Code →'],
      ['#projetos .project-card:nth-child(2) .project-links a:nth-child(3)', 'Read thesis →'],
      ['#projetos .project-card:nth-child(3) .status', 'In development'],
      ['#projetos .project-card:nth-child(3) h3', 'Brazilian Emergency Aid — Ingestion and performance experiments'],
      ['#projetos .project-card:nth-child(3) > p', 'Picked back up on my own initiative after the academic submission. Chunked ingestion through binary <code>COPY</code> over 31.6 GB of public data; instrumentation tied memory growth to retained deduplication identifiers (r = 0.99).'],
      ['#projetos .project-card:nth-child(3) .project-links a', 'Code and documentation →'],
      ['#competencias .section-kicker', 'Skills'],
      ['#competencias h2', 'Tools for investigating, modeling, and communicating.'],
      ['#competencias .lead', 'A technical foundation covering the full data-project lifecycle, from initial analysis to communicating results.'],
      ['#competencias .skill-group:nth-child(1) h3', 'Languages and querying'],
      ['#competencias .skill-group:nth-child(1) p', 'Python, SQL, C++, Bash, Pandas, NumPy, and Git'],
      ['#competencias .skill-group:nth-child(2) h3', 'Analysis and statistics'],
      ['#competencias .skill-group:nth-child(2) p', 'SciPy, Scikit-learn, hypothesis testing, correlation analysis, cross-validation, model calibration, and ablation analysis'],
      ['#competencias .skill-group:nth-child(3) h3', 'Modeling and machine learning'],
      ['#competencias .skill-group:nth-child(3) p', 'PyTorch, time series (LSTM, PLE), MoE/MMoE, Transformers, DSPy, vector search, and metaheuristics'],
      ['#competencias .skill-group:nth-child(4) h3', 'Data, MLOps, and communication'],
      ['#competencias .skill-group:nth-child(4) p', 'PostgreSQL, pgvector, FAISS, MLflow, Docker, FastAPI, GitHub Actions, Streamlit, and data visualization'],
      ['#competencias .soft-skills .section-kicker', 'Analytical principles'],
      ['#competencias .soft-skills h2', 'How I work.'],
      ['#competencias .soft-skills .lead', 'Three rules that guide the technical decisions in the projects above.'],
      ['#competencias .soft-skill-card:nth-child(1) h3', 'Measure before concluding'],
      ['#competencias .soft-skill-card:nth-child(1) p', 'A hypothesis without an experiment is a guess. Before changing a system I simulate the change over real data — that is how an apparently obvious fix turned out to be a regression.'],
      ['#competencias .soft-skill-card:nth-child(2) h3', 'Keep experiments reproducible'],
      ['#competencias .soft-skill-card:nth-child(2) p', 'Every comparison runs with a control group, one variable at a time, in an isolated environment, so that any conclusion can be re-run and checked by someone else.'],
      ['#competencias .soft-skill-card:nth-child(3) h3', 'Report negative results too'],
      ['#competencias .soft-skill-card:nth-child(3) p', 'I record the hypotheses that did not hold, including my own, and revise earlier conclusions when measurement contradicts them.'],
      ['#curriculo .section-kicker', 'Résumé'],
      ['#curriculo h2', 'Experience in data science, statistical modeling, and machine learning.'],
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
      ['.experience-facts', 'aria-label', 'Research system summary'],
      ['#experiencia .tag-list', 'aria-label', 'Experience technologies'],
      ['#projetos .project-card:nth-child(1) .tag-list', 'aria-label', 'Project technologies'],
      ['#projetos .project-card:nth-child(2) .tag-list', 'aria-label', 'Project technologies'],
      ['#projetos .project-card:nth-child(3) .tag-list', 'aria-label', 'Project technologies'],
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
      ['#atestado-lead', 'A hybrid pipeline combines EfficientNet-B0, Logistic Regression, and OCR to assist in identifying medical documents submitted through the platform.'],
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
      ['#resumo .section-kicker', 'Summary'],
      ['#resumo h2', 'The essentials in five points.'],
      ['#resumo .case-list li:nth-child(1)', '<strong>Problem and user:</strong> an educational institution needed to record staff attendance without cards, passwords, or queues — including people who work away from the main site.'],
      ['#resumo .case-list li:nth-child(2)', '<strong>My responsibility:</strong> sole end-to-end delivery — models, backend, database, security, testing, and deployment.'],
      ['#resumo .case-list li:nth-child(3)', '<strong>Architecture:</strong> facial biometrics with 512-dimensional embeddings and vector search in PostgreSQL with <code>pgvector</code>, GPS geofencing, medical-document triage using a CNN as an embedding extractor plus Logistic Regression, combined with OCR, and a FastAPI backend running in Docker.'],
      ['#resumo .case-list li:nth-child(4)', '<strong>Evidence:</strong> 142 automated tests in a Docker pipeline; 468 documents triaged by objective quality signals; an image-orientation fix and reduced <em>augmentation</em> that raised validation accuracy by thirteen percentage points; five classification approaches compared under the same protocol, from the trivial classifier to the winning hybrid.'],
      ['#resumo .case-list li:nth-child(5)', '<strong>Status:</strong> contracted system, functional and in final acceptance testing before deployment.'],
      ['#deep-dive .section-kicker', 'Technical deep dive'],
      ['#deep-dive h2', 'From here on, the detail.'],
      ['#deep-dive .case-prose .lead', 'The next two sections document the investigation behind the numbers in the summary: how a silent bug was diagnosed and how the cause of the classifier\u2019s underfitting was isolated by experiment. They are optional reading — the essentials are above.'],
      ['#atestado-rotulos', 'Human decisions can also feed future retraining. To prevent incorrect labels, rejected documents are included as negative examples only when human and model agree; ambiguous cases are excluded from the training set.'],
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
      ['#qualidade .case-results', 'aria-label', 'Engineering indicators'],
      ['#atestados .case-results', 'aria-label', 'Results of the medical-document classification experiment'],
      ['#resumo .case-list', 'aria-label', 'Project summary'],
      ['#metodo .case-results', 'aria-label', 'Investigation indicators'],
      ['#metodo .case-list', 'aria-label', 'Technical decisions from the investigation'],
      ['#diagnostico .case-results', 'aria-label', 'Diagnosis indicators'],
      ['#diagnostico .case-list', 'aria-label', 'Experiments conducted'],
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

document.querySelectorAll('.project-card-clickable').forEach((card) => {
  const primaryLink = card.querySelector('.project-primary-link');
  if (!primaryLink) return;

  card.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    window.location.assign(primaryLink.href);
  });
});

year.textContent = new Date().getFullYear();
