# ADR-001: Retrieval untrusted e fail-closed no gateway AEGIS/Nexus

**Status:** Aceito (interno) · Publicação sanitizada · 2026-10
**Autor:** Dinoel Soares · Dcs Producer®
**Relacionado:** MetaRAG M08 / M10 / M11 · Impact AI Engineer School

## Contexto

Sistemas RAG e agentes que consomem recuperação e tools externas enfrentam prompt injection via corpus, tool abuse e falha aberta.

No desenho **AEGIS + Nexus**, recuperação e tools são **untrusted** até validação.

## Decisão

1. **Retrieval = untrusted** — chunks em quarentena lógica; não viram system prompt.
2. **Fail-closed** — policy/budget/validação falhou → ação não executa.
3. **Least privilege em tools** — MCP/sandbox + allowlist; irreversível = humano no loop.
4. **Budget obrigatório** — teto de passos/tokens/tempo + circuit breaker.

## Consequências

**Positivas:** menos injection/tool abuse; alinhado M10 e Capstone; narrativa clara.

**Trade-offs:** mais rejeições; policy/logs mais complexos; fluxos com HITL mais lentos.

## Alternativas rejeitadas

- Fail-open só com log → não atende AEGIS
- Confiar só no ranking do retriever → retrieval continua untrusted
- Bloquear todo tool use → inviabiliza Nexus/MetaRAG
