import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOrderFilter } from 'src/app/models/serviceOrderFilter';
import { ServiceOrderService } from 'src/app/services/service-order.service';

@Component({
	selector: 'app-service-order-list',
	templateUrl: './service-order-list.component.html',
	styleUrls: ['./service-order-list.component.css']
})
export class ServiceOrderListComponent implements OnInit {

	clientName: string;
	months: number[];
	month: number;
	year: number;
	serviceOrderFilterList: ServiceOrderFilter[];
	message: string;

	constructor(
		private service: ServiceOrderService,
		private router: Router) {
		this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	}

	ngOnInit(): void {
		this.service.findAll()
			.subscribe(
				response => {
					this.serviceOrderFilterList = response;
				},
				responseError => {
					this.serviceOrderFilterList = [];
					console.error(responseError);
				}
			);
	}

	searchFilter() {
		this.service.filter(this.clientName, this.month, this.year)
			.subscribe(
				response => {
					this.serviceOrderFilterList = response;
					if(this.serviceOrderFilterList.length <= 0){
						this.message = "Nenhuma order de serviço encontrada.";
					} else {
						this.message = null;
					}
				},
				responseError => {
					this.serviceOrderFilterList = [];
					console.error(responseError);
				}
			);
	}

	newServiceOrder() {
		this.router.navigate(['/service-order-form']);
	}
}
