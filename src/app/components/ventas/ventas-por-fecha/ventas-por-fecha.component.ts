import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FacturacionArticuloService } from '../../../services/facturacion-articulo.service'; 

@Component({
  selector: 'app-ventas-por-fecha',
  templateUrl: './ventas-por-fecha.component.html',
  styleUrls: ['./ventas-por-fecha.component.scss']
})
export class VentasPorFechaComponent implements OnInit {
  ventasPorFecha: any[] = [];
  fechaInicio: string = '2024-01-01';
  fechaFin: string = '2024-12-01';

  constructor(
    private facturaService: FacturacionArticuloService, 
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerVentasPorFecha();
  }

  onChangeFecha(): void {
    if (this.fechaInicio && this.fechaFin) {
      this.obtenerVentasPorFecha();
    }
  }

  obtenerVentasPorFecha(): void {
    if(this.fechaInicio > this.fechaFin){
      this.toastr.error('La Fecha de fin tiene que ser superior a la fecha de inicio')
    }
    this.facturaService.getVentasPorFecha(this.fechaInicio, this.fechaFin).subscribe(
      (ventas: any[]) => {
        this.ventasPorFecha = ventas;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener las ventas por fecha');
      }
    );
  }
}
