
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../../models/Empleado';
import { EmpleadoService } from '../../../services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent {

  empleadoForm: FormGroup;
  selectedFile!: File;

  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private toastr: ToastrService
  ) {
    this.empleadoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cedula: ['', Validators.required],
      tandaLabor: ['', Validators.required],
      cargo: ['', Validators.required],
      porcientoComision: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      img: [''],
      fechaIngreso: ['', Validators.required],
      estado: ['', Validators.required],
      imagen: [''],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.empleadoForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }

    const empleado: Empleado = this.empleadoForm.value;

    if (this.selectedFile) {
      this.empleadoService.createEmpleado(empleado).subscribe(
        (response: any) => {
          console.log(response) 
          const idEmpleado = response.id;
          this.empleadoService.subirImagenEmpleado(idEmpleado, this.selectedFile).subscribe(
            () => {
              this.toastr.success('Empleado creado exitosamente');
              this.empleadoForm.reset();
            },
            error => {
              console.error(error);
              this.toastr.error('Error al subir la imagen del empleado');
            }
          );
        },
        error => {
          this.toastr.error('Error al crear el empleado');
        }
      );
    } else {
      this.empleadoService.createEmpleado(empleado).subscribe(
        () => {
          this.toastr.success('Empleado creado exitosamente');
          this.empleadoForm.reset();
        },
        error => {
          this.toastr.error('Error al crear el empleado');
        }
      );
    }
  }
}
