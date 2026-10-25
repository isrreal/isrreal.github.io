# Auditoria factual das alterações

Data: 25/10/2026. Não publica resultados novos de experimentos. As fontes são o
repositório existente, a declaração do autor no pedido e o documento técnico da
Tieta indicado pelo autor. A consulta web ao domínio autorizado não retornou a
página neste ambiente; nenhum outro site pessoal foi utilizado como fonte.

## Mapa de origem e tratamento das afirmações

| Afirmação adicionada ou reorganizada | Origem verificável | Local / limite preservado |
| --- | --- | --- |
| Posicionamento Machine Learning Engineer / Applied ML | Objetivo expresso pelo autor | Headline de posicionamento, sem alterar cargos históricos ou afirmar senioridade |
| P&D multimodal educacional; representações; texto/imagem; integração experimental de LLMs | Pedido do autor e PDF técnico: cap. 1, 3–6 e 8 | Home e cinco CVs; somente abstrações profissionais |
| Busca por similaridade | Declaração do autor; PDF documenta similaridade em representações | Sem inferir FAISS ou arquitetura de retrieval a partir do PDF |
| Literatura, implementação experimental e avaliação quantitativa | Declaração do autor; PDF cap. 13 e apêndice A documenta infraestrutura | Sem ganho, métrica ou conclusão experimental específica |
| Contribuição colaborativa na Tieta | Pedido explicita colaboração; PDF não individualiza autoria | “Colaborei”, “participei”, “contribuí”; nenhum “liderei” |
| Dois cargos na Tieta, bolsa CNPq RHAE e período parcial da etapa anterior | CVs anteriores e home do checkout inicial | Datas preservadas; quatro bullets atribuídos à bolsa de 04/2025–06/2026, com cabeçalho separado para o cargo atual |
| Face Clock para instituição de ensino, 1:N, FastAPI, PostgreSQL/pgvector, CPU-only | Estudo de caso e página técnica existentes, `#problema`, `#reconhecimento`, `#entrega` | Hero, arquitetura HTML acessível e CVs |
| YuNet + SFace via OpenCV DNN; triagem separada ONNX Runtime + OCR | Estudo de caso `#como-funciona`; técnico `#isolamento`, `#entrega` | Diagrama separa reconhecimento e triagem documental |
| Ambiente de testes e candidata a piloto v1.3.0-rc.3 | Home, páginas Face Clock, CV anterior e `data/facts.yaml` | Sem alegar produção ou piloto já aprovado |
| Calibração institucional e aprovação operacional pendentes | Face Clock `#status` anterior | Repetido no hero, TL;DR e currículos |
| Desconhecidos aceitos de 45,4% a 0,2%, limiar 0,50 | Técnico `#reconhecimento-limiar` anterior | Teste controlado; não é taxa institucional nem garantia de segurança |
| Busca exata 0,076 ms/1.000 vetores; HNSW 0,04 ms, recall@1 0,915 | Técnico `#reconhecimento-faiss` anterior | Escala do ensaio explícita; não é projeção validada |
| Duas batidas causavam 6/6 falhas; serialização; regressão com oito threads | Técnico `#reconhecimento-concorrencia` anterior | Sem alegação de throughput operacional |
| p95 de 74 ms e 1,87 s com uma/vinte identificações | Técnico `#reconhecimento` anterior | CPU-only controlado; não comparado ao custo histórico da ablação |
| Classificação: F1 0,778, acurácia 0,875, split 297/64/64 | `data/facts.yaml`; técnico `#atestados` anterior | Teste de 64 documentos; diagnóstico histórico e auditoria de artefatos são outros experimentos |
| ONNX sem mudança de decisões; histórico de 8,1 GB a 433 MB | Técnico `#entrega` anterior | Ganhos de runtime, multi-stage, RAM, disco e download não somados nem confundidos |
| Checksums e vínculo checkpoint/ONNX | Técnico `#procedencia` anterior | Integridade de artefato; não atribuir a acurácia dessa auditoria ao benchmark híbrido |
| OCR 909 ms versus rede 14 ms; isolamento de serviço | Técnico `#isolamento` anterior | Custo naquele ambiente; sem promessa de capacidade em produção |
| Contraexemplo PLI; formulação corrigida/reduzida; GA/ACO e 362 grafos | TCC `tecnico.html#pli`, `#ga`, `#aco`, `#experimentos` e estudo de caso anteriores | Uma execução por instância; solver limitado no tempo nem sempre comprova ótimo |
| Auxílio: blocos, COPY, profiling e memória crescente | Estudo de caso e técnico `#memoria` anteriores | Em desenvolvimento; staging é próximo experimento, sem ganho validado |
| Formação 2021–19/08/2026; defesa 02/2025; contatos e inglês | CVs e README anteriores | Sem mudar graduação, período, localização ou nível de inglês |
| Competências Python/PyTorch/scikit-learn/FastAPI/Docker e ferramentas públicas | CVs anteriores, Face Clock e demais páginas existentes | PyTorch/FastAPI/Docker não vinculados à arquitetura privada da Tieta |

