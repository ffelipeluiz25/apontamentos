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