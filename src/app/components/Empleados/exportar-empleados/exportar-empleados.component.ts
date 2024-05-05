import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from '../../../services/empleado.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-exportar-empleados',
  templateUrl: './exportar-empleados.component.html',
  styleUrls: ['./exportar-empleados.component.scss']
})
export class ExportarEmpleadosComponent  {

  constructor(
    private empleadoService: EmpleadoService,
    private toastr: ToastrService
  ) {}

  exportarEmpleadosPDF(): void {
    this.empleadoService.exportarEmpleadosPDF().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
  
        // Crear un enlace oculto
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'empleados.pdf';
  
        // Simular clic en el enlace para iniciar la descarga
        document.body.appendChild(anchor);
        anchor.click();
  
        // Limpiar y liberar el objeto URL
        window.URL.revokeObjectURL(url);
        document.body.removeChild(anchor);
      },
      error => {
        console.error('Error al exportar empleados a PDF:', error);
        this.toastr.error('Error al exportar empleados a PDF', 'Error');
      }
    );
  }
  
}
