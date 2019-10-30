import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API_URL: string = 'http://stapi.co/api/v1/rest/season/search';


  constructor(private http: HttpClient) { }

  leerBusqueda(): Observable<any>{
    return this.http.get(this.API_URL);
  }
}
