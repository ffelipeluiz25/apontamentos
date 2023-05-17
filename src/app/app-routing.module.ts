import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApontamentosAngularComponent } from './components-angular/apontamentos-angular.component';
import { GeradorPdfComponent } from './components-angular/gerador-pdf/gerador-pdf.component';

const routes: Routes = [
  { path: 'apontamentos', component: ApontamentosAngularComponent },
  { path: 'gerador-pdf', component: GeradorPdfComponent },
  { path: '', component: GeradorPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
