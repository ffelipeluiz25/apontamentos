import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApontamentosAngularComponent } from './components-angular/apontamentos-angular.component';
import { ApontamentosReactComponent } from './components-react/apontamentos-react.component';

const routes: Routes = [
  { path: 'apontamentos', component: ApontamentosAngularComponent },
  { path: 'apontamentos-react', component: ApontamentosReactComponent },
  { path: '', component: ApontamentosAngularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
