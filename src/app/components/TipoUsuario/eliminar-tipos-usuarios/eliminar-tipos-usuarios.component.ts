
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoUsuario } from '../../../models/TipoUsuario';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service';


@Component({
  selector: 'app-eliminar-tipos-usuarios',
  templateUrl: './eliminar-tipos-usuarios.component.html',
  styleUrl: './eliminar-tipos-usuarios.component.scss'
})
export class EliminarTiposUsuariosComponent implements OnInit {
  tipoUsuario: TipoUsuario | null = null;

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

  eliminarTipoUsuario(): void {
    if (this.tipoUsuario) {
      this.tipoUsuarioService.deleteTipoUsuario(this.tipoUsuario.id).subscribe(
        () => {
          this.toastr.success('Tipo de usuario eliminado exitosamente', 'Éxito');
          this.router.navigate(['obtenerTipoUsuario']);
        },
        error => {
          console.error('Error al eliminar tipo de usuario:', error);
          this.toastr.error("Este tipo usuario esta asociado a un usuario", 'Error');
        }
      );
    }
  }
}
