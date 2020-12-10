import { Component, OnInit } from '@angular/core';

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

	constructor() {
		this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	}

	ngOnInit(): void {}

	searchFilter(){
		console.log(this.clientName);
		console.log(this.month);
		console.log(this.year);
	}
}
