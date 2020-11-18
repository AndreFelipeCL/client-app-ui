import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
	selector: 'app-clients-lista',
	templateUrl: './clients-lista.component.html',
	styleUrls: ['./clients-lista.component.css']
})
export class ClientsListaComponent implements OnInit {

	clients: Client[] = [];

	constructor(
		private service: ClientsService,
		private router: Router) { }

	ngOnInit(): void {
		this.service.findAll()
			.subscribe(
				response => { this.clients = response; },
				errorResponse => { this.clients = [] }
			);
	}

	newClient() {
		this.router.navigate(['/clients-form']);
	}

	edit(id: number) {
		this.router.navigate([`/clients-form/${id}`]);
	}

}
