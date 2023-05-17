import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeradorPdfComponent } from './components-angular/gerador-pdf/gerador-pdf.component';

const routes: Routes = [
  { path: 'gerador-pdf', component: GeradorPdfComponent },
  { path: '', component: GeradorPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
