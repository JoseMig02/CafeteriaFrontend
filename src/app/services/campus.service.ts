import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campus } from '../models/Campus';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  private baseUrl = 'https://cafe-5.onrender.com/api/campus/campus'; 

  constructor(private http: HttpClient) { }

  obtenerCampus(): Observable<Campus[]> {
    return this.http.get<Campus[]>(`${this.baseUrl}`);
  }

  obtenerCampusPorId(id: number): Observable<Campus> {
    return this.http.get<Campus>(`${this.baseUrl}/${id}`);
  }

  crearCampus(campus: Campus): Observable<Campus> {
    return this.http.post<Campus>(`${this.baseUrl}`, campus);
  }

  actualizarCampus(id: number, campus: Campus): Observable<Campus> {
    return this.http.put<Campus>(`${this.baseUrl}/${id}`, campus);
  }

  eliminarCampus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
