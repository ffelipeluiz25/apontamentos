import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApontamentosAngularComponent } from './components-angular/apontamentos-angular.component';
import { DetalhesAngularComponent } from './components-angular/detalhes/detalhes.component';
import { ApiService } from './servicos/api-servico';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Util } from './utils/utils';
import { GeradorPdfComponent } from './components-angular/gerador-pdf/gerador-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    ApontamentosAngularComponent,
    GeradorPdfComponent,
    DetalhesAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [ApiService, Util],
  bootstrap: [AppComponent]
})
export class AppModule { }