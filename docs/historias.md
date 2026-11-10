## US01 Aprovar edição
**Como** revisora
**Quero** conferir e aprovar o conteúdo escrito pelos redatores
**Para** liberar o envio sem me tornar um gargalo na operação
**Critérios de aceitação:**
* O autor não pode aprovar a própria edição.
* Aprovação muda o status da edição para "Aprovada".
* Reprovação exige um comentário obrigatório.
* Reprovação devolve a edição para o status de rascunho.
**Regras cobertas:** RN02
**Prioridade:** Alta - Sem aprovação, nenhum e-mail sai do sistema.
**Cenários:** features/us01-aprovacao.feature

## US02 Agendar disparo
**Como** gestora
**Quero** agendar o envio de uma edição para um horário futuro
**Para** atingir o público no horário de maior engajamento sem intervenção manual
**Critérios de aceitação:**
* O agendamento exige no mínimo 15 minutos de antecedência.
* Cancelamentos só são permitidos com até 5 minutos de antecedência.
* O fuso horário respeitado é America/Sao_Paulo.
**Regras cobertas:** RN03
**Prioridade:** Alta - Garante a automação do fluxo de envios.
**Cenários:** features/us02-agendamento.feature

## US03 Segmentar disparo
**Como** gestora
**Quero** selecionar os segmentos que receberão a edição
**Para** que cada assinante receba apenas o conteúdo do seu interesse
**Critérios de aceitação:**
* O limite máximo é de 5 segmentos por edição.
* Segmentos com zero assinantes bloqueiam o agendamento.
* Assinantes presentes em mais de um segmento recebem apenas um e-mail.
**Regras cobertas:** RN04
**Prioridade:** Média - Evita spam e otimiza a entrega.
**Cenários:** features/us03-segmentacao.feature

## US04 Notificar por push
**Como** assinante
**Quero** receber notificações push das edições
**Para** ser avisado rapidamente sem lotar minha caixa de entrada
**Critérios de aceitação:**
* O limite é de 3 notificações por dia por assinante.
* Notificações geradas entre 22h e 8h entram em modo de silêncio.
* Notificações retidas no modo de silêncio são disparadas às 8h.
**Regras cobertas:** RN08
**Prioridade:** Média - Respeito ao usuário (evita notificações de madrugada).
**Cenários:** features/us04-notificacao.feature