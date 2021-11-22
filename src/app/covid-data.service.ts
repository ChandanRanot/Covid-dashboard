import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';
import { DifferentLoc } from './differentloc';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  private _url: string = '/assets/data.json';
  private _url1: string = '/assets/diffWorldLoc.json';
  private _url2: string = '/assets/diffIndiaLoc.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this._url);
  }
}
