import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FacturacionArticuloService } from '../../../services/facturacion-articulo.service';
import { CampusService } from '../../../services/campus.service';

@Component({
  selector: 'app-ventas-por-campus',
  templateUrl: './ventas-por-campus.component.html',
  styleUrls: ['./ventas-por-campus.component.scss']
})
export class VentasPorCampusComponent implements OnInit {
  ventasPorCampus: any[] = [];
  campusID: number = 0;
  campusList: any[] = [];

  constructor(
    private facturaService: FacturacionArticuloService, 
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private campusService: CampusService
  ) {}

  ngOnInit(): void {
    this.obtenerCampus();
    this.route.queryParams.subscribe(params => {
      this.campusID = params['campusID'];
   
    });
  }

  obtenerCampus(): void {
    this.campusService.obtenerCampus().subscribe(
      (campus: any[]) => {
        this.campusList = campus;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener la lista de campus');
      }
    );
  }

  obtenerVentasPorCampus(): void {
    this.facturaService.getVentasPorCampus(this.campusID).subscribe(
      (ventas: any[]) => {
        this.ventasPorCampus = ventas;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener las ventas por campus');
      }
    );
  }
}
