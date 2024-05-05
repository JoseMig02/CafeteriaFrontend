

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../../../models/Proveedor';
import { ProveedoresService } from '../../../services/proveedores.service';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrl: './eliminar-proveedor.component.scss'
})
export class EliminarProveedorComponent  implements OnInit {

  proveedor: Proveedor | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedorServices: ProveedoresService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerProveedor(id);
    });
  }

  obtenerProveedor(id: number): void {
    this.proveedorServices.getProveedorById(id).subscribe(
      proveedor => {
        this.proveedor = proveedor;
      },
      error => {
        console.error('Error al obtener proveedor:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  eliminarProveedor(): void {
    if (this.proveedor) {
      this.proveedorServices.deleteProveedor(this.proveedor.id).subscribe(
        () => {
          this.toastr.success('Proveedor eliminado exitosamente', 'Éxito');
          this.router.navigate(['/obtenerProveedores']);
        },
        error => {
          console.error('Error al eliminar el proveedor:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }
}
