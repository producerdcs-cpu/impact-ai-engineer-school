# Prova viva — Gate AEGIS

**Corrida:** 2026-10-30  
**Perfil:** PE-DINOEL-SOARES-001 · Dinoel Soares · Dcs Producer®  
**Skill:** dcs-pre-send-validator  
**Alvo lido:** `case-publico/` no commit da branch `main` antes desta corrida  
**Veredito:** liberado com ressalva. O case de arquitetura é prova pública. O dossiê 13/13 não é.

Status só vale com artefato que outra pessoa abre. Caminho citado e ausente no tree continua interno.

## O que esta corrida abriu

| Artefato | Está no tree | Prova |
| --- | --- | --- |
| `docs/ADR-001-fail-closed.md` | sim | Decisão: retrieval untrusted; falha de política não executa a ação |
| `docs/diagram.mmd` | sim | Fluxo gateway, budget, quarentena, humano no loop, Nexus |
| `docs/policy-snippet.md` | sim | Pseudocódigo. O próprio arquivo diz que não é o motor |
| `EVIDENCE-PACK.md` | sim | Índice sanitizado |
| `EVIDENCE-PACK-HACKATHON-2026.md` | sim | Relato de submission. O carimbo “aprovado” é o texto do pack, não uma reauditoria de secret scanning nesta corrida |
| `aegis-os-manifest.json` | sim | Manifesto. Não é o runtime |
| `profile-executive.json` | sim | Dossiê. A v0.6.0 separa nível interno de nível público |
| `docs/assets/image (1–4).jpg` | sim | Marca. Não é evidência técnica |
| `producerdcs-cpu/dcsproducer-aegis-hub-core` | repositório público existe | Existência conferida. O código não foi lido arquivo a arquivo |

## O que foi citado e não está aqui

| Caminho citado no dossiê | No tree público | Gate |
| --- | --- | --- |
| `evidencias/mod01/` … `evidencias/mod13/` | não | interno |
| `artifacts/mcp-server/` | não | interno |
| `artifacts/dcsproducer-metarag-hub/` | não | interno |
| `dcs-learning-progress.json` | não | interno |
| Motor AEGIS, secrets, Lista_Projetos integral | não, de propósito | fora do pacote |

Rubrica 100, mTLS, TLS 1.3 e AES-256 aparecem no JSON anterior como declaração. Nenhum arquivo de configuração nesta pasta os prova. Ficam declarados, não evidenciados.

## Nível que o Gate aceita

| Código | Pedido interno | Nível público | Por quê |
| --- | --- | --- | --- |
| ARCH-AI-001 | Avançado | Avançado no recorte da decisão | ADR + diagrama |
| GENAI-METARAG-001 | Avançado | Avançado no recorte RAG fail-closed | ADR + policy. O 13/13 não entra |
| SEC-AEGIS-001 | Intermediário-Avançado | Intermediário | Policy é ilustrativa. O motor não está público |
| ENG-SW-001 | Avançado | Intermediário | Há case publicado. Não há métrica de produção |
| PED-GOV-001 | Avançado | A declarar | Cargo sem rubrica de aula |
| IOT-SAFE-001 | Intermediário | A declarar | Só “formação + especialidade” |

## KR de 30 dias

O KR1 do dossiê pedia um case AEGIS/Nexus com ADR, diagrama e trecho fail-closed. Os três arquivos existem. KR1 cumprido.

Continuam abertos: evidência pública de produção com métrica, cloud, LLMOps/AgentOps, inglês, certificação cloud ou equivalente documentado.

## O que esta corrida não fez

Não releu secret scanning dos repositórios privados. Não executou o motor. Não promoveu o pack do hackathon a auditoria nova. Não publicou evidência bruta.
