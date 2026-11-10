# language: pt
Funcionalidade: Notificar por push
  Como assinante
  Quero receber notificações push das edições
  Para ser avisado rapidamente sem lotar minha caixa de entrada

  Contexto:
    Dado que sou o assinante "Carlos"

  @feliz
  Cenário: Notificação enviada fora da janela de silêncio
    Dado que o relógio do sistema marca "14:00"
    Quando uma nova edição é disparada
    Então devo receber a notificação push imediatamente

  @excecao
  Cenário: Notificação gerada na janela de silêncio
    Dado que o relógio do sistema marca "23:00"
    Quando uma nova edição é disparada
    Então a notificação deve ser retida
    E programada para envio às "08:00"

  @limite
  Esquema do Cenário: Limite diário de notificações por assinante
    Dado que já recebi <recebidas> notificações hoje
    Quando uma nova edição é disparada
    Então o status da entrega da notificação deve ser "<status>"

    Exemplos:
      | recebidas | status    |
      | 2         | Enviada   |
      | 3         | Bloqueada |
      | 4         | Bloqueada |