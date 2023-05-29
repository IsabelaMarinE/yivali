import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateStockRequest } from '../models/create-stock.request';
import { StockModel } from '../models/stock.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateStockRequest } from '../models/update-stock.request';
import { ResponseModel } from 'src/app/components/models/response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class StockService {
    url = '';
    constructor(private http: HttpClient) {
    }

    getStocks() {
      return new Promise<ResponseModel<StockModel>>((resolve, reject) => {
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

    getStock(request: GetItemRequest) {
      return new Promise<ResponseModel<StockModel>>((resolve, reject) => {
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

    createStock(request: CreateStockRequest) {
      return new Promise<StockModel>((resolve, reject) => {
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

    updateStock(request: UpdateStockRequest) {
      return new Promise<StockModel>((resolve, reject) => {
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

    deleteStock(request: any) {
      return new Promise<StockModel>((resolve, reject) => {
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
