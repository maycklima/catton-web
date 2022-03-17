import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService{

  private readonly APIreport = `${environment.API}/item`;

  constructor(private http: HttpClient) {
  }

    listarItens(): Observable<any[]> {
      return this.http.get<any[]>(`${this.APIreport}/listarItens/`);
    }

    listarItensPorIdLoja(idLoja:number): Observable<any[]> {
      return this.http.get<any[]>(`${this.APIreport}/buscarItemPorIdLoja/` + idLoja);
  }
}
