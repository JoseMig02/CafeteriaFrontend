// crear-articulo.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Articulo } from '../../../models/Articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { Proveedor } from '../../../models/Proveedor';
import { Marca } from '../../../models/Marca';
import { ProveedoresService } from '../../../services/proveedores.service';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.scss']
})
export class CrearArticuloComponent implements OnInit {

  articuloForm: FormGroup;
  selectedFile: File | null = null;
  proveedores: Proveedor[] = [];
  marcas: Marca[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private articuloService: ArticuloService,
    private proveedoresService: ProveedoresService,
    private marcaService: MarcaService,
    private toastr: ToastrService
  ) {
    this.articuloForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descripcion: [''],
      marcaID: [null, Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      proveedorID: [null, Validators.required],
      existencia: [null, [Validators.required, Validators.min(0)]],
      estado: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.obtenerProveedores();
    this.obtenerMarcas();
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }


  onSubmit() {
    console.log(this.articuloForm.value)
    if (this.articuloForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }

    if (!this.selectedFile) {
      this.toastr.error('Por favor, seleccione una imagen');
      return;
    }

    const articuloData: Articulo = this.articuloForm.value;

    this.articuloService.crearArticulo(articuloData).subscribe(
      (response: any) => {
        const idArticulo = response.id;
        this.subirImagen(idArticulo);
      },
      error => {
        console.log(error)
        console.error('Error al crear el artículo:', error);
        this.toastr.error('Error al crear el artículo');
      }
    );
  }

  private subirImagen(idArticulo: number): void {
    if (this.selectedFile) {
      this.articuloService.subirImagenArticulo(idArticulo, this.selectedFile).subscribe(
        () => {
          this.toastr.success('Artículo creado exitosamente');
          this.articuloForm.reset();
        },
        error => {
          console.error('Error al subir la imagen del artículo:', error);
          this.toastr.error('Error al subir la imagen del artículo');
        }
      );
    }
  }

  private obtenerProveedores(): void {
    this.proveedoresService.getAllProveedores().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
      },
      error => {
        console.error('Error al obtener los proveedores:', error);
        this.toastr.error('Error al obtener los proveedores');
      }
    );
  }

  private obtenerMarcas(): void {
    this.marcaService.getAllMarcas().subscribe(
      (marcas: Marca[]) => {
        this.marcas = marcas;
      },
      error => {
        console.error('Error al obtener las marcas:', error);
        this.toastr.error('Error al obtener las marcas');
      }
    );
  }
}
