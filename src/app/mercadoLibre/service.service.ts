import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlMcadoLibre = 'https://api.mercadolibre.com/sites/MCO/search?q=';

  getItems(item?: string): Observable<any>  {
    return this.http.get(this.urlMcadoLibre + item);
  }

  constructor(private http: HttpClient) { }
}
