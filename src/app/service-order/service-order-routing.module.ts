import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';
import { ServiceOrderListComponent } from './service-order-list/service-order-list.component';

const routes: Routes = [
  { path: 'service-order-form', component: ServiceOrderFormComponent },
  { path: 'service-order-list', component: ServiceOrderListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOrderRoutingModule { }
