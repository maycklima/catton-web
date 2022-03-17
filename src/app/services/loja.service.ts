import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LojaService{

  private readonly APIreport = `${environment.API}/loja`;

  public dadosRotaLoja: any = null;

  constructor(private http: HttpClient) {
  }

    buscarLojaPorUsuario(usuario:number): Observable<any[]> {
    return this.http.post<any[]>(`${this.APIreport}/buscarLojaPorUsuario`, usuario);
    }

}