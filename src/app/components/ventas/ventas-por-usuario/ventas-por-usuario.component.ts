import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FacturacionArticuloService } from '../../../services/facturacion-articulo.service';
import { UsuarioService } from '../../../services/usuario.service'; // Importa el servicio de usuarios

@Component({
  selector: 'app-ventas-por-usuario',
  templateUrl: './ventas-por-usuario.component.html',
  styleUrls: ['./ventas-por-usuario.component.scss']
})
export class VentasPorUsuarioComponent implements OnInit {
  ventasPorUsuario: any[] = [];
  usuarios: any[] = []; // Variable para almacenar la lista de usuarios
  usuarioID: number = 0;

  constructor(
    private facturaService: FacturacionArticuloService,
    private usuarioService: UsuarioService, // Inyecta el servicio de usuarios
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios(); // Obtén la lista de usuarios al inicializar el componente
    this.obtenerVentasPorUsuario();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerTodosUsuarios().subscribe(
      (usuarios: any[]) => {
        this.usuarios = usuarios; // Asigna la lista de usuarios obtenida del servicio a la variable local
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los usuarios');
      }
    );
  }

  obtenerVentasPorUsuario(): void {
    this.facturaService.getVentasPorUsuario(this.usuarioID).subscribe(
      (ventas: any[]) => {
        this.ventasPorUsuario = ventas;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener las ventas por usuario');
      }
    );
  }
}
