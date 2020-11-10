import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from './clients/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8090/client', client);
  }

  getClient(): Client {
    let client: Client = new Client();
    client.name = 'Fulano de Tal';
    client.cpf = '25744037039';

    return client;
  }

}
