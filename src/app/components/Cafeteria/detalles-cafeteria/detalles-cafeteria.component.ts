import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cafeteria } from '../../../models/Cafeteria';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalles-cafeteria',
  templateUrl: './detalles-cafeteria.component.html',
  styleUrls: ['./detalles-cafeteria.component.scss']
})
export class DetallesCafeteriaComponent implements OnInit {
  cafeteria!: Cafeteria;
  imagenUrl: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private cafeteriaService: CafeteriaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.obtenerDetalleCafeteria(id);
      this.obtenerImagenCafeteria(id);
    });
  }

  obtenerDetalleCafeteria(id: number): void {
    this.cafeteriaService.obtenerCafeteriaPorId(id).subscribe(
      cafeteria => {
        this.cafeteria = cafeteria;
      },
      error => {
        console.error('Error al obtener detalle de la cafetería:', error);
        this.toastr.error('Error al obtener detalle de la cafetería', 'Error');
      }
    );
  }

  obtenerImagenCafeteria(id: number): void {
    this.cafeteriaService.obtenerImagenCafeteria(id).subscribe(
      imageUrl => {
        if (imageUrl instanceof Blob) {
          this.imagenUrl = URL.createObjectURL(imageUrl);
        } else {
          this.imagenUrl = '../assets/imagen_default.jpg'; // Ruta de la imagen por defecto si no se puede cargar
        }
      },
      error => {
        console.error('Error al obtener imagen de la cafetería:', error);
        this.imagenUrl = '../assets/imagen_default.jpg'; // Ruta de la imagen por defecto si ocurre un error
      }
    );
  }

  actualizar(id: number): void {
    this.router.navigate(['/actualizarCafeteria', id]);
  }

  eliminar(id: number): void {
    this.router.navigate(['/eliminarCafeteria', id]);
  }
}
