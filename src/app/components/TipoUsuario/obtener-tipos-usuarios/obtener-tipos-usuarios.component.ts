import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TipoUsuario } from '../../../models/TipoUsuario';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-obtener-tipos-usuarios',
  templateUrl: './obtener-tipos-usuarios.component.html',
  styleUrl: './obtener-tipos-usuarios.component.scss'
})
export class ObtenerTiposUsuarioComponent implements OnInit {
  tiposUsuarios: TipoUsuario[] = [];

  constructor(
    private tipoUsuarioService: TipoUsuarioService,
    private toastr: ToastrService,private route: ActivatedRoute, private router: Router,
  ) {}

  ngOnInit(): void {
    this.obtenerTiposUsuarios();
  }

  obtenerTiposUsuarios(): void {
    this.tipoUsuarioService.getAllTipoUsuarios().subscribe(
      tipos => {
        this.tiposUsuarios = tipos;
      },
      error => {
        console.error('Error al obtener tipos de usuario:', error);
        console.log(error)
        this.toastr.error('Error al obtener tipos de usuario', 'Error');
      }
    );
  }
  actualizar(id: number): void {
    this.router.navigate(['/actualizarTipoUsuario', id]);
  }
  eliminar(id: number): void {
    this.router.navigate(['/eliminarTipoUsuario', id]);
  }
}
