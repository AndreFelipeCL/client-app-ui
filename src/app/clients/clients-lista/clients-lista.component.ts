import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../../models/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
	selector: 'app-clients-lista',
	templateUrl: './clients-lista.component.html',
	styleUrls: ['./clients-lista.component.css']
})
export class ClientsListaComponent implements OnInit {

	clients: Client[] = [];
	clientToDelete: Client;
	mensagemSucesso: string;
	mensagemErro: string;

	constructor(
		private service: ClientsService,
		private router: Router) { }

	ngOnInit(): void {
		this.findAll();
	}

	private findAll() {
		this.service.findAll()
			.subscribe(
				response => { this.clients = response; },
				responseError => { this.clients = [] }
			);
	}

	newClient() {
		this.router.navigate(['/clients-form']);
	}

	edit(id: number) {
		this.router.navigate([`/clients-form/${id}`]);
	}

	prepareConfirmDeleteModal(client: Client) {
		this.clientToDelete = client;
	}

	delete(client: Client) {
		this.service.delete(client)
			.subscribe(
				response => { 
					this.findAll(); 
					this.mensagemSucesso = "Cliente deletado com sucesso."
				},
				responseError => {
					this.findAll(); 
					console.log(responseError);
					this.mensagemErro = "Ocorreu um erro ao deletar o cliente."
				}
			);
	}

}
