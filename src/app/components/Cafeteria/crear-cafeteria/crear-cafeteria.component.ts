import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Campus } from '../../../models/Campus';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { CampusService } from '../../../services/campus.service';
import { Cafeteria } from '../../../models/Cafeteria';

@Component({
  selector: 'app-crear-cafeteria',
  templateUrl: './crear-cafeteria.component.html',
  styleUrls: ['./crear-cafeteria.component.scss']
})
export class CrearCafeteriaComponent implements OnInit {

  cafeteriaForm: FormGroup;
  selectedFile!: File;
  campusList: Campus[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cafeteriaService: CafeteriaService,
    private campusService: CampusService,
    private toastr: ToastrService
  ) {
    this.cafeteriaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      encargado: ['', Validators.required],
      estado: ['', Validators.required],
      campusID: [null, [Validators.required, Validators.min(1)]], // Validador personalizado
      telefono: ['', Validators.pattern('[0-9]*')], // Campo de teléfono
      img: ['', Validators.required], // La imagen es obligatoria
    });
  }

  ngOnInit(): void {
    this.obtenerCampus();
  }

  obtenerCampus(): void {
    this.campusService.obtenerCampus().subscribe(
      (campus: Campus[]) => {
        this.campusList = campus;
      },
      error => {
        console.error(error);
        this.toastr.error('Error al obtener los campus');
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.cafeteriaForm.invalid) {
      this.toastr.error('Por favor, complete correctamente todos los campos');
      return;
    }

    if (!this.selectedFile) {
      this.toastr.error('Por favor, seleccione una imagen');
      return;
    }

    const cafeteriaData: Cafeteria = this.cafeteriaForm.value;

    this.cafeteriaService.crearCafeteria(cafeteriaData).subscribe(
      (response: any) => {
        console.log(response);
        const idCafeteria = response.id;
      
          this.cafeteriaService.subirImagenCafeteria(idCafeteria, this.selectedFile).subscribe(
            () => {
              this.toastr.success('Cafetería creada exitosamente');
              this.cafeteriaForm.reset();
            },
            error => {
              console.error(error);
              this.toastr.error('Error al subir la imagen de la cafetería');
            }
          );
        
      },
      error => {
        console.error(error);
        this.toastr.error('Error al crear la cafetería');
      }
    );
  }
}
