import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateSourceRequest } from '../models/create-source.request';
import { SourceModel } from '../models/source.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateSourceRequest } from '../models/update-source.request';
import { ResponseModel } from 'src/app/components/models/response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class SourceService {
    url = 'http://localhost/apiYivali/index.php/Products/';
    constructor(private http: HttpClient) {
    }

    getSources(request: GetItemRequest) {
      return new Promise<ResponseModel<SourceModel>>((resolve, reject) => {
        this.http.get(`consultarListaSources/${request.id}`, httpOptions).subscribe({
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

    getSource(request: GetItemRequest) {
      return new Promise<ResponseModel<SourceModel>>((resolve, reject) => {
        this.http.get(`consultarSource/${request.id}`, httpOptions).subscribe({
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

    createSource(request: CreateSourceRequest) {
      return new Promise<SourceModel>((resolve, reject) => {
        this.http.post(`crearSource`, request, httpOptions).subscribe({
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

    updateSource(request: UpdateSourceRequest) {
      return new Promise<SourceModel>((resolve, reject) => {
        this.http.post(`aztualizarSources`, request, httpOptions).subscribe({
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

    deleteSource(request: any) {
      return new Promise<SourceModel>((resolve, reject) => {
        this.http.get(`eliminarSource/${request.id}`, httpOptions).subscribe({
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
