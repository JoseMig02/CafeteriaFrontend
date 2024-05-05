import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FacturacionArticulo } from '../../../models/FacturacionArticulo';
import { FacturacionArticuloService } from '../../../services/facturacion-articulo.service';
import { Empleado } from '../../../models/Empleado';
import { Usuario } from '../../../models/usuario';
import { Campus } from '../../../models/Campus';
import { Cafeteria } from '../../../models/Cafeteria';
import { EmpleadoService } from '../../../services/empleado.service';
import { UsuarioService } from '../../../services/usuario.service';
import { CampusService } from '../../../services/campus.service';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { ArticuloService } from '../../../services/articulo.service'
import { Articulo } from '../../../models/Articulo';

@Component({
  selector: 'app-actualizar-facturacion-articulos',
  templateUrl: './actualizar-facturacion-articulos.component.html',
  styleUrls: ['./actualizar-facturacion-articulos.component.scss']
})
export class ActualizarFacturacionArticulosComponent implements OnInit {
  factura!: FacturacionArticulo;
  facturaForm: FormGroup;
  empleados: Empleado[] = [];
  usuarios: Usuario[] = [];
  campus: Campus[] = [];
  cafeterias: Cafeteria[] = [];
  articulos: Articulo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private facturaService: FacturacionArticuloService,
    private empleadoService: EmpleadoService,
    private usuarioService: UsuarioService,
    private campusService: CampusService,
    private cafeteriaService: CafeteriaService,
    private articuloService:ArticuloService,
    private toastr: ToastrService
  ) {
    this.facturaForm = this.fb.group({
      empleadoID: [null, Validators.required],
      usuarioID: [null, Validators.required],
      campusID: [null, Validators.required],
      cafeteriaID: [null, Validators.required],
      estado: ['Activo', Validators.required],
      articuloID: [null, Validators.required],
      fechaVenta: [null, Validators.required],
      montoArticulo: [null, [Validators.required, Validators.min(0)]],
      unidadesVendidas: [null, [Validators.required, Validators.min(1)]],
      comentario: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerFactura(id);
    });

    this.obtenerEmpleados();
    this.obtenerUsuarios();
    this.obtenerCampus();
    this.obtenerCafeterias();
    this.obtenerArticulos();
  }

  obtenerFactura(id: number): void {
    this.facturaService.getFacturacionArticuloById(id).subscribe(
      factura => {
        this.factura = factura;

        this.facturaForm.patchValue({
          empleadoID: factura.empleadoID,
          usuarioID: factura.usuarioID,
          campusID: factura.campusID,
          cafeteriaID: factura.cafeteriaID,
          estado: factura.estado,
          articuloID: factura.articuloID,
          fechaVenta: factura.fechaVenta,
          montoArticulo: factura.montoArticulo,
          unidadesVendidas: factura.unidadesVendidas,
          comentario: factura.comentario
        });
      },
      error => {
        console.error('Error al obtener factura:', error);
        this.toastr.error('Error al obtener la factura', 'Error');
      }
    );
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerTodosUsuarios().subscribe(
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
  actualizarFactura(): void {
    if (this.facturaForm.invalid) {
      this.toastr.error('Por favor, complete todos los campos correctamente.', 'Error');
      return;
    }

    if (!this.factura) {
      this.toastr.error('No se pudo obtener la factura', 'Error');
      return;
    }

    const facturaActualizada: FacturacionArticulo = this.facturaForm.value;

    this.facturaService.updateFacturacionArticuloById(this.factura.noFactura, facturaActualizada).subscribe(
      () => {
        this.toastr.success('Factura actualizada exitosamente', 'Éxito');
        this.router.navigate(['/obtenerFacturaciones']);
      },
      error => {
        console.error('Error al actualizar factura:', error);
        this.toastr.error('Error al actualizar la factura', 'Error');
      }
    );
  }
}
