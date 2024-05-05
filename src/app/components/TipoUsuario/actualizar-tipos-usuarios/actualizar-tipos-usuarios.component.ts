import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoUsuario } from '../../../models/TipoUsuario';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service';

@Component({
  selector: 'app-actualizar-tipos-usuarios',
  templateUrl: './actualizar-tipos-usuarios.component.html',
  styleUrls: ['./actualizar-tipos-usuarios.component.scss']
})
export class ActualizarTiposUsuariosComponent implements OnInit {
  tipoUsuario: TipoUsuario | null = null;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoUsuarioService: TipoUsuarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerTipoUsuario(id);
    });
  }

  obtenerTipoUsuario(id: number): void {
    this.tipoUsuarioService.getTipoUsuarioById(id).subscribe(
      tipoUsuario => {
        this.tipoUsuario = tipoUsuario;
      },
      error => {
        console.error('Error al obtener tipo de usuario:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  actualizarTipoUsuario(): void {
    this.submitted = true;
    if (this.tipoUsuario) {
      if (this.formularioInvalido()) {
        this.toastr.error('Por favor, complete todos los campos correctamente.', 'Error');
        return;
      }
      
      this.tipoUsuarioService.updateTipoUsuario(this.tipoUsuario.id, this.tipoUsuario).subscribe(
        () => {
          this.toastr.success('Tipo de usuario actualizado exitosamente', 'Éxito');
          this.router.navigate(['obtenerTipoUsuario']);
        },
        error => {
          console.error('Error al actualizar tipo de usuario:', error);
          this.toastr.error(error.error, 'Error');
        }
      );
    }
  }

  formularioInvalido(): boolean {
    return !this.tipoUsuario ||
      !this.tipoUsuario.nombre ||
      !this.tipoUsuario.descripcion ||
      !this.tipoUsuario.estado;
  }
}
