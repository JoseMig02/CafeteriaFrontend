 export interface Empleado {
    id: any;
    nombre: string;
    cedula: string;
    tandaLabor: string;
    cargo: string;
    porcientoComision: number;
    fechaIngreso: Date;
    estado: string;
    imagen?: string; // La imagen es opcional ya que puede no estar presente en todos los registros
  }
  
