import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../../services/usuario.service';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { EmpleadoService } from '../../../services/empleado.service';
import { CampusService } from '../../../services/campus.service';
import { ArticuloService } from '../../../services/articulo.service';
import { FacturacionArticuloService } from '../../../services/facturacion-articulo.service';

@Component({
  selector: 'app-crear-facturacion-articulo',
  templateUrl: './crear-facturacion-articulo.component.html',
  styleUrls: ['./crear-facturacion-articulo.component.scss']
})
export class CrearFacturacionArticuloComponent implements OnInit {
  facturaForm: FormGroup;
  usuarios: any[] = [];
  cafeterias: any[] = [];
  empleados: any[] = [];
  campus: any[] = [];
  articulos: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
    private cafeteriaService: CafeteriaService,
    private empleadoService: EmpleadoService,
    private campusService: CampusService,
    private articuloService: ArticuloService,
    private facturaService: FacturacionArticuloService,
    private toastr: ToastrService
  ) {
    this.facturaForm = this.formBuilder.group({
      empleadoID: [null, Validators.required],
      usuarioID: [null, Validators.required],
      campusID: [null, Validators.required],
      cafeteriaID: [null, Validators.required],
      articuloID: [null, Validators.required],
      fechaVenta: [new Date(), Validators.required],
      montoArticulo: [null, [Validators.required, Validators.min(0)]],
      unidadesVendidas: [null, [Validators.required, Validators.min(1)]],
      comentario: [''],
      estado: ['Activo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerCafeterias();
    this.obtenerEmpleados();
    this.obtenerCampus();
    this.obtenerArticulos();
  }

  obtenerUsuarios(): void {
    this.userService.obtenerTodosUsuarios().subscribe(
      (usuarios: any[]) => {
        this.usuarios = usuarios;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los usuarios');
      }
    );
  }

  obtenerCafeterias(): void {
    this.cafeteriaService.obtenerCafeterias().subscribe(
      (cafeterias: any[]) => {
        this.cafeterias = cafeterias;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener las cafeterías');
      }
    );
  }

  obtenerEmpleados(): void {
    this.empleadoService.getAllEmpleados().subscribe(
      (empleados: any[]) => {
        this.empleados = empleados;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los empleados');
      }
    );
  }

  obtenerCampus(): void {
    this.campusService.obtenerCampus().subscribe(
      (campus: any[]) => {
        this.campus = campus;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los campus');
      }
    );
  }

  obtenerArticulos(): void {
    this.articuloService.obtenerArticulos().subscribe(
      (articulos: any[]) => {
        this.articulos = articulos;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los artículos');
      }
    );
  }

  guardarFacturaArticulo(): void {
    if (this.facturaForm.invalid) {
      this.toastr.error('Por favor, completa correctamente el formulario', 'Error');
      return;
    }
    console.log(this.facturaForm.value)

    const facturaData = this.facturaForm.value;

    // Lógica para guardar la factura del artículo
    this.facturaService.createFacturacionArticulo(facturaData).subscribe(
      () => {
        this.toastr.success('Factura del artículo creada correctamente', 'Éxito');
        this.facturaForm.reset()
        // Lógica adicional, como redireccionar a otra página, etc.
      },
      error => {
        console.error(error);
        console.log(error)
        this.toastr.error('Error al crear la factura del artículo', 'Error');
      }
    );
  }
}
