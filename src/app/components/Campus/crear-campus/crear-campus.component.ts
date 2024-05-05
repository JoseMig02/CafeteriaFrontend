import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Campus } from '../../../models/Campus';
import { CampusService } from '../../../services/campus.service';

@Component({
  selector: 'app-crear-campus',
  templateUrl: './crear-campus.component.html',
  styleUrls: ['./crear-campus.component.scss']
})
export class CrearCampusComponent {
  campusForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private campusService: CampusService,
    private toastr: ToastrService
  ) {
    this.campusForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      direccion: ['', Validators.required],
      descripcion: [''],
      estado: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.campusForm.valid) {
      const campus: Campus = this.campusForm.value
      this.campusService.crearCampus(campus).subscribe(
        () => {
          this.toastr.success('Campus creado exitosamente', 'Éxito');
          // Limpiar el formulario después de la creación exitosa
          this.campusForm.reset();
        },
        error => {
          console.error('Error al crear campus:', error);
          this.toastr.error(error.error, 'Error');
        }
      );
    } else {
      // Mostrar un mensaje de error si el formulario es inválido
      this.toastr.error('Por favor, complete todos los campos correctamente', 'Error');
    }
  }
}
