import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
	selector: 'app-clients-form',
	templateUrl: './clients-form.component.html',
	styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

	client: Client = new Client();
	success: boolean = false;
	errors: string[] = [];

	constructor(
		private service: ClientsService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { }


	ngOnInit(): void {
		let params: Observable<Params> = this.activatedRoute.params;

		params.subscribe(pathParameter => {
			if (pathParameter.id) {
				this.service.findById(pathParameter.id)
					.subscribe(
						response => { this.client = response; },
						errorResponse => { this.client = new Client() }
					);
			}
		});
	}

	onSubmit() {
		if (this.client.id) {
			this.editClient();
		} else {
			this.saveNewClient();
		}
	}

	private editClient(): void {
		this.service.edit(this.client)
		.subscribe(
			response => {
				this.client = response;
				this.success = true;
				this.errors = [];
			},
			errorResponse => {
				console.error(errorResponse);
				this.errors = ['Erro ao atualizar o client.'];
				this.success = false;
			}
		);
	}

	private saveNewClient(): void {
		this.service.save(this.client)
			.subscribe(
				response => {
					this.success = true;
					this.client = response;
					this.errors = [];
				},
				errorResponse => {
					console.error(errorResponse);
					this.errors = errorResponse.error.errors;
					this.success = false;
				}
			);
	}

	returnToList() {
		this.router.navigate(['/client/list']);
	}
}
