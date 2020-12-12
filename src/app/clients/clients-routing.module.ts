import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { ClientsFormComponent } from './clients-form/clients-form.component'
import { ClientsListaComponent } from './clients-lista/clients-lista.component';

const routes: Routes = [
	{ path: 'client', component: LayoutComponent, children: [
		{ path: 'form', component: ClientsFormComponent },
		{ path: 'form/:id', component: ClientsFormComponent },
		{ path: 'list', component: ClientsListaComponent },
		{ path: '', redirectTo: '/client/list', pathMatch: 'full' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientsRoutingModule { }
