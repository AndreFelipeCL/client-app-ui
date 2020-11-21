import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8090/client', client);
  }

  edit(client: Client): Observable<any> {
    return this.http.put<Client>(`http://localhost:8090/client/${client.id}`, client);
  }

  delete(client: Client): Observable<any> {
    return this.http.delete<number>(`http://localhost:8090/client/${client.id}`);
  }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8090/client/all');
  }

  findById(id: number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8090/client/${id}`);
  }
}
