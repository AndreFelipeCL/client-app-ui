import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../models/client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root'
})
export class ClientsService {

	private apiUrl: string = environment.apiURL + '/client';

	constructor(private http: HttpClient) { }

	save(client: Client): Observable<Client> {
		return this.http.post<Client>(this.apiUrl, client);
	}

	edit(client: Client): Observable<any> {
		return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
	}

	delete(client: Client): Observable<any> {
		return this.http.delete<number>(`${this.apiUrl}/${client.id}`);
	}

	findAll(): Observable<Client[]> {
		return this.http.get<Client[]>(`${this.apiUrl}/all`);
	}

	findById(id: number): Observable<Client> {
		return this.http.get<Client>(`${this.apiUrl}/${id}`);
	}
}
