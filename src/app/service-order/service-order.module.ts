import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { ServiceOrderRoutingModule } from './service-order-routing.module';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';
import { ServiceOrderListComponent } from './service-order-list/service-order-list.component';


@NgModule({
	declarations: [
		ServiceOrderFormComponent,
		ServiceOrderListComponent
	],
	imports: [
		FormsModule,
		RouterModule,
		CommonModule,
		ServiceOrderRoutingModule
	],
	exports: [
		ServiceOrderFormComponent,
		ServiceOrderListComponent
	]
})
export class ServiceOrderModule { }
