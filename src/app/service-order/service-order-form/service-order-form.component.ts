import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceOrder } from 'src/app/models/serviceOrder';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
	selector: 'app-service-order-form',
	templateUrl: './service-order-form.component.html',
	styleUrls: ['./service-order-form.component.css']
})
export class ServiceOrderFormComponent implements OnInit {

	clients: Client[];
	serviceOrder: ServiceOrder;

	constructor(
		private clientService: ClientsService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.serviceOrder = new ServiceOrder();
		this.clientService.findAll().subscribe(
			response => { this.clients = response; },
			responseError => { console.log(responseError); this.clients = []; },
		);
	}

	onSubmit() {
	}

	returtToList() {
		this.router.navigate(['/service-order-list']);
	}
}
