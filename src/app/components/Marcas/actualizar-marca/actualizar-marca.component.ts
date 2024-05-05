import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../../models/Marca';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.scss']
})
export class ActualizarMarcaComponent implements OnInit {
  marca: Marca | null = null;
  marcaForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private marcaService: MarcaService,
    private toastr: ToastrService
  ) {
    this.marcaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['',Validators.required],
      estado: ['Activo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerMarca(id);
    });
  }

  obtenerMarca(id: number): void {
    this.marcaService.getMarcaById(id).subscribe(
      marca => {
        this.marca = marca;

        this.marcaForm.patchValue({
          nombre: marca.nombre,
          descripcion: marca.descripcion,
          estado: marca.estado
        });
      },
      error => {
        console.error('Error al obtener marca:', error);
        this.toastr.error('Error al obtener la marca', 'Error');
      }
    );
  }

  actualizarMarca(): void {
   
    if (this.marcaForm.invalid) {
      this.toastr.error('Por favor, complete todos los campos correctamente.', 'Error');
      return;
    }

    if (!this.marca) {
      this.toastr.error('No se pudo obtener la marca', 'Error');
      return;
    }

    const marcaActualizada: Marca = this.marcaForm.value

    this.marcaService.updateMarca(this.marca.id, marcaActualizada).subscribe(
      () => {
        this.toastr.success('Marca actualizada exitosamente', 'Éxito');
        this.router.navigate(['/obtenerMarcas']);
      },
      error => {
        console.error('Error al actualizar marca:', error);
        this.toastr.error('Error al actualizar la marca', 'Error');
      }
    );
  }
}
