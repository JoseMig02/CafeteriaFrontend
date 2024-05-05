import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafeteria } from '../models/Cafeteria';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {
  private baseUrl = 'https://cafe-5.onrender.com/api/cafeteria/cafeterias';

  constructor(private http: HttpClient) { }

  obtenerCafeterias(): Observable<Cafeteria[]> {
    return this.http.get<Cafeteria[]>(`${this.baseUrl}`);
  }

  crearCafeteria(cafeteria: Cafeteria): Observable<Cafeteria> {
    return this.http.post<Cafeteria>(`${this.baseUrl}`, cafeteria);
  }

  obtenerCafeteriaPorId(id: number): Observable<Cafeteria> {
    return this.http.get<Cafeteria>(`${this.baseUrl}/${id}`);
  }

  actualizarCafeteria(id: number, cafeteria: Cafeteria): Observable<Cafeteria> {
    return this.http.put<Cafeteria>(`${this.baseUrl}/${id}`, cafeteria);
  }

  eliminarCafeteria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  subirImagenCafeteria(id: number, imagen: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagen', imagen, imagen.name);
    return this.http.post(`${this.baseUrl}/${id}/imagen`, formData);
  }

  obtenerImagenCafeteria(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/imagen`, { responseType: 'blob' });
  }
}
