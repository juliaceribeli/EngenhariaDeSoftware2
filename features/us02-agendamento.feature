# language: pt
Funcionalidade: Agendar disparo
  Como gestora
  Quero agendar o envio de uma edição para um horário futuro
  Para atingir o público no horário de maior engajamento sem intervenção manual

  Contexto:
    Dado que estou autenticada como gestora
    E que existe a edição "Novidades de Maio" aprovada

  @limite
  Esquema do Cenário: Antecedência mínima para agendar
    Dado que o segmento "Geral" tem 500 assinantes
    Quando agendo o envio para daqui a <minutos> minutos
    Então devo ver a mensagem "<mensagem>"

    Exemplos:
      | minutos | mensagem                               |
      | 16      | Envio agendado com sucesso             |
      | 15      | Envio agendado com sucesso             |
      | 14      | O envio precisa de ao menos 15 minutos |

  @excecao
  Cenário: Bloqueio por segmento vazio
    Dado que o segmento "Inativos" tem 0 assinantes
    Quando agendo o envio para daqui a 30 minutos
    Então devo ver a mensagem "Segmento sem assinantes bloqueia o agendamento"