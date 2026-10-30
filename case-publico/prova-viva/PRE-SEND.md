# dcs-pre-send-validator

Corrida aplicada ao pacote `case-publico/` em 2026-10-30, antes de publicar o veredito e o perfil v0.6.0.

Regra mãe: se a checagem falha, o texto não sai. Fail-closed. Sem exceção por “já está no JSON”.

| Id | Checagem | Resultado |
| --- | --- | --- |
| S1 | Sem token, chave, `.env`, connection string ou segredo | Passa nos markdown e JSON lidos |
| S2 | Sem dado pessoal além do nome público da marca | Passa |
| S3 | `CONCLUIDO` só se o caminho existe no tree, senão o rótulo é interno | Falha no perfil v0.5.1: `evidencias/modXX/` não está no tree. Corrigido na v0.6.0 |
| S4 | Pseudocódigo não é apresentado como motor de produção | Passa em `policy-snippet.md`. Mantido no veredito |
| S5 | Caminho ausente não vira prova pública | Passa depois da correção de S3 |
| S6 | Motor AEGIS, progress.json bruto e planilha integral ficam de fora | Passa. Este commit não os adiciona |
| S7 | Link de repositório citado resolve para um repo real | Passa para `impact-ai-engineer-school` e `dcsproducer-aegis-hub-core` |
| S8 | Declaração de mTLS, AES-256 ou rubrica 100 sem arquivo de configuração | Ressalva. Permanecem como declaração, não como prova |

**Saída:** liberado com ressalva. O que muda no público é o rótulo, não a exposição de IP.
