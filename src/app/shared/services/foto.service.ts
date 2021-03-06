import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FotoService{

  private readonly APIreport = `${environment.API}/fotos`;

  constructor(private http: HttpClient) {
  }

    enviarFoto(foto:any, idLoja:number): Observable<any[]> {
      console.log(foto)
      return this.http.post<any[]>(`${this.APIreport}/uploadFoto/${idLoja}`, foto);
  }
  
}
