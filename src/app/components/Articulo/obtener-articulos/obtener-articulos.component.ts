import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from '../../../models/Articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { ProveedoresService } from '../../../services/proveedores.service';
import { MarcaService } from '../../../services/marca.service';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
        

@Component({
  selector: 'app-obtener-articulos',
  templateUrl: './obtener-articulos.component.html',
  styleUrls: ['./obtener-articulos.component.scss']
})
export class ObtenerArticulosComponent implements OnInit {
  articulos: Articulo[] = [];
  selectedArticulo: Articulo | null = null;
  displayDialog: boolean = false;
  proveedor: any;
  marca: any;

  constructor(
    private articuloService: ArticuloService,
    private proveedoresService: ProveedoresService,
    private marcaService: MarcaService,
    private toastr: ToastrService,
    private router:Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  obtenerArticulos(): void {
    this.articuloService.obtenerArticulos().subscribe(
      (articulos: Articulo[]) => {
        this.articulos = articulos.map(articulo => ({ ...articulo, img: "" }));
        this.obtenerImagenesArticulos(); 
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los artículos');
      }
    );
  }

  obtenerImagenesArticulos(): void {
    this.articulos.forEach(articulo => {
      this.articuloService.obtenerImagenArticulo(articulo.id).subscribe(
        imagen => {
          if (imagen instanceof Blob) {
            const url = URL.createObjectURL(imagen);
            articulo.img = url;
          }
        },
        error => {
          console.error('Error al obtener la imagen del artículo:', error);
          this.toastr.error('Error al obtener la imagen del artículo');
        }
      );
    });
  }

  obtenerProveedorNombre(idProveedor: number): void {
    this.proveedoresService.getProveedorById(idProveedor).subscribe(
      (proveedor: any) => {
        this.proveedor = proveedor;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener el proveedor');
      }
    );
  }

  obtenerMarcaNombre(idMarca: number): void {
    this.marcaService.getMarcaById(idMarca).subscribe(
      (marca: any) => {
        this.marca = marca;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener la marca');
      }
    );
  }

  showDetails(articulo: Articulo): void {
    this.selectedArticulo = articulo;
    this.obtenerProveedorNombre(articulo.proveedorID);
    this.obtenerMarcaNombre(articulo.marcaID);
    this.displayDialog = true;
  }

  hideDetails(): void {
    this.displayDialog = false;
  }
  actualizar(id: number): void {
    this.router.navigate(['/actualizarArticulo', id]);
  }




  confirm1(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}

eliminarArticulo(id: number): void {
  this.confirmationService.confirm({
    message: '¿Estás seguro de que quieres eliminar este artículo?',
    header: 'Confirmación',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sí',
    rejectLabel: 'No',
    acceptButtonStyleClass: 'p-button-danger',
    accept: () => {
      // Lógica para eliminar el artículo
      this.articuloService.eliminarArticulo(id).subscribe(
        () => {
          // Eliminación exitosa, puedes actualizar la lista de artículos si es necesario
          this.toastr.success('Artículo eliminado correctamente', 'Éxito');
          // Cerrar el diálogo después de eliminar el artículo
          this.hideDetails();
          // Actualizar la lista de artículos después de eliminar
          this.router.navigate(['/obtenerArticulos']);
        },
        error => {
          // Manejo de errores
          console.error('Error al eliminar el artículo:', error);
          this.toastr.error('Error al eliminar el artículo', 'Error');
        }
      );
    },
    reject: () => {
      // Acción de rechazo, no se hace nada
    }
  });
}


}

