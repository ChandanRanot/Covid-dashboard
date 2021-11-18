import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  private _url: string = '/assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this._url);
  }
}
