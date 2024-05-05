
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-actualizar-usuarios', // Mantener este selector
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.scss'] // Corregir el nombre de esta propiedad
})
export class ActualizarUsuariosComponent implements OnInit {
  usuario!: Usuario
  selectedFile!: File;
  imgUrl!: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerUsuario(id);
    });
  }

  obtenerUsuario(id: number): void {
    this.usuarioService.obtenerUsuarioPorId(id).subscribe(
      usuario => {
        this.usuario = usuario;
        this.obtenerImagenUsuario()

      },
      error => {
        console.error('Error al obtener usuario:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  obtenerImagenUsuario(): void {
    if (this.usuario && this.usuario.img) {
      this.usuarioService.obtenerImagenUsuario(this.usuario.id).subscribe(
        imagenUrl => {
          if (imagenUrl instanceof Blob) {
            const url = URL.createObjectURL(imagenUrl);
            this.imgUrl = url;
          } else {
            this.imgUrl = '../assets/usuario-invitado.jpg';
          }
        },
        error => {
          if (error.status !== 404) {
            console.error('Error al obtener imagen del usuario:', error);
            this.toastr.error(error.error, 'Error');
          }
        }
      );
    } else {
      this.toastr.error('ID de usuario no válido', 'Error');
    }
  }
   
  actualizarUsuario(): void {
  
    if (this.usuario) {
      // Actualizar el usuario
      this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(
        () => {
          // Verificar si se seleccionó un archivo para subir
          if (this.selectedFile) {
            // Subir la imagen del usuario
            this.usuarioService.subirImagenUsuario(this.usuario.id, this.selectedFile).subscribe(
              () => {
                console.log('Imagen del usuario subida correctamente');
              },
              error => {
                console.error('Error al subir imagen del usuario:', error);
                this.toastr.error('Error al subir imagen del usuario', 'Error');
              }
            );
          }
          console.log(this.usuario);
          this.toastr.success('Usuario actualizado exitosamente', 'Éxito');
           this.router.navigate(['/obtenerUsuarios']);
        },
        error => {
          console.error('Error al actualizar usuario:', error);
          this.toastr.error(error.error, 'Error');
          console.log(error);
        }
      );
    }
  }
  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

}
