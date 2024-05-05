import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cafeteria } from '../../../models/Cafeteria';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtener-cafeterias',
  templateUrl: './obtener-cafeterias.component.html',
  styleUrls: ['./obtener-cafeterias.component.scss']
})
export class ObtenerCafeteriasComponent implements OnInit {
  cafeteriasConImagenes: { cafeteria: Cafeteria, imgUrl: string }[] = [];

  constructor(
    private cafeteriaService: CafeteriaService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerCafeterias();
  }

  obtenerCafeterias(): void {
    this.cafeteriaService.obtenerCafeterias().subscribe(
      cafeterias => {
        cafeterias.forEach(cafeteria => {
          this.cafeteriaService.obtenerImagenCafeteria(cafeteria.id).subscribe(
            imagenUrl => {
              const url = imagenUrl instanceof Blob ? URL.createObjectURL(imagenUrl) : '../assets/default-cafeteria-image.jpg';
              this.cafeteriasConImagenes.push({ cafeteria: cafeteria, imgUrl: url });
            },
            error => {
              if (error.status !== 404) {
                console.error('Error al obtener imagen de la cafetería:', error);
                this.toastr.error(error.error, 'Error');
              }
            }
          );
        });
      },
      error => {
        console.error('Error al obtener cafeterías:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }
  obtenerDetalles(id:number): void {
    this.router.navigate(['/detallesCafeteria', id]);
  }
  
}
