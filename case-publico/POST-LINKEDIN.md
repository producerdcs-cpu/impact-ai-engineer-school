# Post LinkedIn — rascunho

**Imagem:** assets/cristal-rede-agentes.jpg (ou cristal-estrela.jpg)

---

Arquitetura AI-first não é só “chamar um LLM”.

No desenho AEGIS + Nexus, a recuperação RAG é tratada como **untrusted** — e o gateway é **fail-closed**.

Se a policy, o budget ou a validação do chunk falhar, a ação **não** segue. Em ações irreversíveis, entra humano no loop.

Case sanitizado (ADR + diagrama + política):

🔗 [colar URL após push]

Princípios:
• status só vale com artefato
• agentes com budget e circuit breaker
• least privilege em tools
• retrieval untrusted

Contexto: MetaRAG · Impact AI Engineer School · coordenação acadêmica.

#AIArchitecture #RAG #AgenticAI #AISecurity #MetaRAG #DcsProducer
