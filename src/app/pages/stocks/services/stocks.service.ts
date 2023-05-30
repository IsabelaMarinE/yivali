import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateStockRequest } from '../models/create-stock.request';
import { StockModel } from '../models/stock.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateStockRequest } from '../models/update-stock.request';
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
export class StockService {
    url = 'http://localhost/apiYivali/index.php/Stock';
    constructor(private http: HttpClient) {
    }

    getStocks(): Observable<ResponseModel<StockModel>> {
      return this.http.get<ResponseModel<StockModel>>(`${this.url}consultarListaStocks`, httpOptions)

    }

    getStock(request: GetItemRequest): Observable<ResponseModel<StockModel>> {
      return this.http.get<ResponseModel<StockModel>>(`${this.url}consultarStock/${request.id}`, httpOptions)
    }

    createStock(request: CreateStockRequest): Observable<StockModel> {
      return this.http.post<StockModel>(`${this.url}crearStock`, request, httpOptions)
    }

    updateStock(request: UpdateStockRequest): Observable<StockModel> {
      return this.http.post<StockModel>(`${this.url}aztualizarStock`, request, httpOptions)
    }

    deleteStock(request: any): Observable<StockModel> {
      return this.http.get<StockModel>(`${this.url}eliminarStock/${request.id}`, httpOptions)
    }
}
