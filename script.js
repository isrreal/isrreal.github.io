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
  "home": {
    title: "Israel Souza Ferreira | Data Scientist and ML Engineer",
    description: "Portfolio of Israel Souza Ferreira — a computer scientist with experience in applied research, experimentation, computer vision, and ML-enabled systems.",
    content: [
      [".skip-link", "Skip to content"],
      [".nav-menu a[href=\"#experiencia\"]", "Experience"],
      [".nav-menu a[href=\"#projetos\"]", "Projects"],
      [".nav-menu a[href=\"#competencias\"]", "Skills"],
      [".nav-menu a[href=\"#curriculo\"]", "Résumé"],
      [".nav-menu a[href=\"#contato\"]", "Contact"],
      ["footer .footer-content > p:last-child", "Built with HTML, CSS, and JavaScript."],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Home page"],
      [".hero-meta", "aria-label", "Professional information"],
      [".first-impression-card", "aria-label", "Professional profile in twenty seconds"],
      [".impact-band", "aria-label", "Highlighted results"],
      ["#projetos .project-card:nth-child(1) .tag-list", "aria-label", "Project technologies"],
      ["#projetos .project-card:nth-child(2) .tag-list", "aria-label", "Project technologies"],
      ["#curriculo .contact-actions", "aria-label", "Résumé actions"],
    ],
  },
  "face-clock": {
    title: "Face Clock Evoluir | Israel Souza Ferreira",
    description: "Face Clock Evoluir: contracted facial attendance and medical-document triage, with interpreted experimental results and delivery limitations.",
    content: [
      [".skip-link", "Skip to content"],
      [".nav-menu a[href=\"../../index.html#projetos\"]", "Projects"],
      [".nav-menu a[href=\"tecnico.html\"]", "Technical breakdown"],
      [".nav-menu a[href*=\"face-clock-evoluir-public\"]", "Public repository"],
      ["footer .text-link", "Back to portfolio"],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Back to portfolio"],
      [".system-flow", "aria-label", "Flow from facial recognition to attendance record"],
    ],
  },
  "face-clock-tecnico": {
    title: "Face Clock Evoluir — technical breakdown | Israel Souza Ferreira",
    description: "Face Clock Evoluir: controlled recognition and classification experiments, security, delivery audits, and explicit limitations.",
    content: [
      [".skip-link", "Skip to content"],
      [".nav-menu a[href=\"index.html\"]", "Case study"],
      [".nav-menu a[href=\"../../index.html#projetos\"]", "Projects"],
      [".nav-menu a[href*=\"face-clock-evoluir-public\"]", "Public repository"],
      [".case-breadcrumb", "← Back to the case study"],
      [".case-hero .eyebrow", "Technical deep dive · Face Clock Evoluir"],
      [".case-title", "The technical structure in detail."],
      [".case-hero .hero-actions a[href=\"#reconhecimento\"]", "Facial recognition"],
      [".case-hero .hero-actions a[href=\"#atestados\"]", "See the classification experiment"],
      [".case-hero .hero-actions a[href=\"#diagnostico\"]", "See the model diagnosis"],
      [".case-hero .hero-actions a[href=\"#engenharia\"]", "See engineering and security"],
      [".case-meta li:nth-child(1)", "1:N facial recognition"],
      [".case-meta li:nth-child(2)", "Controlled experiments"],
      [".case-meta li:nth-child(5)", "Application security"],
      ["#atestados .section-kicker", "Classification experiment"],
      ["#atestados h2", "A ladder of baselines, from trivial to hybrid."],
      ["#atestado-lead", "I compared trivial, classical, neural, and hybrid classifiers under the same selection and test protocol."],
      ["#atestado-dados", "Separate service with selective fine-tuning. Versioned, stratified split generated with a fixed seed: 297 training, 64 validation, and 64 test documents. The test set was excluded from early stopping and hyperparameter selection."],
      ["#tabela-baselines-titulo", "Baseline ladder on the held-out test set"],
      ["#tabela-baselines-nota", "64 test documents, evaluated once. Precision, recall, and F1 refer to the certificate class; the threshold is the default 0.5."],
      ["#atestados .case-result:nth-child(1) span", "F1 for the certificate class of the winning solution: EfficientNet as an embedding extractor + Logistic Regression"],
      ["#atestados .case-result:nth-child(2) span", "accuracy of the hybrid solution on the held-out test set, above the network’s original head (0.766)"],
      ["#atestados .case-result:nth-child(3) span", "false positives relative to the original neural head, preserving the same recall of 0.700"],
      ["#atestado-hog", "HOG + SVM reached F1 0.636, below the original neural head (0.651). The selected solution combines EfficientNet’s 1,280-dimensional embeddings with Logistic Regression. OCR provides rule-based review."],
      ["#metodo .section-kicker", "Investigation method"],
      ["#metodo h2", "Measure before concluding."],
      ["#metodo .case-prose .lead", "I investigated OCR failures and identified images loaded with incorrect orientation."],
      ["#metodo .case-result:nth-child(1) span", "documents triaged automatically using objective quality signals"],
      ["#metodo .case-result:nth-child(2) span", "images reached the model rotated because of an ignored EXIF metadata tag"],
      ["#metodo .case-result:nth-child(3) span", "lines removed after concluding that an experiment’s premise did not hold"],
      ["#metodo .case-list li:nth-child(1)", "<strong>EXIF orientation:</strong> the pipeline ignored the <code>Orientation</code> tag and sent rotated documents to the network and OCR. In the checked samples, orientation normalization restored document identification."],
      ["#metodo .case-list li:nth-child(2)", "<strong>Hypothesis validation:</strong> the orientation detector flagged 45% of the data; 91 of 109 “180°” cases were screenshots. EXIF metadata distinguished actual rotation from detector noise."],
      ["#metodo .case-list li:nth-child(3)", "<strong>Training/inference consistency:</strong> I centralized normalization in image loading and the training loader to avoid <em>train/serve skew</em>. After retraining, the classifier effect was neutral."],
      ["#metodo .case-list li:nth-child(4)", "<strong>Paired metrics:</strong> I rejected Jensen-Shannon after demonstrating zero marginal divergence in a case with 100% document-level disagreement. I adopted document-by-document comparisons."],
      ["#diagnostico .section-kicker", "Experimental diagnosis"],
      ["#diagnostico h2", "Hypotheses evaluated through experiments."],
      ["#diagnostico .case-prose .lead", "I investigated the classifier’s limited learning through controlled experiments, changing one variable at a time."],
      ["#diagnostico .case-list li:nth-child(1)", "<strong>Capacity:</strong> without regularization, the same parameters fit a subset in four epochs. The test showed the network could memorize this subset; it does not measure generalization."],
      ["#diagnostico .case-list li:nth-child(2)", "<strong>Label smoothing:</strong> removing it did not raise the observed confidence ceiling, ruling out the initial hypothesis."],
      ["#diagnostico .case-list li:nth-child(3)", "<strong>Threshold:</strong> I simulated the pipeline across nine values. Lower thresholds improved the isolated classifier but worsened the final result by favoring the less accurate component."],
      ["#diagnostico .case-list li:nth-child(4)", "<strong>Augmentation:</strong> removing horizontal flipping alone had no effect. Reducing the total transformation load raised validation accuracy by thirteen percentage points and extended learning from four to twenty-three epochs."],
      ["#diagnostico .case-list li:nth-child(5)", "<strong>Early stopping:</strong> accuracy saturated on the small validation set. I compared three criteria in isolated runs; the selected criterion allowed training for three times longer before stopping."],
      ["#diagnostico .case-list li:nth-child(6)", "<strong>Reevaluation:</strong> after the fixes, the network crossed the threshold on 23.7% of documents, up from 0.6%. Agreement with OCR moved from chance to moderate, and probability squared error fell below one quarter. I reran existing evaluation tools to revise the conclusion about the network’s contribution."],
      ["#congelamento .section-kicker", "Architecture validation"],
      ["#congelamento h2", "Fine-tuning depth evaluated with 5-fold."],
      ["#congelamento-lead", "The training (97%) versus test (70%, 40 images) gap prompted a cross-validation comparison of three unfreezing depths."],
      ["#congelamento-contexto", "With ImageNet weights, I compared head only, head + last block, and head + last two blocks. Protocol: stratified 5-fold on 406 training images, up to 30 epochs, patience 7, the same seed and class balancing."],
      ["#congelamento-svg-titulo", "Validation accuracy by unfreezing depth, 5-fold"],
      ["#congelamento-svg-desc", "Column chart with error bars (standard deviation) comparing three configurations: A, 67.0% plus or minus 3.9; B, 74.9% plus or minus 6.7; C, the production configuration, 84.2% plus or minus 1.7."],
      ["#congelamento-tip-a", "Configuration A: 67.0% average validation accuracy, discarded."],
      ["#congelamento-tip-b", "Configuration B: 74.9% average validation accuracy, discarded."],
      ["#congelamento-tip-c", "Configuration C: 84.2% average validation accuracy, kept in the pipeline."],
      ["#congelamento-valor-a", "67.0%"],
      ["#congelamento-valor-b", "74.9%"],
      ["#congelamento-valor-c", "84.2%"],
      ["#congelamento-cat-a", "A — head only"],
      ["#congelamento-cat-b", "B — +1 block"],
      ["#congelamento-cat-c", "C — +2 blocks (current)"],
      ["#congelamento-status-a", "discarded"],
      ["#congelamento-status-b", "discarded"],
      ["#congelamento-status-c", "kept in the pipeline"],
      ["#congelamento-figura-legenda", "Mean validation accuracy and standard deviation across five folds."],
      ["#congelamento .case-result:nth-child(1) span", "average validation accuracy of the production configuration — the highest and most stable of the three"],
      ["#congelamento .case-result:nth-child(3) span", "images in the test set that triggered the initial alarm — too much variance to support a conclusion on its own"],
      ["#engenharia .section-kicker", "Engineering and security"],
      ["#engenharia h2", "Reliability built in layers."],
      ["#engenharia .case-prose > .lead", "Validation of identity, session, authorization, device, and biometric attempt."],
      ["#engenharia .auth-summary .section-kicker", "In simple terms"],
      ["#engenharia .auth-summary p:nth-child(2)", "<strong>Login generates a signed temporary credential; protected routes validate it before performing any action.</strong>"],
      ["#engenharia .auth-summary code", "Login → validated credential → authorized access"],
      ["#engenharia .auth-summary p:last-child", "FastAPI’s <code>OAuth2PasswordBearer</code> standardizes how the API receives the token. In this project, it does not represent social login through Google or Microsoft."],
      ["#engenharia .case-list li:nth-child(1)", "<strong>Signed credential:</strong> authentication validates the credential before authorizing access."],
      ["#engenharia .case-list li:nth-child(2)", "<strong>Revocation:</strong> revoked tokens remain invalid."],
      ["#engenharia .case-list li:nth-child(3)", "<strong>Password hashing:</strong> the original password is never stored or recovered."],
      ["#engenharia .case-list li:nth-child(4)", "<strong>Controlled recovery:</strong> password resets use single-use tokens with expiration and usage tracking."],
      ["#engenharia .case-list li:nth-child(5)", "<strong>Authorization and anti-IDOR:</strong> beyond authentication, the API verifies whether each user may access a resource, including sensitive medical documents."],
      ["#engenharia .case-list li:nth-child(6)", "<strong>Device controls:</strong> device access is part of layered defense."],
      ["#engenharia .case-list li:nth-child(7)", "<strong>Protected biometrics:</strong> technical controls protect biometric and medical data; legal compliance assessment is outside the scope of this project."],
      ["#engenharia .case-list li:nth-child(8)", "<strong>Deployment:</strong> access controls are part of layered defense."],
      ["#entrega .section-kicker", "Hardware constraint"],
      ["#entrega h2", "The target server had no GPU."],
      ["#entrega .case-prose > .lead", "The target server had Intel HD 4600, 8&nbsp;GB RAM, and no dedicated GPU. The initial image included about 6&nbsp;GB of CUDA and cuDNN unused on that hardware."],
      ["#entrega .case-prose > p:nth-of-type(2)", "I measured <strong>disk</strong> and <strong>memory</strong> separately. CUDA drove disk cost; in RAM, the facial package loaded five models to use two, replicated per server process."],
      ["#entrega .case-results .case-result:nth-child(1) span", "of RAM returned to the system, about one quarter of the machine"],
      ["#entrega .case-results .case-result:nth-child(2) span", "in inference-image size, from 8.1&nbsp;GB to 433&nbsp;MB"],
      ["#entrega .case-results .case-result:nth-child(3) span", "classifier decisions changed when switching runtime"],
      ["#entrega .case-prose > p:nth-of-type(3)", "I migrated the classifier to ONNX Runtime. The export script compares runtimes on the held-out test and fails if any decision changes. Preprocessing was bit-identical, with no changed decisions."],
      ["#camada-errada .section-kicker", "Interface diagnosis"],
      ["#camada-errada h2", "Five failures identified in the interface and package."],
      ["#camada-errada .case-prose > .lead", "I identified five failures that code tests and the browser console did not detect."],
      ["#camada-errada .case-results .case-result:nth-child(1) span", "of decoded image per 120&nbsp;px thumbnail, ten of them on one screen"],
      ["#camada-errada .case-results .case-result:nth-child(2) strong", "2,356 → 10&nbsp;KiB"],
      ["#camada-errada .case-results .case-result:nth-child(2) span", "per sample once the thumbnail is generated server-side, in 33&nbsp;ms"],
      ["#camada-errada .case-results .case-result:nth-child(3) span", "pages with the same broken layout under HTTP&nbsp;200 and an error-free console"],
      ["#camada-errada .case-prose > p:nth-of-type(2)", "<strong>Browser memory:</strong> 4080 × 3060 photos (2.3 MB) filled 120 px cards, consuming about 48 MiB of bitmap memory each. <code>blob:</code> URLs were not released. The endpoint returned the correct image, but tests did not check its memory cost."],
      ["#camada-errada .case-formula .section-kicker", "The access control that the stylesheet undid"],
      ["#camada-errada .case-formula p:nth-of-type(2)", "<strong>The attribute that hides an element loses on specificity to any class rule.</strong>"],
      ["#camada-errada .case-formula p:nth-of-type(3)", "CSS class rules overrode the hiding attribute and displayed restricted cards. I replaced five local patches with a general rule, checked by a test in access-controlled stylesheets."],
      ["#camada-errada .case-list li:nth-child(1)", "<strong>Layout:</strong> three screens lost the menu/content container. Screenshot comparison revealed the defect despite HTTP 200 and an error-free console."],
      ["#camada-errada .case-list li:nth-child(2)", "<strong>Interface authorization:</strong> the screen requested director-only photos and displayed the 403 as a loading failure. I added a restriction explanation and avoided unauthorized requests."],
      ["#camada-errada .case-list li:nth-child(3)", "<strong>Delivery guide:</strong> instructions referenced a directory missing from the package. I linked the guide to the version variable and began checking the extracted <code>tar</code>."],
      ["#camada-errada .case-prose > p:nth-of-type(3)", "Three fixes received automated tests. For visual and delivery changes, I adopted screenshots and extracted-package inspection."],
      ["#multi-stage .section-kicker", "Delivery benchmark"],
      ["#multi-stage h2", "The multi-stage gain, without changing the runtime."],
      ["#multi-stage .case-prose > .lead", "I isolated the multi-stage effect in two ONNX images with the same code, model, and dependencies: direct installation in the final image or a separate build copying only the runtime."],
      ["#tabela-multi-stage-titulo", "Equivalent ONNX image, measured on the same host and commit"],
      ["#tabela-multi-stage-cabecalho", "<tr><th scope=\"col\">Build</th><th scope=\"col\">Size</th><th scope=\"col\">Difference</th></tr>"],
      ["#tabela-multi-stage-single", "<th scope=\"row\">Single-stage reference</th><td>446.2 MiB</td><td>—</td>"],
      ["#tabela-multi-stage-multi", "<th scope=\"row\">Production multi-stage</th><td>413.3 MiB</td><td>−32.9 MiB (−7.4%)</td>"],
      ["#tabela-multi-stage-nota", "Both images loaded the ONNX model and returned <code>200</code> from <code>/health</code>. The benchmark is reproducible through the project Dockerfiles and scripts."],
      ["#progressao .section-kicker", "Delivery trajectory"],
      ["#progressao h2", "From 10.59&nbsp;GB to 1.11&nbsp;GB, in three separable decisions."],
      ["#progressao .case-prose > .lead", "The manifest records image sizes per release. The series separates the effects of runtime, facial-model, and packaging changes."],
      ["#tabela-progressao-titulo", "Image size per release, read from the delivery manifest"],
      ["#tabela-progressao-cabecalho", "<tr><th scope=\"col\">Release</th><th scope=\"col\">Backend</th><th scope=\"col\">Inference</th><th scope=\"col\">Total</th><th scope=\"col\">What changed</th></tr>"],
      ["#tabela-progressao-100", "<th scope=\"row\">1.0.0</th><td>2.52&nbsp;GB</td><td>8.06&nbsp;GB</td><td>10.59&nbsp;GB</td><td>starting point</td>"],
      ["#tabela-progressao-102", "<th scope=\"row\">1.0.2</th><td>not rebuilt</td><td>0.43&nbsp;GB</td><td>—</td><td>inference moves from CUDA + PyTorch to ONNX Runtime</td>"],
      ["#tabela-progressao-108", "<th scope=\"row\">1.0.8</th><td>2.17&nbsp;GB</td><td>0.42&nbsp;GB</td><td>2.60&nbsp;GB</td><td>no single cause recorded in the manifest</td>"],
      ["#tabela-progressao-1010", "<th scope=\"row\">1.0.10</th><td>0.69&nbsp;GB</td><td>0.42&nbsp;GB</td><td>1.11&nbsp;GB</td><td>the facial-model swap, driven by licensing, takes the heavy dependency with it</td>"],
      ["#tabela-progressao-121", "<th scope=\"row\">1.2.1</th><td>0.69&nbsp;GB</td><td>0.42&nbsp;GB</td><td>1.11&nbsp;GB</td><td>unchanged for four releases</td>"],
      ["#tabela-progressao-nota", "Values in bytes in the manifest, written by the release script itself on every build. The 1.0.0 images are still preserved locally, which allows the starting line to be re-measured rather than trusted."],
      ["#progressao .case-results .case-result:nth-child(1) strong", "&minus;9.47&nbsp;GB"],
      ["#progressao .case-results .case-result:nth-child(1) span", "between the first delivery and the current one, both images combined"],
      ["#progressao .case-results .case-result:nth-child(2) strong", "9.5×"],
      ["#progressao .case-results .case-result:nth-child(2) span", "smaller overall; the inference image alone became 19× smaller"],
      ["#progressao .case-results .case-result:nth-child(3) strong", "414&nbsp;MB"],
      ["#progressao .case-results .case-result:nth-child(3) span", "is what the client downloads today, with the images compressed into the package"],
      [".case-highlight .section-kicker", "Architecture decision"],
      [".case-cta .section-kicker", "Project context"],
      [".case-cta h2", "Back to the system overview."],
      [".case-cta .contact-actions a:nth-child(1)", "See the case study"],
      [".case-cta .contact-actions a:nth-child(2)", "Open on GitHub"],
      ["#face-tech-title", "From results to evidence."],
      ["#face-tech-intro", "Experimental protocols, baselines, benchmarks, and limitations, with reproducible evidence."],
      [".face-tech-hero .case-meta li:nth-child(4)", "PyTorch + scikit-learn"],
      ["#reconhecimento .section-kicker", "Facial recognition"],
      ["#reconhecimento h2", "Four inherited decisions, four measurements."],
      ["#reconhecimento-lead", "I reproduced the kiosk pipeline to evaluate the threshold, frame count, vector index, and model replacement."],
      ["#reconhecimento-scroll", "Swipe the table to compare all four columns →"],
      ["#tabela-reconhecimento-titulo", "From inherited assumption to measured decision"],
      ["#tabela-reconhecimento-cabecalho", "<th scope=\"col\">Question</th><th scope=\"col\">Before</th><th scope=\"col\">Measurement</th><th scope=\"col\">Decision</th>"],
      ["#tabela-reconhecimento-nota", "Threshold and frame count were measured on a public population and controlled synthetic sessions. They indicate direction; they do not replace calibration on the client population and kiosk."],
      ["#reconhecimento .case-result:nth-child(1) span", "p95 with one concurrent identification, using the current 3-frame burst"],
      ["#reconhecimento .case-result:nth-child(2) span", "p95 with 20 concurrent identifications in the CPU-only benchmark"],
      ["#reconhecimento .case-result:nth-child(3) strong", "~1.2 million"],
      ["#reconhecimento .case-result:nth-child(3) span", "vectors before exact search is projected to reach 50&nbsp;ms"],
      ["#reconhecimento-concorrencia .section-kicker", "Unplanned finding"],
      ["#reconhecimento-concorrencia p:nth-child(2)", "<strong>Two simultaneous clock-ins caused 6 out of 6 extraction failures.</strong>"],
      ["#reconhecimento-concorrencia p:nth-child(3)", "Detector and recognizer shared state in the thread pool: 8 punches caused 24 failures in 24 extractions. I serialized model access and added a regression test with 8 threads × 3 frames."],
      ["#reconhecimento-reproducao", "Reproduction lives in notebooks 15–18 and <code>ml/face_bench.py</code>: the same extraction, normalization, and thresholds used by the inference service, with data sources and limitations stated."],
      ["footer .text-link", "Back to portfolio"],
      ["#engenharia .case-list li:nth-child(9)", "<strong>XSS prevention:</strong> I replaced markup containing user data with DOM nodes, <code>textContent</code>, and <code>addEventListener</code>, avoiding interpolation into <code>onclick</code>."],
      ["#engenharia .case-list li:nth-child(10)", "<strong>Schema healthcheck:</strong> I added comparison of the applied migration against the revision expected by the code, alongside database connectivity checks."],
      ["#procedencia h2", "Packaged-model traceability."],
      ["#procedencia .case-prose > .lead", "The delivery-image audit identified a PyTorch checkpoint that did not match the versioned checksum."],
      ["#procedencia .case-prose > p:nth-of-type(2)", "An experiment overwrote the promoted checkpoint. The packaged ONNX also differed from the versioned checkpoints, as shown by image-level probability comparisons."],
      ["#procedencia .case-prose > p:nth-of-type(3)", "The documented export command failed due to undeclared dependencies, leading to manual exports without traceability."],
      ["#procedencia .case-list li:nth-child(1)", "<strong>Release validation:</strong> the gate now checks checksums and aborts on mismatch."],
      ["#procedencia .case-list li:nth-child(2)", "<strong>Lineage:</strong> export records the checkpoint-to-ONNX link, verified at release."],
      ["#procedencia .case-list li:nth-child(3)", "<strong>Reproducibility:</strong> I declared dependencies and obtained two byte-identical exports."],
      ["#execucao .lead", "CPU inference remains synchronous; asynchronous concurrency handles I/O waits."],
      ["#execucao .case-highlight-note", "Load testing revealed connections held during bcrypt, exhausting the pool. With hashes costing about 100&nbsp;ms, each connection limited throughput to ten logins per second. The diagnosis indicated releasing connections before hashing."],
      ["#isolamento .section-kicker", "Inference isolation"],
      ["#isolamento .lead", "I retained triage in a separate service after measuring its processing cost."],
      ["#isolamento .case-highlight-note", "The network took 14&nbsp;ms and OCR took 909&nbsp;ms (98% of processing time). Merging triage into the two-process backend would occupy half its capacity for about one second. A separate service preserves capacity for facial attendance."],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Back to portfolio"],
      [".case-meta", "aria-label", "Topics on this page"],
      [".security-list", "aria-label", "Application security layers"],
      ["#atestados .case-results", "aria-label", "Results of the medical-document classification experiment"],
      ["#metodo .case-results", "aria-label", "Investigation indicators"],
      ["#metodo .case-list", "aria-label", "Technical decisions from the investigation"],
      ["#diagnostico .case-results", "aria-label", "Diagnosis indicators"],
      ["#diagnostico .case-list", "aria-label", "Experiments conducted"],
      ["#congelamento .case-results", "aria-label", "Freeze-depth experiment results"],
      ["#reconhecimento .case-results", "aria-label", "Current facial-recognition latency"],
    ],
  },
  "triple-roman": {
    title: "Triple Roman Domination | Israel Souza Ferreira",
    description: "How to defend an empire with half the troops: Constantine’s strategy explained visually, and the thesis that proposed the first algorithms for the problem.",
    content: [
      [".skip-link", "Skip to content"],
      [".nav-menu a[href=\"../../index.html#projetos\"]", "Projects"],
      [".nav-menu a[href=\"tecnico.html\"]", "Technical breakdown"],
      [".nav-menu a[href*=\"Triple-Roman\"]", "Repository"],
      ["#trd-lab-kicker", "Try it"],
      ["#trd-lab-titulo", "Distribute the legions of the empire."],
      ["#trd-help", "Click a region to change its troops: 0 → 2 → 3 → 4. The map flags right away who has been left exposed."],
      ["#trd-map-titulo", "Interactive map of the eight regions of the empire"],
      ["#trd-map-desc", "Each circle is a region and each line is a border. The number inside a circle is its amount of legions. Use Tab to move across regions and Enter to change their troops."],
      ["#trd-score-custo-rotulo", "Cost"],
      ["#trd-score-custo-unidade", "legions"],
      ["#trd-score-otimo-rotulo", "Best possible"],
      ["#trd-score-otimo-unidade", "legions"],
      ["#trd-botao-otimo", "Show an optimal solution"],
      ["#trd-botao-limpar", "Empty the map"],
      ["#trd-lab-nota", "The map starts on one of five optimal solutions, with eight legions."],
      ["#trd-legenda-vazio", "no troops, depends on its neighbours"],
      ["#trd-legenda-tropas", "holding troops, sends one less than it has"],
      ["#trd-legenda-exposto", "exposed: short of three legions of defence"],
      ["footer .text-link", "Back to portfolio"],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Back to portfolio"],
      [".trd-legend", "aria-label", "Map legend"],
    ],
  },
  "triple-roman-tecnico": {
    title: "Triple Roman Domination — technical breakdown | Israel Souza Ferreira",
    description: "Technical deep dive into the thesis on Triple Roman Domination: formal definition, the counterexample that breaks the previous ILP formulation, the GA and ACO algorithms, and the result tables.",
    content: [
      [".skip-link", "Skip to content"],
      [".nav-menu a[href=\"index.html\"]", "Overview"],
      [".nav-menu a[href=\"../../index.html#projetos\"]", "Projects"],
      [".nav-menu a[href*=\"Triple-Roman\"]", "Repository"],
      [".case-breadcrumb", "← Back to the overview"],
      [".case-hero .eyebrow", "Technical deep dive · Triple Roman Domination"],
      [".case-title", "Model, algorithms, and experiments."],
      ["#trdt-intro", "Formal definition, ILP formulation correction, GA and ACO metaheuristics, and results on 362 graphs."],
      [".case-hero .hero-actions a:nth-child(1)", "See the correction of the exact model"],
      [".case-hero .hero-actions a:nth-child(2)", "See the algorithms"],
      [".case-hero .hero-actions a:nth-child(3)", "See the results"],
      [".case-meta li:nth-child(1)", "Integer Linear Programming"],
      [".case-meta li:nth-child(2)", "Genetic Algorithm"],
      ["#trdt-def-kicker", "Definition"],
      ["#trdt-def-titulo", "The problem, formally."],
      ["#trdt-def-lead", "Given a graph <em>G</em> and a function <em>h</em> assigning each vertex a label in {0, 1, 2, 3, 4}, a vertex is <strong>active</strong> when its label is greater than zero. The active neighbourhood of <em>v</em>, written <em>AN(v)</em>, is the set of active neighbours of <em>v</em>."],
      ["#trdt-def-formula-kicker", "Triple Roman Domination function"],
      ["#trdt-def-formula-nota", "The weight of <em>h</em> is the sum of its labels. The triple Roman domination number γ<sub>3R</sub>(G) is the smallest possible weight of a valid function, and the problem is to determine it. The decision version is NP-complete, including when restricted to bipartite and chordal graphs."],
      ["#trdt-def-equivalencia", "Subtracting |AN(v)| from both sides gives the form used in the overview: every active neighbour contributes <em>h(u) − 1</em>, that is, it sends everything but one legion, while the vertex itself contributes its full <em>h(v)</em>. The two readings are the same inequality."],
      ["#trdt-def-teorema", "<strong>A result that trims the model:</strong> for every non-trivial connected graph there exists an optimal function that never uses the label 1 (Abdollahzadeh Ahangar <em>et al.</em>, 2021). Whenever a vertex receives 1, it can be zeroed while a neighbour is promoted, without increasing the weight. That is why both the exact formulation and the metaheuristics work only with {0, 2, 3, 4} — one variable fewer per vertex."],
      ["#trdt-def-limites", "The bounds used as reference in the work: γ<sub>3R</sub>(G) ≥ ⌈4n / (Δ+1)⌉ for connected graphs with Δ ≥ 3 and n ≥ 2 (Valenzuela-Tripodoro <em>et al.</em>, 2024), and γ<sub>3R</sub>(G) ≤ 3n/2 for connected graphs with δ ≥ 2 (Hajjari <em>et al.</em>, 2023)."],
      ["#trdt-pli-kicker", "Exact model"],
      ["#trdt-pli-titulo", "A published formulation that accepts an invalid solution."],
      ["#trdt-pli-lead", "The only Integer Linear Programming formulation available for the problem (Vengaldas <em>et al.</em>, 2023) uses six binary variables per vertex and four families of constraints. The constraint responsible for zero-labelled vertices is linearly too loose: there are labellings that satisfy it without being triple Roman domination functions."],
      ["#trdt-pli-restricao-kicker", "The faulty constraint"],
      ["#trdt-pli-restricao-nota", "Here <em>q</em>, <em>r</em>, and <em>s</em> indicate labels 2, 3, and 4; <em>t</em> and <em>x</em> indicate the existence of some neighbour labelled 2 and some neighbour labelled 3. Summing fractions lets two neighbours labelled 2 “pay” the constraint together with the indicator <em>t</em>, even though two neighbours labelled 2 are not enough under the definition."],
      ["#trdt-c10-titulo", "Ten-vertex cycle with an invalid labelling accepted by the previous model"],
      ["#trdt-c10-desc", "Ten vertices arranged in a circle. Seven receive label 2 and three receive label 0. Each vertex labelled 0 has exactly two neighbours labelled 2, which does not satisfy the definition of the problem."],
      ["#trdt-c10-legenda", "Counterexample on the cycle C<sub>10</sub>. Each vertex labelled 0 has two neighbours labelled 2, which yields ⅔ + ½ = 7/6 ≥ 1 in the constraint above. Under the definition, however, it only receives 1 + 1 = 2 legions of defence, below the required 3."],
      ["#trdt-pli-consequencia", "The authors refine that model into two further versions and show they are equivalent to one another. Since the faulty constraint is precisely the one modelling zero-labelled vertices and it remains in all three versions, all three inherit the flaw."],
      ["#trdt-pli-nova-kicker", "The proposed formulation"],
      ["#trdt-pli-nova-nota", "The constraint is the definition itself written in binary variables, after cancelling the |AN(v)| term: a neighbour labelled 2 contributes 1, one labelled 3 contributes 2, and one labelled 4 contributes 3 — exactly “sends everything but one legion”. Dropping the label 1 through the theorem above reduces the model from 6|V| variables and 4|V| constraints to 3|V| variables and 2|V| constraints."],
      ["#trdt-alg-kicker", "Algorithms"],
      ["#trdt-alg-titulo", "Two metaheuristics, the same solution format."],
      ["#trdt-alg-lead", "In both algorithms a solution is a vector of <em>n</em> positions holding values in {0, 2, 3, 4}, and the cost to minimize is the sum of those positions. What changes is how the search space is traversed."],
      ["#trdt-ga-kicker", "FLGA"],
      ["#trdt-ga-titulo", "Genetic algorithm."],
      ["#trdt-ga-item1", "<strong>Initial population by heuristic:</strong> four variants were compared. H1 draws a vertex, labels it 2, and zeroes its neighbourhood; H2 does the same with label 4 and then tries to lower labels; H3 walks the vertices in decreasing order of degree; H4 mixes the three in equal parts. H4 won and defines the FLGA."],
      ["#trdt-ga-item2", "<strong>Repair instead of discard:</strong> crossover and mutation produce infeasible solutions often. Rather than rejecting them, the <code>feasibilityCheck</code> routine walks the violated vertices and raises the label to the minimum that restores feasibility. The population is fully feasible at the end of every generation."],
      ["#trdt-ga-item3", "<strong>Greedy reduction:</strong> <code>decreaseLabels</code> tries to lower each label (4 → 3 → 2 → 0) and undoes any change that breaks feasibility for the vertex or its active neighbourhood. This is what keeps the repair step from accumulating needless slack."],
      ["#trdt-ga-item4", "<strong>Operators:</strong> tournament selection, one- or two-point crossover drawn for each pair, mutation replacing one position with a random label, and elitism preserving ⌈population × rate⌉ individuals."],
      ["#trdt-ga-item5", "<strong>Stopping:</strong> a maximum number of generations, or a maximum number of consecutive generations without improvement — whichever comes first."],
      ["#trdt-tabela-h-titulo", "Comparison between the four initial-population heuristics"],
      ["#trdt-tabela-h-cabecalho", "<th scope=\"col\">Graph</th><th scope=\"col\">|V|</th><th scope=\"col\">H1</th><th scope=\"col\">H2</th><th scope=\"col\">H3</th><th scope=\"col\">H4</th><th scope=\"col\">ILP</th>"],
      ["#trdt-aco-kicker", "ACO-FL"],
      ["#trdt-aco-titulo", "Ant colony optimization with local search."],
      ["#trdt-aco-lead", "The implementation follows the <em>Max-Min Ant System</em> inside the <em>Hyper-Cube Framework</em>: every vertex carries a pheromone τ<sub>v</sub> ∈ [0,1], initialized at 0.5 and bounded to [0.001, 0.999]."],
      ["#trdt-aco-item1", "<strong>Construction:</strong> each ant picks vertices to receive label 4 and zeroes their neighbourhood, until the auxiliary graph is exhausted. The choice uses deg(u) · τ<sub>u</sub>: with a fixed probability it takes the maximum, otherwise it draws by proportional roulette."],
      ["#trdt-aco-item2", "<strong>Extend and reduce:</strong> <code>extendSolution</code> promotes a fraction of the vertices to label 4, deliberately making the solution more expensive in order to escape local minima; <code>reduceSolution</code> then walks the vertices in decreasing order of degree, lowering labels while feasibility holds."],
      ["#trdt-aco-item3", "<strong>RVNS local search:</strong> it destroys part of the solution, rebuilds, extends, and reduces. The intensity of the destruction grows with the neighbourhood level k, which rises on every iteration without improvement and returns to 1 as soon as a better solution appears."],
      ["#trdt-aco-item4", "<strong>Pheromones guided by convergence:</strong> the factor φ decides the weight of the iteration best against the global best — only the iteration best while φ &lt; 0.4, only the global best once φ ≥ 0.8. If φ goes past 0.99, pheromones are reinitialized to avoid stagnation."],
      ["#trdt-tabela-rvns-titulo", "Contribution of the RVNS local search"],
      ["#trdt-tabela-rvns-cabecalho", "<th scope=\"col\">Graph</th><th scope=\"col\">|V|</th><th scope=\"col\">ACO with RVNS</th><th scope=\"col\">ACO without RVNS</th><th scope=\"col\">ILP</th>"],
      ["#trdt-exp-kicker", "Protocol"],
      ["#trdt-exp-titulo", "How the experiments were set up."],
      ["#trdt-exp-item1", "<strong>Instances — 362 graphs:</strong> 50 sparse matrices from the BAI collection, 186 from Harwell-Boeing, 56 graphs from Miscellaneous Networks, 10 graphs from each classic family (cycles, paths, stars, and trees), and 30 Erdős-Rényi random graphs from 25 to 250 vertices with connection probability 0.2, 0.5, and 0.8."],
      ["#trdt-exp-item2", "<strong>Exact reference:</strong> the ILP model was implemented in Python with Pyomo and NetworkX. The free CPLEX edition is limited to a thousand variables and a thousand constraints, which covers graphs of up to 333 vertices; beyond that, CBC was used. Each instance had at most 900 seconds, and the solver returns the best solution found — which is not always provably optimal."],
      ["#trdt-exp-item4", "<strong>Environment:</strong> Intel Core i5-8265U at 1.60 GHz, 8 GB of RAM, Ubuntu 22.04.5 LTS. Metaheuristics in C++ compiled with G++ 11.4.0 and the flags <code>-std=c++17 -Wall -Wextra -Ofast -finline-functions -march=native</code>."],
      ["#trdt-tabela-param-aco-titulo", "ACO parameters returned by irace"],
      ["#trdt-tabela-param-aco-cabecalho", "<th scope=\"col\">Parameter</th><th scope=\"col\">Search range</th><th scope=\"col\">With RVNS</th><th scope=\"col\">Without RVNS</th>"],
      ["#trdt-tabela-param-ga-titulo", "FLGA parameters returned by irace"],
      ["#trdt-tabela-param-ga-cabecalho", "<th scope=\"col\">Parameter</th><th scope=\"col\">Search range</th><th scope=\"col\">Tuned value</th>"],
      ["#trdt-tabela-param-ga-nota", "The population size is the order of the graph divided by the value in the last column."],
      ["#trdt-res-kicker", "Results"],
      ["#trdt-res-titulo", "ACO-FL and FLGA, compared with the exact reference when available."],
      ["#trdt-res-lead", "The relative gap compares the best solution found by the metaheuristics against the solution of the exact model. In the reported run, ACO-FL achieved the best observed combination in most instances, but the advantage is not uniform: on small dense graphs and on some graphs with many local optima, FLGA gets closer."],
      ["#trdt-tabela-cmp-titulo", "ACO-FL, FLGA, and ILP on the random graphs"],
      ["#trdt-tabela-cmp-nota", "Excerpt of 9 of the 30 random graphs. The gap is computed over the better of the two metaheuristics. On g100-.5 and g225-.8 it is FLGA that comes out ahead, reaching the optimum on the latter."],
      ["#trdt-met-kicker", "Results and impact communicated"],
      ["#trdt-met-titulo", "The three metrics behind every claim."],
      ["#trdt-met-lead", "Runtime, fitness, and gap were defined before the experiments and applied to both algorithms and the exact model."],
      ["#trdt-met1-tag", "Criterion 1"],
      ["#trdt-met1-titulo", "Runtime"],
      ["#trdt-met2-tag", "Criterion 2"],
      ["#trdt-met2-titulo", "Fitness, the weight of the solution"],
      ["#trdt-met3-tag", "Criterion 3"],
      ["#trdt-met3-titulo", "Relative gap"],
      ["#trdt-met4-tag", "How it is computed"],
      ["#trdt-met4-titulo", "gap = (best − ILP) / ILP"],
      ["#trdt-met4-texto", "The numerator uses the better of the two metaheuristics."],
      ["#trdt-met-impacto-intro", "Research contributions:"],
      ["#trdt-met-impacto-1", "<strong>Corrected formulation:</strong> a counterexample demonstrating the published ILP flaw."],
      ["#trdt-met-impacto-2", "<strong>Implementation:</strong> genetic-algorithm and ant-colony metaheuristics."],
      ["#trdt-met-impacto-4", "<strong>Experimental selection:</strong> RVNS local search and H4 initial population compared under the same protocol."],
      ["#trdt-lim-kicker", "Limits of what was measured"],
      ["#trdt-lim-titulo", "What the numbers do not say."],
      ["#trdt-lim-item3", "<strong>One run per instance.</strong> The metaheuristics are stochastic, and the reported results do not come from multiple runs with confidence intervals, which rules out claiming small differences between the two algorithms."],
      ["#trdt-lim-item4", "<strong>Open work.</strong> Widening the hyperparameter search, testing other selection, crossover, mutation, and elitism strategies for the GA, evaluating other choice mechanisms for the ACO, and cutting runtime through implementation optimizations."],
      ["#trdt-cta-kicker", "Project context"],
      ["#trdt-cta-titulo", "Back to the overview of the problem."],
      [".case-cta .contact-actions a:nth-child(1)", "See the overview"],
      [".case-cta .contact-actions a:nth-child(2)", "Open on GitHub"],
      [".case-cta .contact-actions a:nth-child(3)", "Open thesis"],
      ["footer .text-link", "Back to portfolio"],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Back to portfolio"],
      [".case-meta", "aria-label", "Topics on this page"],
      ["#ga .case-list", "aria-label", "Components of the genetic algorithm"],
      ["#aco .case-list", "aria-label", "Stages of the ant colony algorithm"],
      ["#experimentos .case-list", "aria-label", "Experimental protocol"],
      ["#metricas .case-list", "aria-label", "Impact communicated"],
      ["#limites .case-list", "aria-label", "Limitations of the study"],
    ],
  },
  "auxilio": {
    title: "Emergency Aid | Data Engineering — Israel Souza Ferreira",
    description: "Public-data ingestion, measured memory growth, and interpretation of controlled experiments.",
    content: [
      [".skip-link", "Skip to content"],
      ["footer .text-link", "Back to portfolio"],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Home page"],
    ],
  },
  "auxilio-tecnico": {
    title: "Emergency Aid | Ingestion Experiments — Israel Souza Ferreira",
    description: "PostgreSQL ingestion baselines, RSS checkpoints, and limitations.",
    content: [
      [".skip-link", "Skip to content"],
      ["footer .text-link", "Back to portfolio"],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Home page"],
    ],
  },
  "404": {
    title: "Page not found | Israel Souza Ferreira",
    description: "Page not found on Israel Souza Ferreira’s portfolio.",
    content: [
      [".skip-link", "Skip to content"],
      [".nav-menu a[href=\"/#projetos\"]", "Projects"],
      [".nav-menu a[href=\"/#curriculo\"]", "Résumé"],
      [".nav-menu a[href=\"/#contato\"]", "Contact"],
      [".case-hero .eyebrow", "Error 404"],
      [".case-title", "This page does not exist."],
      ["#erro-texto", "The address may have changed, or the link you followed is out of date. The projects are all one click away from here."],
      [".hero-actions a:nth-child(1)", "Go to the homepage"],
      [".hero-actions a:nth-child(2)", "View projects"],
      ["footer .text-link", "Back to portfolio"],
    ],
    attributes: [
      ["nav", "aria-label", "Main navigation"],
      [".brand", "aria-label", "Back to portfolio"],
    ],
  },
};

