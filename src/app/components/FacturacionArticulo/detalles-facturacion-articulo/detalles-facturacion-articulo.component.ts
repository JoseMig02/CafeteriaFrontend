import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-facturacion-articulo',
  templateUrl: './detalles-facturacion-articulo.component.html',
  styleUrls: ['./detalles-facturacion-articulo.component.scss']
})
export class DetallesFacturacionArticuloComponent implements OnInit {
  @Input() factura: any;
  displayDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('Factura recibida:', this.factura); // Imprimir la factura en la consola
  }

  
}
