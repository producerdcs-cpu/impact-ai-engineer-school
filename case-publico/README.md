# AEGIS fail-closed + Nexus RAG

**Case sanitizado** de decisão de arquitetura: recuperação RAG tratada como **untrusted** e gateway **fail-closed** em sistema AI-first.

| | |
|---|---|
| **Autor** | Dinoel Soares · Dcs Producer® |
| **Perfil** | PE-DINOEL-SOARES-001 · Coordenador da Academia |
| **Contexto** | MetaRAG 13/13 · Impact AI Engineer School |
| **Portfólio** | [Core Hub AEGIS](https://core-hub-aegis.vercel.app/) |

## Documentos

- [ADR-001 — Retrieval untrusted e fail-closed](docs/ADR-001-fail-closed.md)
- [Diagrama Mermaid](docs/diagram.mmd)
- [Policy snippet (pseudocódigo)](docs/policy-snippet.md)
- [Post LinkedIn](POST-LINKEDIN.md)

## Identidade visual (Crystalline Logic)

Assets em `docs/assets/` (upload mobile):

| Arquivo | Uso sugerido |
|---------|----------------|
| [image (1).jpg](docs/assets/image%20(1).jpg) | Visual 1 |
| [image (2).jpg](docs/assets/image%20(2).jpg) | Visual 2 — bom para LinkedIn |
| [image (3).jpg](docs/assets/image%20(3).jpg) | Visual 3 |
| [image (4).jpg](docs/assets/image%20(4).jpg) | Visual 4 |

> Este repositório **não** contém o motor AEGIS, secrets nem evidências brutas.

## Princípios

1. Status só vale com artefato
2. Agentes com budget e stop conditions
3. Retrieval tratado como untrusted
4. Least privilege em tools
5. Humano no loop para ações irreversíveis

© 2026 Dcs Producer ® Creative Studio Corporation
