import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../../models/Marca';
import { MarcaService } from '../../../services/marca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtener-marcas',
  templateUrl: './obtener-marcas.component.html',
  styleUrls: ['./obtener-marcas.component.scss']
})
export class ObtenerMarcasComponent implements OnInit {
  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService, private toastr: ToastrService,
    private router:Router) {}

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  obtenerMarcas(): void {
    this.marcaService.getAllMarcas().subscribe(
      marcas => {
        this.marcas = marcas;
      },
      error => {
        console.error('Error al obtener marcas:', error);
        console.log(error)
        this.toastr.error('Error al obtener marcas', 'Error');
      }
    );
  }
  actualizar(id: number): void {
    this.router.navigate(['/ActualizarMarca', id]);
  }
  eliminar(id: number): void {
    this.router.navigate(['/EliminarMarca', id]);
  }
}
