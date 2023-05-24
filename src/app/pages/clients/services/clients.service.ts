import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateClientRequest } from '../models/create-client.request';
import { ClientModel } from '../models/client.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateClientRequest } from '../models/update-client.request';
import { ResponseModel } from 'src/app/components/models/response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    url = '';
    constructor(private http: HttpClient) {
    }

    getClients() {
      return new Promise<ResponseModel<ClientModel>>((resolve, reject) => {
        this.http.post(`Pacientes/crearMascota`, httpOptions).subscribe({
          next: (res: any) =>{
            if(res.status){
              resolve(res.items)
            }
          },
          error: (err: any) =>{
            reject(err)
          }
        })
      })
    }

    getClient(request: GetItemRequest) {
      return new Promise<ResponseModel<ClientModel>>((resolve, reject) => {
        this.http.get(`Pacientes/crearMascota/${request.id}`, httpOptions).subscribe({
          next: (res: any) =>{
            if(res.status){
              resolve(res.items)
            }
          },
          error: (err: any) =>{
            reject(err)
          }
        })
      })
    }

    createClient(request: CreateClientRequest) {
      return new Promise<ClientModel>((resolve, reject) => {
        this.http.post(`Pacientes/crearMascota`, request, httpOptions).subscribe({
          next: (res: any) =>{
            if(res.status){
              resolve(res.items)
            }
          },
          error: (err: any) =>{
            reject(err)
          }
        })
      })
    }

    updateClient(request: UpdateClientRequest) {
      return new Promise<ClientModel>((resolve, reject) => {
        this.http.post(`Pacientes/crearMascota`, request, httpOptions).subscribe({
          next: (res: any) =>{
            if(res.status){
              resolve(res.items)
            }
          },
          error: (err: any) =>{
            reject(err)
          }
        })
      })
    }

    deleteClient(request: any) {
      return new Promise<ClientModel>((resolve, reject) => {
        this.http.post(`Pacientes/crearMascota`, request, httpOptions).subscribe({
          next: (res: any) =>{
            if(res.status){
              resolve(res.items)
            }
          },
          error: (err: any) =>{
            reject(err)
          }
        })
      })
    }
}
