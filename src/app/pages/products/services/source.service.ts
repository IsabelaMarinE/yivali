import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateSourceRequest } from '../models/create-source.request';
import { SourceModel } from '../models/source.model';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { UpdateSourceRequest } from '../models/update-source.request';
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
export class SourceService {
    url = 'http://localhost/apiYivali/index.php/Products/';
    constructor(private http: HttpClient) {
    }

    getSources(request: GetItemRequest): Observable<ResponseModel<SourceModel>> {
      return this.http.get<ResponseModel<SourceModel>>(`${this.url}consultarListaSources/${request.id}`, httpOptions)
    }

    getSource(request: GetItemRequest): Observable<ResponseModel<SourceModel>> {
      return this.http.get<ResponseModel<SourceModel>>(`${this.url}consultarSource/${request.id}`, httpOptions)
    }

    createSource(request: CreateSourceRequest): Observable<SourceModel> {
      return this.http.post<SourceModel>(`${this.url}crearSource`, request, httpOptions)
    }

    updateSource(request: UpdateSourceRequest): Observable<SourceModel> {
      return this.http.post<SourceModel>(`${this.url}aztualizarSources`, request, httpOptions)
    }

    deleteSource(request: any): Observable<SourceModel> {
      return this.http.get<SourceModel>(`${this.url}eliminarSource/${request.id}`, httpOptions)
    }
}
