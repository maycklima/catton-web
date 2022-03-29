import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';

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

  listarItensPorUrlLoja(urlLoja:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIreport}/buscarItemPorUrlLoja/` + urlLoja);
  }

  cadastrarItem(item: Item): Observable<any[]> {
    return this.http.post<any[]>(`${this.APIreport}/cadastrarItem`, item);
  }

  atualizarItem(item: Item): Observable<any[]> {
    return this.http.put<any[]>(`${this.APIreport}/atualizarItem`, item);
  }

  removerItemPorId(idItem:number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.APIreport}/removerItem/` + idItem);
  }
}
