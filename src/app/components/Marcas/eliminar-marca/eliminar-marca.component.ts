import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../../models/Marca';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: ['./eliminar-marca.component.scss']
})
export class EliminarMarcaComponent implements OnInit {

  marca: Marca | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marcaService: MarcaService,
    private toastr: ToastrService
  ) {}

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
      },
      error => {
        console.error('Error al obtener la marca:', error);
        this.toastr.error('Error al obtener la marca', 'Error');
      }
    );
  }

  eliminarMarca(): void {
    if (this.marca) {
      this.marcaService.deleteMarca(this.marca.id).subscribe(
        () => {
          this.toastr.success('Marca eliminada exitosamente', 'Éxito');
          this.router.navigate(['/obtenerMarcas']);
        },
        error => {
          console.error('Error al eliminar la marca:', error);
          this.toastr.error('Error al eliminar la marca', 'Error');
        }
      );
    }
  }
}
