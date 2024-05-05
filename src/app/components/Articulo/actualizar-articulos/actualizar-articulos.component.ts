import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from '../../../models/Articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { Proveedor } from '../../../models/Proveedor';
import { Marca } from '../../../models/Marca';
import { ProveedoresService } from '../../../services/proveedores.service';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-actualizar-articulos',
  templateUrl: './actualizar-articulos.component.html',
  styleUrls: ['./actualizar-articulos.component.scss']
})
export class ActualizarArticulosComponent implements OnInit {
  articulo: Articulo | null = null;
  articuloForm: FormGroup;
  proveedores: Proveedor[] = [];
  marcas: Marca[] = [];
  selectedFile: File | null = null;
  displayDialog: boolean = false; // Variable para controlar la visibilidad del diálogo


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articuloService: ArticuloService,
    private proveedorService: ProveedoresService,
    private marcaService: MarcaService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.articuloForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descripcion: ['', Validators.required],
      existencia: [null, Validators.required],
      estado: ['', Validators.required],
      precio: [null, Validators.required],
      proveedorID: [null, Validators.required],
      marcaID: [null, Validators.required],
      img: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerArticulo(id);
      this.obtenerProveedores();
      this.obtenerMarcas();
    });
  }

  obtenerProveedores(): void {
    this.proveedorService.getAllProveedores().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los proveedores');
      }
    );
  }

  obtenerMarcas(): void {
    this.marcaService.getAllMarcas().subscribe(
      (marcas: Marca[]) => {
        this.marcas = marcas;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener las marcas');
      }
    );
  }

  obtenerArticulo(id: number): void {
    this.articuloService.obtenerArticuloPorId(id).subscribe(
      articulo => {
        this.articulo = articulo;
        this.articuloForm.patchValue({
          nombre: articulo.nombre,
          descripcion: articulo.descripcion,
          existencia: articulo.existencia,
          estado: articulo.estado,
          precio: articulo.precio,
          proveedorID: articulo.proveedorID,
          marcaID: articulo.marcaID,
          img: '' // Puede establecer una imagen predeterminada aquí si lo desea
        });
      },
      error => {
        console.error('Error al obtener el artículo:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  actualizarArticulo(): void {
    if (this.articuloForm.invalid || !this.articulo) {
      this.toastr.error('Por favor, completa correctamente el formulario', 'Error');
      return;
    }

    const articuloActualizado: Articulo = {
      ...this.articulo,
      nombre: this.articuloForm.value.nombre,
      descripcion: this.articuloForm.value.descripcion,
      existencia: this.articuloForm.value.existencia,
      estado: this.articuloForm.value.estado,
      precio: this.articuloForm.value.precio,
      proveedorID: this.articuloForm.value.proveedorID,
      marcaID: this.articuloForm.value.marcaID
    };

    this.articuloService.actualizarArticulo(this.articulo.id, articuloActualizado).subscribe(
      () => {
        if (this.selectedFile) {
          this.articuloService.subirImagenArticulo(this.articulo!.id, this.selectedFile).subscribe(
            () => {
              console.log('Imagen del artículo actualizada correctamente');
            },
            error => {
              console.error('Error al subir la imagen del artículo:', error);
              this.toastr.error('Error al subir la imagen del artículo', 'Error');
            }
          );
        }
        this.toastr.success('Artículo actualizado exitosamente', 'Éxito');
        this.router.navigate(['/obtenerArticulos']);
      },
      error => {
        console.error('Error al actualizar el artículo:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }



  















}
