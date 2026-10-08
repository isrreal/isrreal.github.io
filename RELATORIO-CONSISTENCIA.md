# Tabela de mudanças

Branch: `fix/portfolio-consistencia`. Campos de fatos confirmados não foram preenchidos. P10 não executado.

| Correção | Arquivos | Alteração e motivo técnico |
|---|---|---|
| P1 | index.html; projetos/face-clock-evoluir/{index,tecnico}.html | Marcadores de contagem/data, pipeline/dimensão e composição dos conjuntos; valores existentes preservados por falta de confirmação. Unificação pendente. |
| P2 | projetos/face-clock-evoluir/tecnico.html | Explicita cinco linhas, incluindo baseline majoritário, e apenas um classificador sobre embeddings; reconciliação dos outros dois pendente. Home e estudo de caso não citam cinco abordagens nesta versão. |
| P3 | projetos/face-clock-evoluir/tecnico.html; script.js | Generaliza implantação, provisionamento e claims em PT/EN, preservando princípios; hashes de cache atualizados nos oito HTML para carregar as traduções alteradas. |
| P4 | 404.html | Adiciona os quatro metadados ausentes; as outras sete páginas já usavam domínio e caminhos corretos. |
| P5 | projetos/face-clock-evoluir/tecnico.html; script.js | Substitui o resultado EXIF não confirmado por marcador PT/EN; hashes de cache atualizados nos oito HTML. A frase encontrada já estava completa, não truncada. |
| P6 | index.html | Mantém fatos existentes nas duas entradas e acrescenta marcadores PT/EN para o conteúdo publicável; não há página separada de experiência. Reescrita pendente. |
| P7 | Este relatório | Não acrescenta métricas: depende da resolução de P1 e da confirmação dos resultados publicáveis. |
| P8 | index.html; styles.css | Classe localizada reduz padding, altura mínima e tamanho do título do Auxílio Emergencial; mantém conteúdo, contraste e rótulo Em desenvolvimento. |
| P9 | Este relatório | Não acrescenta teste estatístico: b e c não fornecidos. |

# Pendências

P7: Qual é o pipeline facial atual, qual a dimensão do embedding e você confirma os resultados publicáveis de reconhecimento 1:N (45,4% → 0,2% em dados públicos; p95 74 ms com 1 identificação e 1,87 s com 20 em CPU)? Só então acrescentar o bloco e a nota de calibração na população real.

P9: Nos 44 documentos negativos, quantos o novo classificador acerta e o antigo erra (b), e quantos o antigo acerta e o novo erra (c)? Sem b e c, não é possível calcular o valor-p exato bicaudal. Fórmula prevista: min(1, 2 × soma[k=0..min(b,c)] C(b+c,k) × 0,5^(b+c)); sem discordâncias, valor-p = 1.

- `index.html:188` — [DECISÃO: supply publishable Tieta.ai action, method/tool, result or scope, and confidentiality limits]

- `index.html:188` — [DECISÃO: fornecer ação, método/ferramenta, resultado ou escopo publicável e limites de confidencialidade da Tieta.ai]

- `index.html:208` — [DECISÃO: supply publishable Tieta.ai action, method/tool, result or scope, and confidentiality limits]

- `index.html:208` — [DECISÃO: fornecer ação, método/ferramenta, resultado ou escopo publicável e limites de confidencialidade da Tieta.ai]

- `index.html:248` — [DECISÃO: confirm current facial pipeline and embedding dimension; values below are existing unconfirmed records]

- `index.html:248` — [DECISÃO: confirmar pipeline facial atual e dimensão do embedding; os valores abaixo são registros existentes não confirmados]

- `projetos/face-clock-evoluir/index.html:122` — [DECISÃO: confirm automated test count and count date (DD/MM/YYYY)]

- `projetos/face-clock-evoluir/index.html:122` — [DECISÃO: confirmar número de testes automatizados e data da contagem (DD/MM/AAAA)]

- `projetos/face-clock-evoluir/index.html:124` — [DECISÃO: confirm current facial pipeline and embedding dimension; values below are existing unconfirmed records]

- `projetos/face-clock-evoluir/index.html:124` — [DECISÃO: confirmar pipeline facial atual e dimensão do embedding; os valores abaixo são registros existentes não confirmados]

