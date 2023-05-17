import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './servicos/api-servico';
import { Util } from './utils/utils';
import { GeradorPdfComponent } from './components-angular/gerador-pdf/gerador-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    GeradorPdfComponent
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