import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateOrderRequest } from '../models/create-order.request';
import { OrderModel } from '../models/order.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateOrderRequest } from '../models/update-order.request';
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
export class OrderService {
    url = 'http://localhost/apiYivali/index.php/Orders/';
    constructor(private http: HttpClient) {
    }

    getOrders(): Observable<ResponseModel<OrderModel>> {
      return this.http.get<ResponseModel<OrderModel>>(`${this.url}consultarListaOrders`, httpOptions)
    }

    getOrder(request: GetItemRequest): Observable<ResponseModel<OrderModel>> {
      return this.http.get<ResponseModel<OrderModel>>(`${this.url}consultarOrden/${request.id}`, httpOptions)
    }

    createOrder(request: CreateOrderRequest): Observable<OrderModel> {
      return this.http.post<OrderModel>(`${this.url}crearOrder`, request, httpOptions)
    }

    updateOrder(request: UpdateOrderRequest): Observable<OrderModel> {
      return this.http.post<OrderModel>(`${this.url}aztualizarOrden`, request, httpOptions)
    }

    deleteOrder(request: any): Observable<OrderModel> {
      return this.http.get<OrderModel>(`${this.url}eliminarOrden/${request.id}`, httpOptions)
    }
}
