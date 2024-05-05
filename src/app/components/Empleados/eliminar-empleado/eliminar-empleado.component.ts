import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../../models/Empleado';
import { EmpleadoService } from '../../../services/empleado.service';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.scss']
})
export class EliminarEmpleadoComponent implements OnInit {

  empleado: Empleado | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerEmpleado(id);
    });
  }

  obtenerEmpleado(id: number): void {
    this.empleadoService.getEmpleadoById(id).subscribe(
      empleado => {
        this.empleado = empleado;
      },
      error => {
        console.error('Error al obtener el empleado:', error);
        this.toastr.error('Error al obtener el empleado', 'Error');
      }
    );
  }

  eliminarEmpleado(): void {
    if (this.empleado) {
      this.empleadoService.deleteEmpleado(this.empleado.id).subscribe(
        () => {
          this.toastr.success('Empleado eliminado exitosamente', 'Éxito');
          this.router.navigate(['/obtenerEmpleados']);
        },
        error => {
          console.error('Error al eliminar el empleado:', error);
          this.toastr.error('Error al eliminar el empleado', 'Error');
        }
      );
    }
  }
}
