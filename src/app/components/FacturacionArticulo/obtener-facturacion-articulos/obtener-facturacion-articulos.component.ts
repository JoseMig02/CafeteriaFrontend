import { Component, OnInit } from '@angular/core';
import { FacturacionArticulo } from '../../../models/FacturacionArticulo';
import { FacturacionArticuloService } from '../../../services/facturacion-articulo.service';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';
import { DetallesFacturacionArticuloComponent } from '../detalles-facturacion-articulo/detalles-facturacion-articulo.component';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-obtener-facturacion-articulos',
  templateUrl: './obtener-facturacion-articulos.component.html',
  styleUrls: ['./obtener-facturacion-articulos.component.scss']
})
export class ObtenerFacturacionArticulosComponent implements OnInit {
  facturacionArticulos: FacturacionArticulo[] = [];
  facturaSeleccionada: FacturacionArticulo | undefined;
  displayDialog: boolean = false;

  constructor(
    private facturaService: FacturacionArticuloService,
    private toastr: ToastrService,
    private dialogService: DialogService,
    private router:Router,
    private confirmationService:ConfirmationService
  ) {}

  ngOnInit(): void {
    this.obtenerFacturacionArticulos();
  }

  obtenerFacturacionArticulos(): void {
    this.facturaService.getAllFacturacionArticulos().subscribe(
      (facturacionArticulos: FacturacionArticulo[]) => {
        this.facturacionArticulos = facturacionArticulos;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener la facturación de artículos');
      }
    );
  }

  mostrarDetalleFactura(factura: FacturacionArticulo): void {
    this.facturaSeleccionada = factura;
  
  }
  showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }
  actualizar(id: number): void {
    this.router.navigate(['/actualizarFactura', id]);
  }

  eliminarFactura(id: number): void {
    this.facturaService.deleteFacturacionArticuloById(id).subscribe(
      () => {
        this.toastr.success('Factura eliminada correctamente');
        this.obtenerFacturacionArticulos()
      },
      error => {
        console.error(error);
        this.toastr.error('Error al eliminar la factura');
      }
    );
  }


  confirm2(id:number) {
    this.confirmationService.confirm({
      
        message: 'Do you want to delete this bill?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
          this.eliminarFactura(id)
            
        },
        reject: () => {
          
        }
    });
  }

  irAVentasPorUsuario(): void {
    this.router.navigate(['/ventasPorUsuarios']);
  }

  irAVentasPorFecha(): void {
    this.router.navigate(['/ventasPorFechas']);
  }

  irAVentasPorCampus(): void {
    this.router.navigate(['/ventasPorCampus']);
  }

}