Versões PT/EN compartilham a base factual; diferença de headline/ordem não
constitui novo emprego nem experiência adicional. A quinta versão é um CV de
posicionamento Applied AI / Research Engineer, sem atribuir esse cargo à Tieta.

## Limites de confidencialidade

A auditoria privada detalhada e a minuta de autorização são
`docs/tieta-public-disclosure-review.md` e `docs/tieta-disclosure-request.md`.
Ambos estão ignorados pelo Git. `_config.yml` exclui `docs`, `data` e `scripts`
do site. Nenhum documento, código, prompt, output, dado ou configuração do PDF
interno foi adicionado aos assets públicos. Não se afirmou permissão jurídica.

## Validação

Os comandos e limites de execução estão documentados no README. O checker de
publicação verifica fronteiras editoriais, links de idioma, uma página por PDF,
ordem dos parágrafos extraídos e aliases antigos. Ele não substitui revisão
humana de NDA, autoria e currículo.

## Revisão substantiva da Tieta — 25/10/2026

A home do domínio autorizado e o PDF vinculado foram consultados para registrar
o antes real: correspondiam ao último commit local. A nova redação explicita
embeddings/busca vetorial, representações de texto/imagem, deep learning
multitarefa, LLMs/DSPy e avaliação por métricas e baselines. Os quatro bullets são
atribuídos ao cargo/bolsa de 04/2025–06/2026; o cargo atual tem cabeçalho separado.

Relatório de atividades §1–3 e documentação técnica cap. 3–8 sustentam os métodos
gerais de representação e modelagem; §3.5 da documentação sustenta DSPy; relatório
§3–5 e documentação §13.9 sustentam avaliação. Retrieval e literatura contam também
com declaração do autor. A autoria do relatório é conjunta. Não se inferiu autoria
exclusiva, ganho consolidado, operação em produção ou liberação contratual.

Nomes gerais de métodos e DSPy entram como descrição de contribuição, sem expor
configuração, topologia, dados, prompts, outputs, alvos internos ou resultados.
As cláusulas 4.1–4.2 do termo não foram tratadas como autorização. Nenhuma liberação
escrita foi apresentada. A revisão e o pedido de confirmação dos textos exatos
permanecem nos dois documentos privados ignorados pelo Git. Não se concluiu
juridicamente que um texto abstrato está liberado.

Nenhum estudo de caso, imagem, CSS, estrutura visual, cargo ou data foi alterado.
Apenas home/competências da Tieta, resumos/bullets/skills dos cinco CVs, versões
inglesas e os geradores/checks correspondentes foram atualizados. Não houve
commit, push, deploy ou envio de mensagem à empresa nesta revisão.
