import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Apontamentos } from "../models/apontamentos";
import { Tarefa } from "../models/tarefas";
import { ApiService } from "../servicos/api-servico";
import { DetalhesAngularComponent } from "./detalhes/detalhes.component";
import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import ReactComponent from "../components-react/react";
import { Util } from "../utils/utils";

@Component({
  selector: 'app-apontamentos-angular',
  templateUrl: './apontamentos-angular.component.html',
  styleUrls: ['./apontamentos-angular.component.css']
})

export class ApontamentosAngularComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @ViewChild('detalhesModal', { static: true }) detalhesModal: DetalhesAngularComponent;

  public detailedAppointments: Array<Apontamentos> = new Array<Apontamentos>();
  public mes: number;
  public ano: number;
  public responsavel: string;
  public workItems: Array<Tarefa> = new Array<Tarefa>();
  public rootId = 'rootId';
  public isAngular = true;

  constructor(private router: Router, private api: ApiService, private util: Util) { }

  ngOnInit(): void {
    this.carregarTela();
  }

  ngOnChanges() {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  private render() {
    var element = document.getElementById(this.rootId);
    if (element != null) {
      const root = ReactDOM.createRoot(element);
      root.render(React.createElement(ReactComponent));
    }
  }

  async carregarTela() {
    this.mes = this.util.recuperaMesAtual();
    this.ano = this.util.recuperaAnoAtual();
    this.responsavel = "1";
    await this.getDetalhes();
  }


  async detalhes(item: Apontamentos) {
    this.workItems = item.workItens;
    await this.detalhesModal.open();
  }

  async mudarParaReact() {
    this.isAngular = false;
    this.render();
  }

  async getDetalhes() {
    await this.api.get('/appointment/details', { period: this.mes + '/1/' + this.ano }, true, true).toPromise().then(result => {
      var list: any[] = [];
      result.detailedAppointments.forEach(async (item: { teamMember: string; dataFormatada: string; date: string; diaDaSemana: string; }) => {
        if (item.teamMember === this.util.recuperaResponsavel(this.responsavel)) {
          var arrayNewDate = item.date.substring(0, 10).split('-');
          item.dataFormatada = arrayNewDate[2] + '/' + arrayNewDate[1] + '/' + arrayNewDate[0];
          item.diaDaSemana = this.util.recuperaDiaSemana(item.date);
          list.push(item);
        }
      });
      this.detailedAppointments = list;
    });
  }

  async mudarParametrosFiltros() {
    await this.getDetalhes();
  }

}
