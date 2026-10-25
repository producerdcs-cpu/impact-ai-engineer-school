# Impact AI Engineer School · Trilha MetaRAG

Landing page completa — **13 módulos**, **13 certificados** e diploma global em Engenharia de IA GenAI & Sistemas Autônomos Controlados.

**Brand:** Dcs Producer ® Creative Studio Corporation  
**Coordenador:** Dinoel Soares (Dcs Producer®)  
**Portfólio:** [Core Hub AEGIS](https://core-hub-aegis.vercel.app/)

## Evidence Pack (público)

Artefatos sanitizados para auditoria externa (ADR fail-closed, diagrama, post LinkedIn):

→ **[case-publico/EVIDENCE-PACK.md](case-publico/EVIDENCE-PACK.md)**  
→ Case: [case-publico/](case-publico/)  
→ LinkedIn: [https://lnkd.in/dzzimXRB](https://www.linkedin.com/mwlite/profile/in/dcs-producer-78b075415/recent-activity)

## Estrutura do repositório

```
index.html          → shell (header, footer, loader)
styles.css          → estilos Crystalline Logic
modules-data.js     → dados dos 13 módulos
app.js              → renderização + interações
partials/
  part-a.html       → Hero, Curriculum, Portfolio, Capstone
  part-b1.html      → Testimonials, Pricing, Ciclo, Grade
  part-b2.html      → Mentorias, Coordenador, WhatsApp
case-publico/       → ADR + Evidence Pack (público)
```

O `index.html` carrega as partials via `fetch` e depois inicializa o `app.js`.

## Funcionalidades

- Mapa interativo de 13 nós
- Grade por blocos R1–R6
- 13 projetos reais
- Preços (3 stacks + pacote R$ 8.200)
- Depoimentos, Ciclo, Mentorias
- Perfil do Coordenador + Nexus RAG AI
- 8+ CTAs WhatsApp → **(67) 98121-0273**
- Botão flutuante WhatsApp

## Como visualizar

**Importante:** precisa de servidor HTTP (fetch das partials não funciona em `file://`).

```bash
npx serve .
# ou
python -m http.server 8080
```

## GitHub Pages

1. Settings → Pages  
2. Source: **Deploy from a branch**  
3. Branch: **main** · folder: **/ (root)**  
4. Save  

URL: `https://producerdcs-cpu.github.io/impact-ai-engineer-school/`

## Contato

WhatsApp: **(67) 98121-0273**

---

© 2026 Impact AI Engineer School · Brand by Dcs Producer ® Creative Studio Corporation
