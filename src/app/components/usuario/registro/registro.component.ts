// RegistroComponent
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  registroForm: FormGroup;
  selectedFile!: File;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cedula: ['', Validators.required],
      limiteCredito: ['', [Validators.required, Validators.min(500), Validators.max(1000000)]],
      estado: ['', Validators.required],
      username: ['', Validators.required],
      fechaRegistro: ['', Validators.required],
      img: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }

    const usuario: Usuario = this.registroForm.value;

    if (this.selectedFile) {
      this.usuarioService.crearUsuario(usuario).subscribe(
        (response: any) => {
          const idUsuario = response.idUsuario;
          this.usuarioService.subirImagenUsuario(idUsuario, this.selectedFile).subscribe(
            () => {
              this.toastr.success('Usuario creado exitosamente');
              this.registroForm.reset();
            },
            error => {
              console.log(error);
              this.toastr.error(error.error.error);
            }
          );
        },
        error => {
          this.toastr.error(error.error.msg);
        }
      );
    } else {
      this.usuarioService.crearUsuario(usuario).subscribe(
        () => {
          this.toastr.success('Usuario creado exitosamente');
          this.registroForm.reset();
        },
        error => {
          this.toastr.error(error.error.msg);
        }
      );
    }
  }
}
