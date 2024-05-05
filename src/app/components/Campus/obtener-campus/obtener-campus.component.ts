
import { Component, OnInit } from '@angular/core';
import { Campus } from '../../..//models/Campus';
import { CampusService } from '../../../services/campus.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterConfigOptions } from '@angular/router';


@Component({
  selector: 'app-obtener-campus',
  templateUrl: './obtener-campus.component.html',
  styleUrls: ['./obtener-campus.component.scss']
})
export class ObtenerCampusComponent implements OnInit {
  campusList: Campus[] = [];


  constructor(
    private campusService: CampusService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerCampus();
  }

  obtenerCampus(): void {
    this.campusService.obtenerCampus()
      .subscribe(
        (campus: Campus[]) => {
          this.campusList = campus;
        },
        error => {
          console.error('Error al obtener la lista de campus:', error);
          this.toastr.error('Error al obtener la lista de campus', 'Error');
        }
      );
  }
  actualizar(id: number): void {
    this.router.navigate(['/actualizarCampus', id]);
  }
  eliminar(id: number): void {
    this.router.navigate(['/eliminarCampus', id]);
  }
}
