const { setWorldConstructor } = require('@cucumber/cucumber');

class MundoDoNewsFlow {
  constructor() {
    this.usuarioLogado = null;
    this.edicao = { titulo: '', status: '', autor: '' };
    this.segmentos = {};
    this.resultadoMensagem = '';
    
    this.assinante = '';
    this.horaAtual = '12:00';
    this.notificacoesRecebidasHoje = 0;
    this.statusNotificacao = '';
    this.horaProgramada = '';
  }

  autenticar(nome) { this.usuarioLogado = nome; }
  criarEdicao(titulo, status, autor = 'Sistema') { this.edicao = { titulo, status, autor }; }
  definirSegmento(nome, assinantes) { this.segmentos[nome] = assinantes; }

  aprovarEdicao() {
    if (this.usuarioLogado === this.edicao.autor) {
      this.resultadoMensagem = "O autor não pode aprovar a própria edição";
    } else {
      this.edicao.status = "Aprovada";
      this.resultadoMensagem = "Edição aprovada";
    }
  }

  agendarEnvio(minutos, segmento) {
    if (this.segmentos[segmento] === 0) {
      this.resultadoMensagem = "Segmento sem assinantes bloqueia o agendamento";
    } else if (minutos < 15) {
      this.resultadoMensagem = "O envio precisa de ao menos 15 minutos";
    } else {
      this.resultadoMensagem = "Envio agendado com sucesso";
    }
  }

  selecionarSegmentos(quantidade) {
    if (quantidade > 5) {
      this.resultadoMensagem = "Limite máximo de 5 segmentos atingido";
      this.edicao.statusBloqueio = true;
    } else {
      this.resultadoMensagem = "Segmentos selecionados com sucesso";
      this.edicao.statusBloqueio = false;
    }
  }

  dispararNotificacao() {
    if (this.notificacoesRecebidasHoje >= 3) {
      this.statusNotificacao = "Bloqueada";
      return;
    }

    const hora = parseInt(this.horaAtual.split(':')[0]);
    if (hora >= 22 || hora < 8) {
      this.statusNotificacao = "Retida";
      this.horaProgramada = "08:00";
    } else {
      this.statusNotificacao = "Enviada";
      this.horaProgramada = this.horaAtual;
    }
  }
}

setWorldConstructor(MundoDoNewsFlow);