
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-obtener-usuarios',
  templateUrl: './obtener-usuarios.component.html',
  styleUrls: ['./obtener-usuarios.component.scss']
})
export class ObtenerUsuariosComponent implements OnInit {
  usuariosConImagenes: { usuario: Usuario, imgUrl: string }[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerTodosUsuarios().subscribe(
      usuarios => {
        usuarios.forEach(usuario => {
          if (usuario.img) {
            this.usuarioService.obtenerImagenUsuario(usuario.id).subscribe(
              imagenUrl => {
                const url = imagenUrl instanceof Blob ? URL.createObjectURL(imagenUrl) : '../assets/usuario-invitado.jpg';
                this.usuariosConImagenes.push({ usuario: usuario, imgUrl: url });
              },
              error => {
                if (error.status !== 404) {
                  console.error('Error al obtener imagen del usuario:', error);
                  this.toastr.error(error.error, 'Error');
                }
              }
            );
          } else {
            this.usuariosConImagenes.push({ usuario: usuario, imgUrl: '../assets/usuario-invitado.jpg' });
          }
        });
      },
      error => {
        console.error('Error al obtener usuarios:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detallesUsuarios', id]);
  }


}
