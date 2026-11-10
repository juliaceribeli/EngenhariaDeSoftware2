# language: pt
Funcionalidade: Segmentar disparo
  Como gestora
  Quero selecionar os segmentos que receberão a edição
  Para que cada assinante receba apenas o conteúdo do seu interesse

  Contexto:
    Dado que estou autenticada como gestora
    E que estou preparando o disparo da edição "Promoção"

  @feliz
  Cenário: Segmentação válida com grupos dentro do limite
    Quando seleciono 3 segmentos para o disparo
    Então o sistema deve permitir o agendamento
    E devo ver a mensagem "Segmentos selecionados com sucesso"

  @excecao
  Cenário: Tentativa de selecionar mais de 5 segmentos
    Quando seleciono 6 segmentos para o disparo
    Então o sistema deve bloquear a seleção
    E devo ver a mensagem "Limite máximo de 5 segmentos atingido"