
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../../../models/Proveedor';
import { ProveedoresService } from '../../../services/proveedores.service';


@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrl: './actualizar-proveedor.component.scss'
})
export class ActualizarProveedorComponent implements OnInit {
  proveedor: Proveedor = {
    id: 0,  
    nombreComercial: ' ',
    rnc: ' ',
    fechaRegistro: new Date(),
    estado: ' '
  };
  

 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedorService: ProveedoresService,
    private toastr: ToastrService,
    
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerProveedor(id);
    });
    
  }

  obtenerProveedor(id: number): void {
    this.proveedorService.getProveedorById(id).subscribe(
      proveedor => {
        this.proveedor = proveedor;
      },
      error => {
        console.error('Error al obtener proveedor:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  actualizarProveedor(): void {
    if (!this.proveedor || this.formularioInvalido()) {
      this.toastr.error('Por favor, complete todos los campos correctamente.', 'Error');
      return;
    }

    this.proveedorService.updateProveedor(this.proveedor.id, this.proveedor).subscribe(
      () => {
        this.toastr.success('Proveedor actualizado exitosamente', 'Éxito');
        this.router.navigate(['/obtenerProveedores']);
      },
      error => {
        console.error('Error al actualizar proveedor:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  formularioInvalido(): boolean {
    return !this.proveedor?.nombreComercial || !this.proveedor?.rnc || !this.proveedor?.fechaRegistro || !this.proveedor?.estado;
  }
}
