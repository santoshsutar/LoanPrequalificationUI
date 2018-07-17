import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

export interface ISource {
    GetItems<T>(api: string): Observable<T[]>;

    GetItem<T>(api: string): Observable<T>;
    postData<T>(api: string, data: T): Observable<T>;
}
