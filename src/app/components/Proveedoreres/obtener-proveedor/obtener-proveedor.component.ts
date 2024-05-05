import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../../../models/Proveedor';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtener-proveedor',
  templateUrl: './obtener-proveedor.component.html',
  styleUrl: './obtener-proveedor.component.scss'
})
export class ObtenerProveedorComponent implements OnInit {
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedoresService, private toastr: ToastrService,
    private router:Router) {}

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores(): void {
    this.proveedorService.getAllProveedores().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
      },
      error => {
        console.error('Error al obtener proveedores:', error);
        this.toastr.error(error.error.error, 'Error');
      }
    );
  }
  actualizar(id: number): void {
    this.router.navigate(['/actualizarProveedores', id]);
  }
  eliminar(id: number): void {
    this.router.navigate(['/eliminarProveedores', id]);
  }
}
