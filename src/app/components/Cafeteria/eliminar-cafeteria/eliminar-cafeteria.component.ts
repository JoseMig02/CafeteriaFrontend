import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cafeteria } from '../../../models/Cafeteria';
import { CafeteriaService } from '../../../services/cafeteria.service';

@Component({
  selector: 'app-eliminar-cafeteria',
  templateUrl: './eliminar-cafeteria.component.html',
  styleUrls: ['./eliminar-cafeteria.component.scss']
})
export class EliminarCafeteriaComponent implements OnInit {

  cafeteria: Cafeteria | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cafeteriaService: CafeteriaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerCafeteria(id);
    });
  }

  obtenerCafeteria(id: number): void {
    this.cafeteriaService.obtenerCafeteriaPorId(id).subscribe(
      cafeteria => {
        this.cafeteria = cafeteria;
      },
      error => {
        console.error('Error al obtener la cafetería:', error);
        this.toastr.error('Error al obtener la cafetería', 'Error');
      }
    );
  }

  eliminarCafeteria(): void {
    if (this.cafeteria) {
      this.cafeteriaService.eliminarCafeteria(this.cafeteria.id).subscribe(
        () => {
          this.toastr.success('Cafetería eliminada exitosamente', 'Éxito');
          this.router.navigate(['/obtenerCafeterias']);
        },
        error => {
          console.error('Error al eliminar la cafetería:', error);
          this.toastr.error('Error al eliminar la cafetería', 'Error');
        }
      );
    }
  }
}
