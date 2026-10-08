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
