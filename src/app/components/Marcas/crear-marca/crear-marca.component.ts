
// crear-marca.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../../models/Marca';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.scss']
})
export class CrearMarcaComponent implements OnInit {
  marcaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private marcaService: MarcaService,
    private toastr: ToastrService
  ) {
    this.marcaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['',Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  crearMarca(): void {
    if (this.marcaForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }
    this.marcaService.createMarca(this.marcaForm.value).subscribe(
      () => {
        this.toastr.success('Marca creada exitosamente', 'Éxito');
        // this.router.navigate(['/obtenerMarcas']);
      },
      error => {
        console.error('Error al crear marca:', error);
        this.toastr.error('Error al crear marca', 'Error');
      }
    );
  }
}

