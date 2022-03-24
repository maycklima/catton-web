import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService{

  private readonly APIreport = `${environment.API}/categoria`;

  constructor(private http: HttpClient) {
  }

    listarCategorias(): Observable<any[]> {
      return this.http.get<any[]>(`${this.APIreport}/listarCategorias/`);
  }
  
}
