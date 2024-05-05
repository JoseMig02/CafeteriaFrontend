import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProveedoresService } from '../../../services/proveedores.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.scss']
})
export class CrearProveedorComponent implements OnInit {
  proveedorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private proveedorService: ProveedoresService,
    private toastr: ToastrService
  ) {
    this.proveedorForm = this.fb.group({
      nombreComercial: ['', Validators.required],
      rnc: ['', Validators.required],
      fechaRegistro: ['', Validators.required], // Establecer la fecha de registro por defecto como la fecha actual
      estado: ['Activo', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  crearProveedor(): void {
    if (this.proveedorForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }

    if (this.proveedorForm.valid) {
      this.proveedorService.createProveedor(this.proveedorForm.value).subscribe(
        () => {
          this.toastr.success('Proveedor creado exitosamente', 'Éxito');
          this.proveedorForm.reset(); // Reiniciar el formulario después de la creación exitosa
        },
        error => {
          console.error('Error al crear proveedor:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }
}
