import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { ServiceOrder } from '../models/serviceOrder';

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
}
