import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-detalles-usuarios',
  templateUrl: './detalles-usuarios.component.html',
  styleUrls: ['./detalles-usuarios.component.scss']
})
export class DetallesUsuariosComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.getUsuario(id);
    });
  }

  getUsuario(id: number): void {
    this.usuarioService.obtenerUsuarioPorId(id).subscribe(
      usuario => {
        if (usuario) {
          this.usuario = usuario;
        } else {
          this.toastr.error('El usuario no existe', 'Error');
        }
      },
      error => {
        console.error('Error al obtener detalles del usuario:', error);
        this.toastr.error(error, 'Error');
      }
    );
  }

  eliminarUsuario(): void {
    if (this.usuario) {
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        this.usuarioService.eliminarUsuario(this.usuario.id).subscribe(
          () => {
            this.toastr.success('Usuario eliminado exitosamente', 'Éxito');
            this.router.navigate(['/obtenerUsuarios']); // Redirige a la lista de usuarios después de eliminar
          },
          error => {
            console.error('Error al eliminar el usuario:', error);
            this.toastr.error('Error al eliminar el usuario', 'Error');
          }
        );
      }
    }
  }

  actualizar(id: number): void {
    this.router.navigate(['/actualizarUsuarios', id]);
  }
}
