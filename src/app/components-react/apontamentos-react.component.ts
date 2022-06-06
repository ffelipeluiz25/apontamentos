import { AfterViewInit, Component, OnChanges, OnDestroy } from "@angular/core";
import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import ReactComponent from "./react";

@Component({
  selector: 'app-apontamentos-react',
  templateUrl: './apontamentos-react.component.html',
  styleUrls: ['./apontamentos-react.component.css']
})

export class ApontamentosReactComponent implements OnChanges, AfterViewInit, OnDestroy {
  public rootId = 'rootId';

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
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

}
