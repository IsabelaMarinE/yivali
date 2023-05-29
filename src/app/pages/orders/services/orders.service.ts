import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateOrderRequest } from '../models/create-order.request';
import { OrderModel } from '../models/order.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateOrderRequest } from '../models/update-order.request';
import { ResponseModel } from 'src/app/components/models/response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    url = '';
    constructor(private http: HttpClient) {
    }

    getOrders() {
      return new Promise<ResponseModel<OrderModel>>((resolve, reject) => {
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

    getOrder(request: GetItemRequest) {
      return new Promise<ResponseModel<OrderModel>>((resolve, reject) => {
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

    createOrder(request: CreateOrderRequest) {
      return new Promise<OrderModel>((resolve, reject) => {
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

    updateOrder(request: UpdateOrderRequest) {
      return new Promise<OrderModel>((resolve, reject) => {
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

    deleteOrder(request: any) {
      return new Promise<OrderModel>((resolve, reject) => {
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
