import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Apontamentos } from "../models/apontamentos";
import { Tarefa } from "../models/tarefas";
import { ApiService } from "../servicos/api-servico";
import { DetalhesAngularComponent } from "./detalhes/detalhes.component";

@Component({
  selector: 'app-apontamentos-angular',
  templateUrl: './apontamentos-angular.component.html',
  styleUrls: ['./apontamentos-angular.component.css']
})

export class ApontamentosAngularComponent implements OnInit {

  @ViewChild('detalhesModal', { static: true }) detalhesModal: DetalhesAngularComponent;

  public detailedAppointments: Array<Apontamentos> = new Array<Apontamentos>();
  public mes: number;
  public ano: number;
  public responsavel: string;
  public workItems: Array<Tarefa> = new Array<Tarefa>();

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.carregarTela();
  }

  async carregarTela() {
    this.mes = this.recuperaMesAtual();
    this.ano = this.recuperaAnoAtual();
    this.responsavel = "1";
    await this.getDetalhes();
  }

  recuperaMesAtual() {
    var mesAtual = (new Date()).getMonth();
    mesAtual++;
    return mesAtual;
  }

  recuperaAnoAtual() {
    return (new Date()).getFullYear();
  }

  async detalhes(item: Apontamentos) {
    console.log(item);
    this.workItems = item.workItens;
    await this.detalhesModal.open();
  }

  async mudarParaReact() {
    this.router.navigate(['/apontamentos-react']);

  }

  async getDetalhes() {
    await this.api.get('/appointment/details', { period: this.mes + '/1/' + this.ano }, true, true).toPromise().then(result => {
      var list: any[] = [];
      result.detailedAppointments.forEach(async (item: { teamMember: string; dataFormatada: string; date: string; diaDaSemana: string; }) => {
        if (item.teamMember === this.recuperaResponsavel()) {
          var arrayNewDate = item.date.substring(0, 10).split('-');
          item.dataFormatada = arrayNewDate[2] + '/' + arrayNewDate[1] + '/' + arrayNewDate[0];
          item.diaDaSemana = this.recuperaDiaSemana(item.date);
          list.push(item);
        }
      });
      this.detailedAppointments = list;
    });
  }

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

  recuperaResponsavel() {
    var responsavel = '';
    switch (this.responsavel) {
      case "1":
        responsavel = 'luiz.felipe';
        break;
      case "2":
        responsavel = 'William Dias';
        break;
      case "3":
        responsavel = 'vitor.tramontina';
        break;
      case "4":
        responsavel = 'Vinícius Bandeira';
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
        responsavel = 'Gabriel Guerra';
        break;
      case "11":
        responsavel = 'Andre Castro';
        break;
    }

    return responsavel;

  }

  async mudarParametrosFiltros() {
    await this.getDetalhes();
  }

}
