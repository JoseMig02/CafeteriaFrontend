
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../../models/Empleado';
import { EmpleadoService } from '../../../services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtener-empleados',
  templateUrl: './obtener-empleados.component.html',
  styleUrls: ['./obtener-empleados.component.scss']
})
export class ObtenerEmpleadosComponent implements OnInit {
  empleadosConImagenes: { empleado: Empleado, imgUrl: string }[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getAllEmpleados().subscribe(
      empleados => {
        empleados.forEach(empleado => {
          if (empleado.imagen) {
            this.empleadoService.obtenerImagenEmpleado(empleado.id).subscribe(
              imagenUrl => {
                const url = imagenUrl instanceof Blob ? URL.createObjectURL(imagenUrl) : '../assets/usuario-invitado.jpg';
                console.log(url)
                this.empleadosConImagenes.push({ empleado: empleado, imgUrl: url });
                console.log(imagenUrl)
              },
              error => {
                if (error.status !== 404) {
                  console.error('Error al obtener imagen del empleado:', error);
                  this.toastr.error(error.error, 'Error');
                  console.log(error)
                }
              }
            );
          } else {
            this.empleadosConImagenes.push({ empleado: empleado, imgUrl: '../assets/usuario-invitado.jpg' });
          }
        });
      },
      error => {
        console.error('Error al obtener empleados:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }
  obtenerDetalles(id:number): void {
    this.router.navigate(['/detallesEmpleado', id]);
  }

}
