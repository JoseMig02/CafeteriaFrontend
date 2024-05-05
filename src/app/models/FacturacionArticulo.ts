export interface FacturacionArticulo {
    [x: string]: number;
    noFactura: number;
    empleadoID: number;
    articuloID: number;
    usuarioID: number;
    campusID: number;
    cafeteriaID: number;
    fechaVenta: Date |any;
    montoArticulo: number;
    Total?: number |any;
    unidadesVendidas: number;
    comentario?: string| any ;
    estado: string | any;
  }
  
  