# language: pt
Funcionalidade: Aprovar edição
  Como revisora
  Quero conferir e aprovar o conteúdo escrito pelos redatores
  Para liberar o envio sem me tornar um gargalo na operação

  Contexto:
    Dado que existe a edição "Atualização de Produto" no status rascunho
    E que a autora da edição é a "Maria"

  @feliz
  Cenário: Aprovação por um revisor diferente do autor
    Dado que estou autenticada como "Joao"
    Quando aprovo a edição
    Então o status da edição deve mudar para "Aprovada"
    E devo ver a mensagem "Edição aprovada"

  @excecao
  Cenário: Tentativa de aprovação pelo próprio autor
    Dado que estou autenticada como "Maria"
    Quando tento aprovar a edição
    Então o status da edição deve continuar como "Rascunho"
    E devo ver a mensagem "O autor não pode aprovar a própria edição"