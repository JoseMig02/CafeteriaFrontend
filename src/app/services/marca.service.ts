
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../models/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private baseUrl = 'https://cafe-5.onrender.com/api/marcas/marcas'; // Actualiza la URL base según tu configuración

  constructor(private http: HttpClient) { }

  getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}`);
  }

  createMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(`${this.baseUrl}`, marca);
  }

  getMarcaById(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.baseUrl}/${id}`);
  }

  updateMarca(id: number, marca: Marca): Observable<Marca> {
    return this.http.put<Marca>(`${this.baseUrl}/${id}`, marca);
  }

  deleteMarca(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
