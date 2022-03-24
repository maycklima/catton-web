import { Usuario } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Loja } from '../models/loja.model';

@Injectable({
  providedIn: 'root'
})
export class LojaService{

  private readonly APIreport = `${environment.API}/loja`;

  public dadosRotaUsuario: any = null;
  public dadosRotaLoja: any = null;

  constructor(private http: HttpClient) {
  }

    buscarLojaPorUsuario(usuario: Usuario): Observable<any[]> {
    return this.http.post<any[]>(`${this.APIreport}/buscarLojaPorUsuario`, usuario);
    }

    cadastrarLoja(loja: Loja): Observable<any[]> {
      return this.http.post<any[]>(`${this.APIreport}/cadastrarLoja`, loja);
    }
  
    atualizarLoja(loja: Loja): Observable<any[]> {
      return this.http.put<any[]>(`${this.APIreport}/atualizarLoja`, loja);
    }

    removerLojaPorId(idLoja:number): Observable<any[]> {
      return this.http.delete<any[]>(`${this.APIreport}/removerLoja/` + idLoja);
    }

}