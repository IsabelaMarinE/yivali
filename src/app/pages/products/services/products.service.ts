import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateProductRequest } from '../models/create-product.request';
import { ProductModel } from '../models/product.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateProductRequest } from '../models/update-product.request';
import { ResponseModel } from 'src/app/components/models/response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    url = 'http://localhost/apiYivali/index.php/Products/';
    constructor(private http: HttpClient) {
    }

    getProducts() {
      return new Promise<ResponseModel<ProductModel>>((resolve, reject) => {
        this.http.get(`consultarListaProducts`, httpOptions).subscribe({
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

    getProduct(request: GetItemRequest) {
      return new Promise<ResponseModel<ProductModel>>((resolve, reject) => {
        this.http.get(`consultarProduct/${request.id}`, httpOptions).subscribe({
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

    createProduct(request: CreateProductRequest) {
      return new Promise<ProductModel>((resolve, reject) => {
        this.http.post(`crearProduct`, request, httpOptions).subscribe({
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

    updateProduct(request: UpdateProductRequest) {
      return new Promise<ProductModel>((resolve, reject) => {
        this.http.post(`aztualizarProduct`, request, httpOptions).subscribe({
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

    deleteProduct(request: any) {
      return new Promise<ProductModel>((resolve, reject) => {
        this.http.get(`eliminarProduct/${request.id}`, httpOptions).subscribe({
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
