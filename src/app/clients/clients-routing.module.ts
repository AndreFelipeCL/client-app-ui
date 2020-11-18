import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsFormComponent } from './clients-form/clients-form.component'
import { ClientsListaComponent } from './clients-lista/clients-lista.component';

const routes: Routes = [
  { path: 'clients-form', component: ClientsFormComponent },
  { path: 'clients-form/:id', component: ClientsFormComponent },
  { path: 'clients-list', component: ClientsListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
