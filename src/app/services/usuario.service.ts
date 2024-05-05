
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario'
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'https://cafe-5.onrender.com/api/usuarios';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro`, usuario);
  }

  iniciarSesion(usuario: Login): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, usuario);
  }

  obtenerTodosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${id}`);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.baseUrl}/usuarios/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`);
  }

  subirImagenUsuario(id: number, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', imagen);
    return this.http.post(`${this.baseUrl}/usuarios/${id}/imagen`, formData);
  }

  obtenerImagenUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios/${id}/imagen`, { responseType: 'blob' });
  }
}
