
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl = 'https://cafe-5.onrender.com/api/empleados';

  constructor(private http: HttpClient) { }
  

  getAllEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}/empleados`);
  }

  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.baseUrl}/empleados`, empleado);
  }

  getEmpleadoById(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.baseUrl}/empleados/${id}`);
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.baseUrl}/empleados/${id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/empleados/${id}`);
  }

  exportarEmpleadosPDF(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/empleados/exportar-pdf/pdf`, { responseType: 'blob' });
  }

  subirImagenEmpleado(id: number, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', imagen);
    return this.http.post(`${this.baseUrl}/empleados/${id}/imagen`, formData);
  }

  obtenerImagenEmpleado(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/empleados/${id}/imagen`,{ responseType: 'blob' });
  }
}
