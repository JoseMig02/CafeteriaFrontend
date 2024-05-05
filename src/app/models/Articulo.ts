

 export interface Articulo {
  id: number;
  nombre: string;
  descripcion?: string;
  marcaID: number;
  precio: number;
  proveedorID: number;
  existencia: number;
  estado: string;
  img?: string;
}