const inlineTranslations = [...document.querySelectorAll("[data-en]")].map((element) => ({
  element, pt: element.innerHTML, en: element.dataset.en,
}));

// Translate attributes independently from content, preserving nodes and listeners.
const inlineAttributeTranslations = [];
for (const attribute of ['aria-label', 'alt', 'title', 'placeholder']) {
  document.querySelectorAll(`[data-en-${attribute}]`).forEach((element) => {
    inlineAttributeTranslations.push({
      element, attribute, pt: element.getAttribute(attribute),
      en: element.getAttribute(`data-en-${attribute}`),
    });
  });
}

const originalContent = new Map();
const originalAttributes = new Map();
const pageTranslations = englishPages[page];

// Inline translations take precedence over legacy selector maps. Discard
// obsolete selectors and avoid replacing a parent that contains translated leaves.
if (pageTranslations) {
  pageTranslations.content = pageTranslations.content.filter(([selector]) => {
    const element = document.querySelector(selector);
    return element && !element.hasAttribute('data-en') && !element.querySelector('[data-en]');
  });
  pageTranslations.attributes = pageTranslations.attributes.filter(([selector, attribute]) => {
    return document.querySelector(selector)?.hasAttribute(attribute);
  });
}

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

  inlineTranslations.forEach(({ element, pt, en }) => {
    element.innerHTML = language === 'en' ? en : pt;
  });

  inlineAttributeTranslations.forEach(({ element, attribute, pt, en }) => {
    if (language === 'pt' && pt === null) element.removeAttribute(attribute);
    else element.setAttribute(attribute, language === 'en' ? en : pt);
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
        pdf: root.dataset.resumePdfEn || 'assets/israel-cv-english.pdf',
        tex: 'assets/israel-cv-english.tex',
        text: 'assets/israel-cv-english.txt',
        download: 'Israel-Souza-Ferreira-Resume.pdf',
      }
    : {
        pdf: root.dataset.resumePdfPt || 'assets/israel-cv-portugues.pdf',
        tex: 'assets/israel-cv-portugues.tex',
        text: 'assets/israel-cv-portugues.txt',
        download: 'Israel-Souza-Ferreira-Curriculo.pdf',
      };

  document.querySelectorAll('[data-resume-action]').forEach((link) => {
    const action = link.dataset.resumeAction;

    if (action === 'text') {
      link.href = resumeFiles.text;
      link.setAttribute('download', '');
      return;
    }

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
  document.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language } }));
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

  document.addEventListener('portfolio:languagechange', trdRender);
  trdRender();
}

// Native disclosures remain usable without JavaScript. Deep links reveal their target.
function revealAnchor() {
  let target;
  try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
  catch { return; }
  if (!target) return;
  let ancestor = target;
  while (ancestor) {
    if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
    ancestor = ancestor.parentElement;
  }
  target.scrollIntoView({ block: 'start' });
}
window.addEventListener('hashchange', revealAnchor);
if (location.hash) requestAnimationFrame(revealAnchor);
