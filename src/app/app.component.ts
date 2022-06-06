import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactComponent from './components-react/react';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy {
  title = 'angularreactapp';

  ngOnChanges(changes: SimpleChanges) {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {

  }

}
