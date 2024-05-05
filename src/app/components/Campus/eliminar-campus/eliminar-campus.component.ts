import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Campus } from '../../../models/Campus';
import { CampusService } from '../../../services/campus.service';

@Component({
  selector: 'app-eliminar-campus',
  templateUrl: './eliminar-campus.component.html',
  styleUrls: ['./eliminar-campus.component.scss']
})
export class EliminarCampusComponent implements OnInit {

  campus: Campus | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campusService: CampusService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerCampus(id);
    });
  }

  obtenerCampus(id: number): void {
    this.campusService.obtenerCampusPorId(id).subscribe(
      campus => {
        this.campus = campus;
      },
      error => {
        console.error('Error al obtener el campus:', error);
        this.toastr.error('Error al obtener el campus', 'Error');
      }
    );
  }

  eliminarCampus(): void {
    if (this.campus) {
      this.campusService.eliminarCampus(this.campus.id).subscribe(
        () => {
          this.toastr.success('Campus eliminado exitosamente', 'Éxito');
          this.router.navigate(['/obtenerCampus']);
        },
        error => {
          console.error('Error al eliminar el campus:', error);
          this.toastr.error('Error al eliminar el campus', 'Error');
        }
      );
    }
  }
}
