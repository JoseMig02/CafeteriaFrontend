import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../../models/Empleado';
import { EmpleadoService } from '../../../services/empleado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.scss']
})
export class DetallesEmpleadoComponent implements OnInit {
  empleado: Empleado | undefined;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.obtenerDetalleEmpleado(id);
    });
  }

  obtenerDetalleEmpleado(id: number): void {
    this.empleadoService.getEmpleadoById(id).subscribe(
      empleado => {
        this.empleado = empleado;
      },
      error => {
        console.error('Error al obtener detalle del empleado:', error);
        this.toastr.error('Error al obtener detalle del empleado', 'Error');
      }
    );
  }
  actualizar(id: number): void {
    this.router.navigate(['/actualizarEmpleado', id]);
  }
  eliminar(id: number): void {
    this.router.navigate(['/eliminarEmpleado', id]);
  }
}
