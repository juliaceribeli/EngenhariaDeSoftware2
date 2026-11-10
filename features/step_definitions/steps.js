const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

// contexto
Given('que estou autenticada como gestora', function () { this.autenticar('Gestora'); });
Given('que estou autenticada como {string}', function (nome) { this.autenticar(nome); });
Then('devo ver a mensagem {string}', function (msg) { assert.equal(this.resultadoMensagem, msg); });

// US01 -> aprovação
Given('que existe a edição {string} no status rascunho', function (titulo) { this.criarEdicao(titulo, 'Rascunho'); });
Given('que a autora da edição é a {string}', function (autor) { this.edicao.autor = autor; });
When('aprovo a edição', function () { this.aprovarEdicao(); });
When('tento aprovar a edição', function () { this.aprovarEdicao(); });
Then('o status da edição deve mudar para {string}', function (status) { assert.equal(this.edicao.status, status); });
Then('o status da edição deve continuar como {string}', function (status) { assert.equal(this.edicao.status, status); });

// US02 -> agendamento
Given('que existe a edição {string} aprovada', function (titulo) { this.criarEdicao(titulo, 'Aprovada'); });
Given('que o segmento {string} tem {int} assinantes', function (seg, qtd) { this.definirSegmento(seg, qtd); });
When('agendo o envio para daqui a {int} minutos', function (min) {
  const segmento = Object.keys(this.segmentos)[0];
  this.agendarEnvio(min, segmento);
});

// US03 -> segmentação
Given('que estou preparando o disparo da edição {string}', function (titulo) { this.criarEdicao(titulo, 'Aprovada'); });
When('seleciono {int} segmentos para o disparo', function (qtd) { this.selecionarSegmentos(qtd); });
Then('o sistema deve permitir o agendamento', function () { assert.equal(this.edicao.statusBloqueio, false); });
Then('o sistema deve bloquear a seleção', function () { assert.equal(this.edicao.statusBloqueio, true); });

// US04 -> notificação
Given('que sou o assinante {string}', function (nome) { this.assinante = nome; });
Given('que o relógio do sistema marca {string}', function (hora) { this.horaAtual = hora; });
Given('que já recebi {int} notificações hoje', function (qtd) { this.notificacoesRecebidasHoje = qtd; });
When('uma nova edição é disparada', function () { this.dispararNotificacao(); });
Then('devo receber a notificação push imediatamente', function () { 
  assert.equal(this.statusNotificacao, "Enviada"); 
  assert.equal(this.horaProgramada, this.horaAtual);
});
Then('a notificação deve ser retida', function () { assert.equal(this.statusNotificacao, "Retida"); });
Then('programada para envio às {string}', function (hora) { assert.equal(this.horaProgramada, hora); });
Then('o status da entrega da notificação deve ser {string}', function (status) { assert.equal(this.statusNotificacao, status); });