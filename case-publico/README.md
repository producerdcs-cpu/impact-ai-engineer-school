# AEGIS fail-closed + Nexus RAG

**Case sanitizado** de decisão de arquitetura: recuperação RAG tratada como **untrusted** e gateway **fail-closed** em sistema AI-first.

| | |
|---|---|
| **Autor** | Dinoel Soares · Dcs Producer® |
| **Perfil** | PE-DINOEL-SOARES-001 · Coordenador da Academia |
| **Contexto** | MetaRAG 13/13 interno · Impact AI Engineer School |
| **Portfólio** | [Core Hub AEGIS](https://core-hub-aegis.vercel.app/) |
| **Prova viva** | [Veredito do Gate · 2026-10-30](prova-viva/VEREDITO.md) |

## Documentos

- [ADR-001 — Retrieval untrusted e fail-closed](docs/ADR-001-fail-closed.md)
- [Diagrama Mermaid](docs/diagram.mmd)
- [Policy snippet (pseudocódigo)](docs/policy-snippet.md)
- [Post LinkedIn](POST-LINKEDIN.md)
- [Veredito — o que é prova e o que segue interno](prova-viva/VEREDITO.md)
- [Checklist pré-envio](prova-viva/PRE-SEND.md)

## Prova viva

Corrida de 2026-10-30 com o Gate AEGIS e a skill dcs-pre-send-validator.

O ADR, o diagrama e o policy snippet provam a decisão de arquitetura. O dossiê 13/13 não foi promovido: `evidencias/modXX/` não está neste tree. O perfil calibrado é o `profile-executive.json` v0.6.0.

## Identidade visual (Crystalline Logic)

Assets em `docs/assets/` (identificados visualmente):

| Arquivo atual | Nome canônico | Uso |
|---------------|---------------|-----|
| [image (1).jpg](docs/assets/image%20(1).jpg) | **cristal-estrela** | Hero / arquitetura multi-camada |
| [image (2).jpg](docs/assets/image%20(2).jpg) | **cristal-rede-agentes** | **LinkedIn** · multi-agente + rede |
| [image (3).jpg](docs/assets/image%20(3).jpg) | **cristal-piramide-stack** | Stack / fundações → apex |
| [image (4).jpg](docs/assets/image%20(4).jpg) | **cristal-tetraedro** | Core / unidade de confiança |

**LinkedIn:** use **image (2).jpg** (rede de agentes).

> O arquivo vazio `cristal-rede-agentes.jpg` foi removido. Renomear os `image (N).jpg` no GitHub é opcional (estética).

> Este repositório **não** contém o motor AEGIS, secrets nem evidências brutas.

## Princípios

1. Status só vale com artefato
2. Agentes com budget e stop conditions
3. Retrieval tratado como untrusted
4. Least privilege em tools
5. Humano no loop para ações irreversíveis

© 2026 Dcs Producer ® Creative Studio Corporation
