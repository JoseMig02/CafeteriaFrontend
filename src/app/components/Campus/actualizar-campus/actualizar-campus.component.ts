import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Campus } from '../../../models/Campus';
import { CampusService } from '../../../services/campus.service';

@Component({
  selector: 'app-actualizar-campus',
  templateUrl: './actualizar-campus.component.html',
  styleUrls: ['./actualizar-campus.component.scss']
})
export class ActualizarCampusComponent implements OnInit {
  campus: Campus | null = null;
  campusForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private campusService: CampusService,
    private toastr: ToastrService
  ) {
    this.campusForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      direccion: ['', Validators.required],
      descripcion: ['',Validators.required],
      estado: ['Activo', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerCampus(id);
    });
  }

  obtenerCampus(id: number): void {
    this.campusService.obtenerCampusPorId(id).subscribe(
      campus => {
        this.campus = campus;
        this.campusForm.patchValue({
          nombre: campus.nombre,
          direccion: campus.direccion,
          descripcion: campus.descripcion,
          estado: campus.estado
        });
      },
      error => {
        console.error('Error al obtener el campus:', error);
        this.toastr.error('Error al obtener el campus', 'Error');
      }
    );
  }

  actualizarCampus(): void {
    if (this.campusForm.invalid || !this.campus) {
      this.toastr.error('Por favor, complete todos los campos correctamente.', 'Error');
      return;
    }

    const campusActualizado: Campus = this.campusForm.value;

    this.campusService.actualizarCampus(this.campus.id, campusActualizado).subscribe(
      () => {
        this.toastr.success('Campus actualizado exitosamente', 'Éxito');
        this.router.navigate(['/obtenerCampus']);
      },
      error => {
        console.error('Error al actualizar el campus:', error);
        this.toastr.error('Error al actualizar el campus', 'Error');
      }
    );
  }
}
