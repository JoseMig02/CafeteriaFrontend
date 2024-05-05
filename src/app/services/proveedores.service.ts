import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from './../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private baseUrl = 'https://cafe-5.onrender.com/api/proveedores';

  constructor(private http: HttpClient) {}

  getAllProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.baseUrl}/proveedores`);
  }

  createProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(`${this.baseUrl}/proveedores`, proveedor);
  }

  getProveedorById(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.baseUrl}/proveedores/${id}`);
  }

  updateProveedor(id: number, proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.baseUrl}/proveedores/${id}`, proveedor);
  }

  deleteProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/proveedores/${id}`);
  }
}