- `projetos/face-clock-evoluir/tecnico.html:93` — [DECISÃO: confirm current facial pipeline and embedding dimension; values below are existing unconfirmed records]

- `projetos/face-clock-evoluir/tecnico.html:93` — [DECISÃO: confirmar pipeline facial atual e dimensão do embedding; os valores abaixo são registros existentes não confirmados]

- `projetos/face-clock-evoluir/tecnico.html:228` — [DECISÃO: supply rows for the other two classifiers or confirm correction of the text about three classifiers]

- `projetos/face-clock-evoluir/tecnico.html:228` — [DECISÃO: fornecer as linhas dos outros dois classificadores ou confirmar a correção do texto sobre três classificadores]

- `projetos/face-clock-evoluir/tecnico.html:258` — [DECISÃO: fornecer o resultado correto da normalização EXIF]

- `projetos/face-clock-evoluir/tecnico.html:404` — [DECISÃO: explain dataset composition and the difference between 297/64/64 and 406 training images in 5-fold]

- `projetos/face-clock-evoluir/tecnico.html:404` — [DECISÃO: explicar a composição e a diferença entre 297/64/64 e 406 imagens de treino no 5-fold]

- `projetos/face-clock-evoluir/tecnico.html:409` — [DECISÃO: which security details has the client authorized for disclosure?]

- `projetos/face-clock-evoluir/tecnico.html:409` — [DECISÃO: quais itens de segurança o cliente autorizou divulgar?]

- `script.js:107` — [DECISÃO: supply the correct result of EXIF orientation normalization]

Perguntas exatas correspondentes aos marcadores (PT/EN têm o mesmo significado):

- `projetos/face-clock-evoluir/index.html:122`: Qual é o número real de testes automatizados e a data da contagem (DD/MM/AAAA)?
- `index.html:248`, `projetos/face-clock-evoluir/index.html:124`, `projetos/face-clock-evoluir/tecnico.html:93`: Qual é o pipeline facial atualmente em uso e qual é a dimensão do embedding?
- `projetos/face-clock-evoluir/tecnico.html:404`: Qual é a composição dos conjuntos 297/64/64 e das 406 imagens de treino do 5-fold, e por que diferem?
- `projetos/face-clock-evoluir/tecnico.html:228`: Quais são as linhas dos outros dois classificadores sobre embeddings, ou qual correção deve substituir o texto sobre três classificadores?
- `projetos/face-clock-evoluir/tecnico.html:409`: Quais itens de segurança o cliente autorizou divulgar?
- `projetos/face-clock-evoluir/tecnico.html:258` e `script.js:107`: Qual é o texto correto sobre o resultado da normalização EXIF?
- `index.html:188` e `index.html:208`: Para cada vínculo Tieta.ai, qual ação, método ou ferramenta e resultado ou escopo podem ser publicados, e o que é confidencial?

# Removido em P3

Os textos PT/EN abaixo podem ser recuperados no diff do commit P3 (`git show b6ed239`).

```text
JWT com claims tipadas:</strong> o token assinado carrega identidade, perfil de acesso, modalidade de trabalho e expiração, sem confiar em um <code>user_id</code> enviado pelo cliente.
EN: JWT with typed claims:</strong> the signed token carries identity, access role, work mode, and expiration without trusting a client-supplied <code>user_id</code>.
Totem provisionado:</strong> cada dispositivo usa API key obtida por ativação com PIN e proteção contra força bruta; a chave não é incorporada ao HTML público.
EN: Provisioned kiosk:</strong> each device uses an API key obtained through PIN activation and brute-force protection; the key is not embedded in public HTML.
Implantação restrita:</strong> backend exposto apenas localmente, HTTPS por túnel, migrações versionadas e volumes persistentes.
EN: Restricted deployment:</strong> locally exposed backend, HTTPS tunnel, versioned migrations, and persistent volumes.
Logout persistente:</strong> tokens revogados ficam no PostgreSQL, permanecendo inválidos após reinícios e entre múltiplos processos da aplicação.
EN: Persistent logout:</strong> revoked tokens are stored in PostgreSQL, remaining invalid across restarts and multiple application processes.
Senhas com bcrypt:</strong> hashes são produzidos pelo Passlib com custo computacional deliberado; a senha original nunca é armazenada ou recuperada.
EN: Passwords with bcrypt:</strong> hashes are produced through Passlib with deliberate computational cost; the original password is never stored or recovered.
Biometria protegida:</strong> múltiplos frames, vivacidade, impressão SHA-256 anti-replay e controles técnicos para dados biométricos e médicos; a avaliação jurídica de conformidade é externa ao projeto.
EN: Protected biometrics:</strong> multiple frames, liveness, a SHA-256 anti-replay fingerprint, and technical controls for biometric and medical data; legal compliance assessment is outside the scope of this project.
```

