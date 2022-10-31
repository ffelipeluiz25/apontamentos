export class Util {

  recuperaDiaSemana(data: string) {
    var day = new Date(data).getDay();
    var diaDaSemana = '';
    switch (day) {
      case 0:
        diaDaSemana = 'Domingo';
        break;
      case 1:
        diaDaSemana = 'Segunda-Feira';
        break;
      case 2:
        diaDaSemana = 'Terça-Feira';
        break;
      case 3:
        diaDaSemana = 'Quarta-Feira';
        break;
      case 4:
        diaDaSemana = 'Quinta-Feira';
        break;
      case 5:
        diaDaSemana = 'Sexta-Feira';
        break;
      case 6:
        diaDaSemana = 'Sabado';
        break;
    }
    return diaDaSemana;
  }

  recuperaResponsavel(responsavelParam: string) {
    var responsavel = '';
    switch (responsavelParam) {
      case "1":
        responsavel = 'luiz.felipe';
        break;
      case "2":
        responsavel = 'William Dias';
        break;
      case "3":
        responsavel = 'Vitor Tramontina';
        break;
      case "4":
        responsavel = 'Vinicius Bandeira';
        break;
      case "5":
        responsavel = 'Thiago';
        break;
      case "6":
        responsavel = 'Marcelo Rabelo Lopes';
        break;
      case "7":
        responsavel = 'Leticia Fraga';
        break;
      case "8":
        responsavel = 'joao.prata';
        break;
      case "9":
        responsavel = 'Giulia Delarissa';
        break;
      case "10":
        responsavel = 'Gabriel Ribeiro Guerra';
        break;
      case "11":
        responsavel = 'Andre Castro';
        break;
      case "12":
        responsavel = 'Luis Henrique Montoni';
        break;
      case "13":
        responsavel = 'Lucas Fernandes';
        break;
      case "14":
        responsavel = 'nelson mendez';
        break;
      case "15":
        responsavel = 'Polyanna Ribeiro';
        break;
      case "16":
        responsavel = 'livia.the';
        break;
      case "17":
        responsavel = 'Janine Carvalho';
        break;
      case "18":
        responsavel = 'Pedro Cezar';
        break;
      case "19":
        responsavel = 'Victor Domingues';
        break;
      case "20":
        responsavel = 'elzio.junior';
        break;
      case "21":
        responsavel = 'Tiago Oliveira';
        break;
      case "22":
        responsavel = 'Pedro Xavier';
        break;
      case "23":
        responsavel = 'Yuri Edmundo';
        break;
      case "24":
        responsavel = 'Carlos Henrique Marinho Peixoto';
        break;
      case "25":
        responsavel = 'Fernando Lucas Rodrigues Simões';
        break;
      case "26":
        responsavel = 'Leonardo Souza';
        break;
      case "27":
        responsavel = 'Paulo Itsuo Almeida Okino';
        break;
      case "28":
        responsavel = 'Amanda Silva';
        break;
      case "29":
        responsavel = 'Élida Beatriz Gonçalves';
        break;
      case "30":
        responsavel = 'Wilian Alves';
        break;
      case "31":
        responsavel = 'Dalicio Pereira de Novaes Junior';
        break;
      case "32":
        responsavel = 'Luana Assis';
        break;

    }

    return responsavel;

  }

  recuperaMesAtual() {
    var mesAtual = (new Date()).getMonth();
    mesAtual++;
    return mesAtual;
  }

  recuperaAnoAtual() {
    return (new Date()).getFullYear();
  }

}