import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../models/TipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  private baseUrl = 'https://cafe-5.onrender.com/api/tipoUsuarios';

  constructor(private http: HttpClient) { }

  getAllTipoUsuarios(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(`${this.baseUrl}/tipoUsuarios`);
  }

  createTipoUsuario(tipoUsuario: TipoUsuario): Observable<TipoUsuario> {
    return this.http.post<TipoUsuario>(`${this.baseUrl}/tipoUsuarios`, tipoUsuario);
  }

  getTipoUsuarioById(id: number): Observable<TipoUsuario> {
    return this.http.get<TipoUsuario>(`${this.baseUrl}/tipoUsuarios/${id}`);
  }

  updateTipoUsuario(id: number, tipoUsuario: TipoUsuario): Observable<TipoUsuario> {
    return this.http.put<TipoUsuario>(`${this.baseUrl}/tipoUsuarios/${id}`, tipoUsuario);
  }

  deleteTipoUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tipoUsuarios/${id}`);
  }
}
