import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{

  private readonly APIreport = `${environment.API}/usuario`;

  constructor(private http: HttpClient) {
  }

    verificarLogin(usuario:string): Observable<any[]> {
    return this.http.post<any[]>(`${this.APIreport}/verificarLogin`, usuario);
    }

}