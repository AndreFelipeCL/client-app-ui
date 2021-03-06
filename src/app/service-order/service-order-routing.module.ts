import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';
import { ServiceOrderListComponent } from './service-order-list/service-order-list.component';

const routes: Routes = [
	{
		path: 'service-order', component: LayoutComponent, canActivate: [AuthGuard], children: [
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
