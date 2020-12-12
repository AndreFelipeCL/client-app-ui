import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceOrder } from 'src/app/models/serviceOrder';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';
import { ServiceOrderService } from '../../services/service-order.service';

@Component({
	selector: 'app-service-order-form',
	templateUrl: './service-order-form.component.html',
	styleUrls: ['./service-order-form.component.css']
})
export class ServiceOrderFormComponent implements OnInit {

	clients: Client[];
	serviceOrder: ServiceOrder;
	success: boolean = false;
	errors: string[] = [];

	constructor(
		private clientService: ClientsService,
		private service: ServiceOrderService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		this.serviceOrder = new ServiceOrder();
	}

	ngOnInit(): void {
		this.clientService.findAll().subscribe(
			response => { this.clients = response; },
			responseError => { console.log(responseError); this.clients = []; },
		);
	}

	onSubmit() {
		if (this.serviceOrder.id) {
			this.editServiceOrder();
		} else {
			this.saveServiceOrder();
		}
	}

	private editServiceOrder(): void {	
		this.service.edit(this.serviceOrder)
		.subscribe(
			response => {
				this.serviceOrder = response;
				this.success = true;
				this.errors = [];
			},
			responseError => {
				console.error(responseError);
				this.errors = ['Erro ao atualizar a Order de Serviço.'];
				this.success = false;
			}
		);
	}

	private saveServiceOrder(): void {
		this.service.save(this.serviceOrder)
			.subscribe(
				response => {
					this.success = true;
					this.serviceOrder = response;
					this.errors = [];
				},
				responseError => {
					console.error(responseError);
					this.errors = responseError.error.errors;
					this.success = false;
				}
			);
	}

	returnToList() {
		this.router.navigate(['/service-order/list']);
	}
}
