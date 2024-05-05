import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../../models/Empleado';
import { EmpleadoService } from '../../../services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.scss']
})
export class ActualizarEmpleadoComponent implements OnInit {
  empleado?: Empleado;
  selectedFile!: File;
  imgUrl!: string;
  empleadoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.empleadoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cedula: ['', Validators.required],
      tandaLabor: ['', Validators.required],
      cargo: ['', Validators.required],
      porcientoComision: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      fechaIngreso: ['', Validators.required],
      estado: ['Activo', Validators.required],
      img: ['']
    });
  }

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
        this.obtenerImagenEmpleado();
        this.empleadoForm.patchValue({
          nombre: empleado.nombre,
          cedula: empleado.cedula,
          tandaLabor: empleado.tandaLabor,
          cargo: empleado.cargo,
          porcientoComision: empleado.porcientoComision,
          fechaIngreso: empleado.fechaIngreso,
          estado: empleado.estado
        });
      },
      error => {
        console.error('Error al obtener empleado:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }
  

  obtenerImagenEmpleado(): void {
    if (this.empleado && this.empleado.imagen) {
      this.empleadoService.obtenerImagenEmpleado(this.empleado.id).subscribe(
        imagenUrl => {
          if (imagenUrl instanceof Blob) {
            const url = URL.createObjectURL(imagenUrl);
            this.imgUrl = url;
          } else {
            this.imgUrl = '../assets/empleado-invitado.jpg';
          }
        },
        error => {
          if (error.status !== 404) {
            console.error('Error al obtener imagen del empleado:', error);
            this.toastr.error(error.error, 'Error');
          }
        }
      );
    } else {
      this.toastr.error('Empleado sin imagen', 'Error');
    }
  }

  actualizarEmpleado(): void {
    if (this.empleadoForm.invalid) {
      this.toastr.error('Por favor, complete el formulario correctamente', 'Error');
      return;
    }
  
    if (this.empleado) {
      this.empleadoService.updateEmpleado(this.empleado.id, this.empleadoForm.value).subscribe(
        () => {
          if (this.selectedFile) {
            this.empleadoService.subirImagenEmpleado(this.empleado?.id, this.selectedFile).subscribe(
              () => {
                console.log('Imagen del empleado subida correctamente');
              },
              error => {
                console.error('Error al subir imagen del empleado:', error);
                this.toastr.error('Error al subir imagen del empleado', 'Error');
              }
            );
          }
          this.toastr.success('Empleado actualizado exitosamente', 'Éxito');
          this.router.navigate(['/obtenerEmpleados']);
        },
        error => {
          console.error('Error al actualizar empleado:', error);
          this.toastr.error(error.error, 'Error');
          console.log(error);
        }
      );
    }
  }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

}