Também foi generalizado o fluxo JWT/Bearer/claims para credencial validada e acesso autorizado. Nenhum item de divulgação foi confirmado.

# Verificação

P1 permanece pendente: a busca abaixo mostra registros existentes em PT/EN, não uma unificação confirmada. 142 e 574 também aparecem em coordenadas SVG, sem representar contagens de testes.

```text
$ python3 /tmp/verify_portfolio.py
Links locais: 133 referências; 0 quebradas.


Metadados: 8 páginas × 4 campos; 0 divergências.


$ rg -n 142|574|InsightFace|YuNet|SFace|128|512|297|406 index.html projetos/face-clock-evoluir/index.html projetos/face-clock-evoluir/tecnico.html script.js
script.js:94:      ["#atestado-dados", "Separate service with selective fine-tuning. Versioned, stratified split generated with a fixed seed: 297 training, 64 validation, and 64 test documents. The test set was excluded from early stopping and hyperparameter selection."],
script.js:123:      ["#congelamento-contexto", "With ImageNet weights, I compared head only, head + last block, and head + last two blocks. Protocol: stratified 5-fold on 406 training images, up to 30 epochs, patience 7, the same seed and class balancing."],
index.html:249:    <p  data-en="OpenCV, YuNet, SFace, ONNX Runtime, OCR, embeddings">OpenCV, YuNet, SFace, ONNX Runtime, OCR, embeddings</p>
projetos/face-clock-evoluir/tecnico.html:94:<p class="interpretation" data-en="This delivery uses YuNet + SFace (128 dimensions). Public documentation still describes InsightFace (512 dimensions) and uses production terminology for the architecture; the status reported here is final acceptance testing. Delivery code and detailed evidence remain private.">Esta entrega usa YuNet + SFace (128 dimensões). A documentação pública ainda descreve InsightFace (512 dimensões) e usa o termo produção para a arquitetura; o status relatado aqui é homologação final. Código e evidências detalhadas da entrega permanecem privados.</p></div></section>
projetos/face-clock-evoluir/tecnico.html:123:                    <tr id="reconhecimento-modelo" class="case-table-highlight" data-en="&lt;th scope=&quot;row&quot;&gt;Replace the model?&lt;/th&gt;&lt;td&gt;Historical InsightFace: 512 dimensions&lt;/td&gt;&lt;td&gt;YuNet + SFace: 128 dimensions; observed FAR=0 at the comparable point and 32× less CPU&lt;/td&gt;&lt;td&gt;Less CPU is better for the target server. Sample FAR=0 does not prove zero risk; different models and thresholds require recalibration.&lt;/td&gt;"><th scope="row">Trocar o modelo?</th><td>InsightFace histórico: 512 dimensões</td><td>YuNet + SFace: 128 dimensões; FAR=0 observado no ponto comparável e 32× menos CPU</td><td>Menos CPU é melhor para o servidor-alvo. FAR=0 na amostra não prova risco zero; modelos e limiares diferentes exigem recalibração.</td></tr>
projetos/face-clock-evoluir/tecnico.html:171:              Serviço próprio com fine-tuning seletivo. Partição estratificada, versionada e gerada com semente fixa: 297 documentos de treino, 64 de validação e 64 de teste. O teste não participou do early stopping nem da seleção de hiperparâmetros.
projetos/face-clock-evoluir/tecnico.html:329:              Com pesos ImageNet, comparei cabeça, cabeça + último bloco e cabeça + dois últimos blocos. Protocolo: 5-fold estratificado em 406 imagens de treino, até 30 épocas, paciência 7, mesma semente e balanceamento de classes.
projetos/face-clock-evoluir/tecnico.html:360:                  <path class="fc-bar-muted" d="M142.0,294.0 L142.0,122.5 Q142.0,118.5 146.0,118.5 L166.0,118.5 Q170.0,118.5 170.0,122.5 L170.0,294.0 Z" />
projetos/face-clock-evoluir/tecnico.html:361:                  <path class="fc-whisker-halo" d="M156.0,108.2 L156.0,128.8 M149.0,108.2 L163.0,108.2 M149.0,128.8 L163.0,128.8" />
projetos/face-clock-evoluir/tecnico.html:362:                  <path class="fc-whisker" d="M156.0,108.2 L156.0,128.8 M149.0,108.2 L163.0,108.2 M149.0,128.8 L163.0,128.8" />
projetos/face-clock-evoluir/tecnico.html:378:                  <path class="fc-bar-good" d="M574.0,294.0 L574.0,77.3 Q574.0,73.3 578.0,73.3 L598.0,73.3 Q602.0,73.3 602.0,77.3 L602.0,294.0 Z" />
projetos/face-clock-evoluir/tecnico.html:404:<p data-en="[DECISÃO: explain dataset composition and the difference between 297/64/64 and 406 training images in 5-fold].">[DECISÃO: explicar a composição e a diferença entre 297/64/64 e 406 imagens de treino no 5-fold].</p>
projetos/face-clock-evoluir/tecnico.html:405:            <p id="congelamento-conclusao" data-en="Two unfrozen blocks: 84.2% ± 1.7, versus 67.0% ± 3.9 for the head alone and 74.9% ± 6.7 for one block. Higher mean and lower fold dispersion favor configuration C in this protocol; they do not prove configuration A lacks capacity. This study uses 406 training images and a historical 40-image test: it is not the 297/64/64 final benchmark split.">Dois blocos descongelados: 84,2% ± 1,7, contra 67,0% ± 3,9 só com a cabeça e 74,9% ± 6,7 com um bloco. Melhor média e menor dispersão entre dobras favorecem a configuração C neste protocolo; não provam falta de capacidade da configuração A. Este estudo usa 406 imagens de treino e teste histórico de 40: não é o split 297/64/64 do benchmark final.</p>
projetos/face-clock-evoluir/tecnico.html:457:              <p data-en="&lt;strong&gt;The recorded accuracies were not comparable: each training run used a different split (424/44 versus 297/64).&lt;/strong&gt;"><strong>As acurácias registradas eram incomparáveis entre si: cada treino usou um split diferente (424/44 contra 297/64).</strong></p>
projetos/face-clock-evoluir/index.html:123:    <p  data-en="574 automated tests in the delivery record verify behaviors; the count does not establish full coverage. Controlled benchmarks are not measured production impact.">574 testes automatizados no registro da entrega verificam comportamentos; a contagem não demonstra cobertura completa. Os benchmarks são controlados e não equivalem a impacto medido em produção.</p>
projetos/face-clock-evoluir/index.html:125:    <p  data-en="The public repository contains documentation, without client code, tests, or data. It also describes the historical InsightFace architecture (512 dimensions); the package reported here uses YuNet + SFace (128 dimensions). These are different versions.">O repositório público contém documentação, sem código, testes ou dados do cliente. Ele descreve também a arquitetura histórica com InsightFace (512 dimensões); o pacote aqui relatado usa YuNet + SFace (128 dimensões). São versões diferentes.</p>
Código de saída: 0

$ rg -n isrreal.github.io --glob !.git/** --glob !RELATORIO-CONSISTENCIA.md .
(sem ocorrências/saída)
Código de saída: 1

$ python3 scripts/version_script.py --check
JavaScript 7e8bad928e1e: 8 páginas verificadas
Código de saída: 0

$ git diff --check
(sem ocorrências/saída)
Código de saída: 0
```

Todos os marcadores presentes nos HTML e em script.js estão registrados acima com arquivo e linha. Os marcadores em inglês são traduções das perguntas em português. Não há métricas novas em P7 nem frase estatística em P9.

# Observações fora de escopo

- Não existe página de experiência separada; ambas as entradas Tieta.ai estão na home.
- A frase EXIF encontrada já estava completa; a confirmação do resultado ainda falta.
- A home e o estudo de caso não contêm a expressão cinco abordagens nesta versão.
- Confirmação visual em navegador não realizada; a verificação de P8 foi estática.

Verificação adicional: `node --check script.js` não executou; saída `/bin/bash: node: command not found` (código 127).
