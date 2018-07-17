import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { ProductView } from '../Models/product-view';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISource } from '../Models/isource';

const PROTOCOL = "http";
const PORT = 3090;
@Injectable()
export class DatasourceService implements ISource {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  public GetItems<T>(api: string): Observable<T[]> {
    return this.http.get(this.baseUrl + api) as Observable<T[]>;
  }
  public GetItem<T>(api: string): Observable<T> {
    return this.http.get(this.baseUrl + api) as Observable<T>;
  }
  public postData<T>(api: string, data: T): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',        
      })
    };
    return this.http.post(this.baseUrl + api,data ,httpOptions) as Observable<T>;
  }
}
