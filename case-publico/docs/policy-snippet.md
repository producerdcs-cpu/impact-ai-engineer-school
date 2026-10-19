# Policy snippet — fail-closed (ilustrativo)

> Pseudocódigo sanitizado. Não é o código de produção AEGIS.

```text
function handle_retrieval(chunks, agent_ctx):
  if not chunks:
    return FailClosed("empty_retrieval")

  for chunk in chunks:
    if looks_like_instruction(chunk) or violates_pii_policy(chunk):
      log_security_event("untrusted_chunk_rejected", chunk.id)
      return FailClosed("chunk_policy_violation")

  if agent_ctx.budget.exceeded():
    return FailClosed("budget_exceeded")

  if action_is_irreversible(agent_ctx.pending_action):
    return RequireHuman("irreversible_action")

  return Allow(quarantine_to_context(chunks))
```

## Princípios

1. Status só vale com artefato
2. Agentes com budget e stop conditions
3. Retrieval tratado como untrusted
4. Least privilege em tools
5. Humano no loop para ações irreversíveis
