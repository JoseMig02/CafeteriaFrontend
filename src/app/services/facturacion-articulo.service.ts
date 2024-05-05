import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturacionArticulo } from '../models/FacturacionArticulo';

@Injectable({
  providedIn: 'root'
})
export class FacturacionArticuloService {
  private baseUrl = 'https://cafe-5.onrender.com/api/FacturacionArticulo'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) { }

  getAllFacturacionArticulos(): Observable<FacturacionArticulo[]> {
    return this.http.get<FacturacionArticulo[]>(`${this.baseUrl}/FacturacionArticulo`);
  }

  getFacturacionArticuloById(id: number): Observable<FacturacionArticulo> {
    return this.http.get<FacturacionArticulo>(`${this.baseUrl}/FacturacionArticulo/${id}`);
  }

  createFacturacionArticulo(facturacionArticulo: FacturacionArticulo): Observable<FacturacionArticulo> {
    return this.http.post<FacturacionArticulo>(`${this.baseUrl}/FacturacionArticulo`, facturacionArticulo);
  }

  updateFacturacionArticuloById(id: number, facturacionArticulo: FacturacionArticulo): Observable<FacturacionArticulo> {
    return this.http.put<FacturacionArticulo>(`${this.baseUrl}/FacturacionArticulo/${id}`, facturacionArticulo);
  }

  deleteFacturacionArticuloById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/FacturacionArticulo/${id}`);
  }

  getVentasPorUsuario(usuarioID: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ventasPorUsuario/${usuarioID}`);
  }


  getVentasPorFecha(fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ventasPorFecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }

  getVentasPorCampus(campusID: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ventasPorCampus/${campusID}`);
  }

  generarReporteDeRentas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reporteRentas`);
  }
}
