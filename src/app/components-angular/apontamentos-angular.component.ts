import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../servicos/api-servico";
import { Util } from "../utils/utils";

@Component({
  selector: 'app-apontamentos-angular',
  templateUrl: './apontamentos-angular.component.html',
  styleUrls: ['./apontamentos-angular.component.css']
})

export class ApontamentosAngularComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

 

  constructor(private router: Router, private api: ApiService, private util: Util) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
