# Post LinkedIn — pronto para publicar

**Imagem:** `case-publico/assets/cristal-rede-agentes.jpg` (após upload dos assets)
**Case:** https://github.com/producerdcs-cpu/impact-ai-engineer-school/tree/main/case-publico

---

## Texto (copiar)

Arquitetura AI-first não é só “chamar um LLM”.

No desenho AEGIS + Nexus, a recuperação RAG é tratada como **untrusted** — e o gateway é **fail-closed**.

Se a policy, o budget ou a validação do chunk falhar, a ação **não** segue. Em ações irreversíveis, entra humano no loop.

Case sanitizado (ADR + diagrama + política):

🔗 https://github.com/producerdcs-cpu/impact-ai-engineer-school/tree/main/case-publico

Princípios:
• status só vale com artefato
• agentes com budget e circuit breaker
• least privilege em tools
• retrieval untrusted

Contexto: MetaRAG · Impact AI Engineer School · coordenação acadêmica.

#AIArchitecture #RAG #AgenticAI #AISecurity #MetaRAG #DcsProducer

---

## Versão curta

Fail-closed > fail-open quando o que você recupera pode ser veneno.

Case: retrieval untrusted + gateway AEGIS + Nexus.

ADR + diagrama + policy → https://github.com/producerdcs-cpu/impact-ai-engineer-school/tree/main/case-publico

#RAG #AISecurity #DcsProducer
