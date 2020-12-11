import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { ServiceOrder } from '../models/serviceOrder';
import { ServiceOrderFilter } from '../models/serviceOrderFilter';

@Injectable({
	providedIn: 'root'
})
export class ServiceOrderService {
	
	private apiUrl: string = environment.apiURL + '/service-order';

	constructor(private http: HttpClient) { }

	save(serviceOrder: ServiceOrder): Observable<ServiceOrder> {
		return this.http.post<ServiceOrder>(this.apiUrl, serviceOrder);
	}
	
	edit(serviceOrder: ServiceOrder): Observable<ServiceOrder> {
		return this.http.post<ServiceOrder>(`${this.apiUrl}/${serviceOrder.id}`, serviceOrder);
	}

	filter(clientName: string, month: number, year: number): Observable<ServiceOrderFilter[]> {
		
		const httpParams = new HttpParams()
		.set("clientName", clientName ? clientName : '')
		.set("month", month ? month.toString() : '')
		.set("year", year ? year.toString() : '');
		
		return this.http.get<ServiceOrderFilter[]>(`${this.apiUrl}?${httpParams.toString()}`);
	}

	findAll(): Observable<ServiceOrderFilter[]> {
		return this.http.get<ServiceOrderFilter[]>(`${this.apiUrl}/all`);
	}
}
