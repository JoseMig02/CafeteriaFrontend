import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service'

@Component({
  selector: 'app-crear-tipo-usuario',
  templateUrl: './crear-tipo-usuario.component.html',
  styleUrls: ['./crear-tipo-usuario.component.scss']
})
export class CrearTipoUsuarioComponent implements OnInit {
  tipoUsuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tipoUsuarioService: TipoUsuarioService,
    private toastr: ToastrService
  ) {
    this.tipoUsuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['Activo', Validators.required] // Por defecto establecido en 'Activo'
    });
  }

  ngOnInit(): void {
  }

  crearTipoUsuario(): void {

    if (this.tipoUsuarioForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }

    if (this.tipoUsuarioForm.valid) {
      this.tipoUsuarioService.createTipoUsuario(this.tipoUsuarioForm.value).subscribe(
        () => {
          this.toastr.success('Tipo de usuario creado exitosamente', 'Éxito');
          this.tipoUsuarioForm.reset(); // Reiniciar el formulario después de la creación exitosa
        },
        error => {
          console.error('Error al crear tipo de usuario:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }
}
