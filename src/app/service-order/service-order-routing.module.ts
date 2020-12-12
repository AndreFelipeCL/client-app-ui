import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';
import { ServiceOrderListComponent } from './service-order-list/service-order-list.component';

const routes: Routes = [
	{
		path: 'service-order', component: LayoutComponent, children: [
			{ path: 'form', component: ServiceOrderFormComponent },
			{ path: 'list', component: ServiceOrderListComponent },
			{ path: '', redirectTo: '/service-order/list', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ServiceOrderRoutingModule { }
