import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { ObtenerUsuariosComponent } from './components/usuario/obtener-usuarios/obtener-usuarios.component';
import {AuthGuard} from './utils/auth-redirect.guard'
import {AdminGuard} from './utils/admin-guard.guard'
import { DetallesUsuariosComponent } from './components/usuario/detalles-usuarios/detalles-usuarios.component';
import { ActualizarUsuariosComponent } from './components/usuario/actualizar-usuarios/actualizar-usuarios.component';
import { CrearTipoUsuarioComponent } from './components/TipoUsuario/crear-tipo-usuario/crear-tipo-usuario.component';
import { ObtenerTiposUsuarioComponent } from './components/TipoUsuario/obtener-tipos-usuarios/obtener-tipos-usuarios.component';
import { ActualizarTiposUsuariosComponent } from './components/TipoUsuario/actualizar-tipos-usuarios/actualizar-tipos-usuarios.component';
import { EliminarTiposUsuariosComponent } from './components/TipoUsuario/eliminar-tipos-usuarios/eliminar-tipos-usuarios.component';
import { CrearProveedorComponent } from './components/Proveedoreres/crear-proveedor/crear-proveedor.component';
import { ObtenerProveedorComponent } from './components/Proveedoreres/obtener-proveedor/obtener-proveedor.component';
import { ActualizarProveedorComponent } from './components/Proveedoreres/actualizar-proveedor/actualizar-proveedor.component';
import { EliminarProveedorComponent } from './components/Proveedoreres/eliminar-proveedor/eliminar-proveedor.component';
import { CrearMarcaComponent } from './components/Marcas/crear-marca/crear-marca.component';
import { ObtenerMarcasComponent } from './components/Marcas/obtener-marcas/obtener-marcas.component';
import { ActualizarMarcaComponent } from './components/Marcas/actualizar-marca/actualizar-marca.component';
import { EliminarMarcaComponent } from './components/Marcas/eliminar-marca/eliminar-marca.component';
import { CrearEmpleadoComponent } from './components/Empleados/crear-empleado/crear-empleado.component';
import { ObtenerEmpleadosComponent } from './components/Empleados/obtener-empleados/obtener-empleados.component';
import { DetallesEmpleadoComponent } from './components/Empleados/detalles-empleado/detalles-empleado.component';
import { ActualizarEmpleadoComponent } from './components/Empleados/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './components/Empleados/eliminar-empleado/eliminar-empleado.component';
import { ExportarEmpleadosComponent } from './components/Empleados/exportar-empleados/exportar-empleados.component';
import { CrearCampusComponent } from './components/Campus/crear-campus/crear-campus.component';
import { ObtenerCampusComponent } from './components/Campus/obtener-campus/obtener-campus.component';
import { ActualizarCampusComponent } from './components/Campus/actualizar-campus/actualizar-campus.component';
import { EliminarCampusComponent } from './components/Campus/eliminar-campus/eliminar-campus.component';
import { CrearCafeteriaComponent } from './components/Cafeteria/crear-cafeteria/crear-cafeteria.component';
import { ObtenerCafeteriasComponent } from './components/Cafeteria/obtener-cafeterias/obtener-cafeterias.component';
import { DetallesCafeteriaComponent } from './components/Cafeteria/detalles-cafeteria/detalles-cafeteria.component';
import { ActualizarCafeteriaComponent } from './components/Cafeteria/actualizar-cafeteria/actualizar-cafeteria.component';
import { EliminarCafeteriaComponent } from './components/Cafeteria/eliminar-cafeteria/eliminar-cafeteria.component';
import { CrearArticuloComponent } from './components/Articulo/crear-articulo/crear-articulo.component';
import { ObtenerArticulosComponent } from './components/Articulo/obtener-articulos/obtener-articulos.component';
import { ActualizarArticulosComponent } from './components/Articulo/actualizar-articulos/actualizar-articulos.component';
import { CrearFacturacionArticuloComponent } from './components/FacturacionArticulo/crear-facturacion-articulo/crear-facturacion-articulo.component';
import { ObtenerFacturacionArticulosComponent } from './components/FacturacionArticulo/obtener-facturacion-articulos/obtener-facturacion-articulos.component';
import { ActualizarFacturacionArticulosComponent } from './components/FacturacionArticulo/actualizar-facturacion-articulos/actualizar-facturacion-articulos.component';
import { VentasPorUsuarioComponent } from './components/ventas/ventas-por-usuario/ventas-por-usuario.component';
import { VentasPorFechaComponent } from './components/ventas/ventas-por-fecha/ventas-por-fecha.component';
import { VentasPorCampusComponent } from './components/ventas/ventas-por-campus/ventas-por-campus.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'registro', component: RegistroComponent }, 
  { path: 'login', component: LoginComponent } ,
  { path: 'obtenerUsuarios', component: ObtenerUsuariosComponent,canActivate: [AuthGuard,AdminGuard]},
  { path: 'detallesUsuarios/:id', component: DetallesUsuariosComponent,canActivate: [AuthGuard,AdminGuard]},
  { path: 'actualizarUsuarios/:id', component: ActualizarUsuariosComponent,canActivate: [AuthGuard,AdminGuard]},
  { path: 'crearTipoUsuario', component: CrearTipoUsuarioComponent,canActivate: [AuthGuard]},

  { path: 'obtenerTipoUsuario', component: ObtenerTiposUsuarioComponent,canActivate: [AuthGuard]},
  { path: 'actualizarTipoUsuario/:id', component: ActualizarTiposUsuariosComponent,canActivate: [AuthGuard]},
  { path: 'eliminarTipoUsuario/:id', component: EliminarTiposUsuariosComponent,canActivate: [AuthGuard]},

  { path: 'crearProveedor', component: CrearProveedorComponent,canActivate: [AuthGuard]},
  { path: 'obtenerProveedores', component: ObtenerProveedorComponent,canActivate: [AuthGuard]},
  { path: 'actualizarProveedores/:id', component: ActualizarProveedorComponent,canActivate: [AuthGuard]},
  { path: 'eliminarProveedores/:id', component: EliminarProveedorComponent,canActivate: [AuthGuard]},

  { path: 'crearMarca', component: CrearMarcaComponent,canActivate: [AuthGuard]},
  { path: 'obtenerMarcas', component: ObtenerMarcasComponent,canActivate: [AuthGuard]},
  { path: 'ActualizarMarca/:id', component: ActualizarMarcaComponent,canActivate: [AuthGuard]},
  { path: 'EliminarMarca/:id', component: EliminarMarcaComponent,canActivate: [AuthGuard]},
  

  { path: 'crearEmpleado', component: CrearEmpleadoComponent,canActivate: [AuthGuard]},
  { path: 'obtenerEmpleados', component: ObtenerEmpleadosComponent,canActivate: [AuthGuard]},
  { path: 'detallesEmpleado/:id', component: DetallesEmpleadoComponent,canActivate: [AuthGuard]},
  { path: 'actualizarEmpleado/:id', component: ActualizarEmpleadoComponent,canActivate: [AuthGuard]},
  { path: 'eliminarEmpleado/:id', component: EliminarEmpleadoComponent,canActivate: [AuthGuard]},
  { path: 'exportarEmpleados', component: ExportarEmpleadosComponent,canActivate: [AuthGuard]},

  { path: 'crearCampus', component: CrearCampusComponent,canActivate: [AuthGuard]},
  { path: 'obtenerCampus', component: ObtenerCampusComponent,canActivate: [AuthGuard]},
  { path: 'actualizarCampus/:id', component: ActualizarCampusComponent,canActivate: [AuthGuard]},
  { path: 'eliminarCampus/:id', component: EliminarCampusComponent,canActivate: [AuthGuard]},  

  { path: 'crearCafeteria', component: CrearCafeteriaComponent,canActivate: [AuthGuard]},  
  { path: 'obtenerCafeterias', component: ObtenerCafeteriasComponent,canActivate: [AuthGuard]},
  { path: 'detallesCafeteria/:id', component: DetallesCafeteriaComponent,canActivate: [AuthGuard]},
  { path: 'actualizarCafeteria/:id', component: ActualizarCafeteriaComponent,canActivate: [AuthGuard]},
  { path: 'eliminarCafeteria/:id', component: EliminarCafeteriaComponent,canActivate: [AuthGuard]},

  { path: 'crearArticulo', component: CrearArticuloComponent,canActivate: [AuthGuard]},
  { path: 'obtenerArticulos', component: ObtenerArticulosComponent,canActivate: [AuthGuard]},
  { path: 'actualizarArticulo/:id', component: ActualizarArticulosComponent,canActivate: [AuthGuard]},


  { path: 'crearFacturacionArticulo', component: CrearFacturacionArticuloComponent,canActivate: [AuthGuard]},
  { path: 'obtenerFacturaciones', component: ObtenerFacturacionArticulosComponent,canActivate: [AuthGuard]},
  { path: 'actualizarFactura/:id', component: ActualizarFacturacionArticulosComponent,canActivate: [AuthGuard]},

  { path: 'ventasPorUsuarios', component: VentasPorUsuarioComponent,canActivate: [AuthGuard]},
  { path: 'ventasPorFechas', component: VentasPorFechaComponent,canActivate: [AuthGuard]},
  { path: 'ventasPorCampus', component: VentasPorCampusComponent,canActivate: [AuthGuard]},




];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
