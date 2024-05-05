
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private apiUrl = 'https://cafe-5.onrender.com/api/articulos'; 

  constructor(private http: HttpClient) { }

 
  obtenerArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.apiUrl}/articulos`);
  }

  crearArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(`${this.apiUrl}/articulos`, articulo);
  }

  obtenerArticuloPorId(id: number): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.apiUrl}/articulos/${id}`);
  }

  actualizarArticulo(id: number, articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.apiUrl}/articulos/${id}`, articulo);
  }

  eliminarArticulo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/articulos/${id}`);
  }

  subirImagenArticulo(id: number, imagen: File): Observable<void> {
    const formData = new FormData();
    formData.append('imagen', imagen);

    return this.http.post<void>(`${this.apiUrl}/articulos/${id}/imagen`, formData);
  }

  obtenerImagenArticulo(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/articulos/${id}/imagen`, { responseType: 'blob' });
  }
}
