import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { ClientsFormComponent } from './clients-form/clients-form.component'
import { ClientsListaComponent } from './clients-lista/clients-lista.component';

import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
	{
		path: 'client', component: LayoutComponent, canActivate: [AuthGuard], children: [
			{ path: '', redirectTo: '/client/list', pathMatch: 'full' },
			{ path: 'form', component: ClientsFormComponent },
			{ path: 'form/:id', component: ClientsFormComponent },
			{ path: 'list', component: ClientsListaComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientsRoutingModule { }
