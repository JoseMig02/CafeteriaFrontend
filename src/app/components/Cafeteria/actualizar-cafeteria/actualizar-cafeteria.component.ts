import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cafeteria } from '../../../models/Cafeteria';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { Campus } from '../../../models/Campus';
import { CampusService } from '../../../services/campus.service';

@Component({
  selector: 'app-actualizar-cafeteria',
  templateUrl: './actualizar-cafeteria.component.html',
  styleUrls: ['./actualizar-cafeteria.component.scss']
})
export class ActualizarCafeteriaComponent implements OnInit {
  cafeteria!: Cafeteria;
  selectedFile!: File;
  imgUrl!: string;
  cafeteriaForm: FormGroup;
  campusList: Campus[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cafeteriaService: CafeteriaService,
    private campusService: CampusService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.cafeteriaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      encargado: ['', Validators.required],
      estado: ['', Validators.required],
      campusID: [null, [Validators.required, Validators.min(1)]],
      telefono: ['', Validators.pattern('[0-9]*')],
      img: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerCafeteria(id);
      this.obtenerCampus()
    });
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

  obtenerCafeteria(id: number): void {
    this.cafeteriaService.obtenerCafeteriaPorId(id).subscribe(
      cafeteria => {
        this.cafeteria = cafeteria;
        this.obtenerImagenCafeteria();
        this.cafeteriaForm.patchValue({
          nombre: cafeteria.nombre,
          direccion: cafeteria.direccion,
          descripcion: cafeteria.descripcion,
          encargado: cafeteria.encargado,
          estado: cafeteria.estado,
          campusID: cafeteria.campusID,
          telefono: cafeteria.telefono
        });
      },
      error => {
        console.error('Error al obtener la cafetería:', error);
        this.toastr.error(error.error, 'Error');
      }
    );
  }

  obtenerImagenCafeteria(): void {
    if (this.cafeteria && this.cafeteria.img) {
      this.cafeteriaService.obtenerImagenCafeteria(this.cafeteria.id).subscribe(
        imageUrl => {
          if (imageUrl instanceof Blob) {
            const url = URL.createObjectURL(imageUrl);
            this.imgUrl = url;
          } else {
            this.imgUrl = '../assets/default-cafeteria-image.jpg';
          }
        },
        error => {
          if (error.status !== 404) {
            console.error('Error al obtener imagen de la cafetería:', error);
            this.toastr.error(error.error, 'Error');
          }
        }
      );
    } else {
      this.toastr.error('Cafetería sin imagen', 'Error');
    }
  }

  actualizarCafeteria(): void {
    if (this.cafeteriaForm.invalid) {
      this.toastr.error('Por favor, completa correctamente el formulario', 'Error');
      return;
    }

    if (this.cafeteria) {
      this.cafeteriaService.actualizarCafeteria(this.cafeteria.id, this.cafeteriaForm.value).subscribe(
        () => {
          if (this.selectedFile) {
            this.cafeteriaService.subirImagenCafeteria(this.cafeteria.id, this.selectedFile).subscribe(
              () => {
                console.log('Imagen de la cafetería subida correctamente');
              },
              error => {
                console.error('Error al subir imagen de la cafetería:', error);
                this.toastr.error('Error al subir imagen de la cafetería', 'Error');
              }
            );
          }
          this.toastr.success('Cafetería actualizada exitosamente', 'Éxito');
          this.router.navigate(['/detallesCafeteria', this.cafeteria.id]);
        },
        error => {
          console.error('Error al actualizar la cafetería:', error);
          this.toastr.error(error.error, 'Error');
        }
      );
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

}
