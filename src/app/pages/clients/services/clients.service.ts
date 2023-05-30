import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateClientRequest } from '../models/create-client.request';
import { ClientModel } from '../models/client.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateClientRequest } from '../models/update-client.request';
import { ResponseModel } from 'src/app/components/models/response.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    url = 'http://localhost/apiYivali/index.php/Clients/';
    constructor(private http: HttpClient) {
    }

    getClients(): Observable<ResponseModel<ClientModel>> {
      return this.http.get<ResponseModel<ClientModel>>(`${this.url}consultarListaClientes`, httpOptions);
    }

    getClient(request: GetItemRequest): Observable<ResponseModel<ClientModel>> {
        return this.http.get<ResponseModel<ClientModel>>(`${this.url}consultarCliente/${request.id}`, httpOptions)
    }

    createClient(request: CreateClientRequest): Observable<ClientModel> {
      return this.http.post<ClientModel>(`${this.url}crearCliente`, request, httpOptions);
    }

    updateClient(request: UpdateClientRequest): Observable<ClientModel> {
      return this.http.post<ClientModel>(`${this.url}aztualizarCliente`, request, httpOptions)
    }

    deleteClient(request: any): Observable<ClientModel> {
      return this.http.post<ClientModel>(`${this.url}eliminarCliente/${request.id}`, httpOptions)
    }
}
