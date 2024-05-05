import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/usuario/login/login.component';
import { ObtenerUsuariosComponent } from './components/usuario/obtener-usuarios/obtener-usuarios.component';
import {AuthInterceptor} from '../app/utils/auth.interceptor';
import { DetallesUsuariosComponent } from './components/usuario/detalles-usuarios/detalles-usuarios.component';
import { ActualizarUsuariosComponent } from './components/usuario/actualizar-usuarios/actualizar-usuarios.component';
import { CommonModule } from '@angular/common';
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
import { DetallesFacturacionArticuloComponent } from './components/FacturacionArticulo/detalles-facturacion-articulo/detalles-facturacion-articulo.component';
import { ActualizarFacturacionArticulosComponent } from './components/FacturacionArticulo/actualizar-facturacion-articulos/actualizar-facturacion-articulos.component';
import { VentasPorUsuarioComponent } from './components/ventas/ventas-por-usuario/ventas-por-usuario.component';
import { VentasPorFechaComponent } from './components/ventas/ventas-por-fecha/ventas-por-fecha.component';
import { VentasPorCampusComponent } from './components/ventas/ventas-por-campus/ventas-por-campus.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ObtenerUsuariosComponent,
    DetallesUsuariosComponent,
    ActualizarUsuariosComponent,
    CrearTipoUsuarioComponent,
    ObtenerTiposUsuarioComponent,
    ActualizarTiposUsuariosComponent,
    EliminarTiposUsuariosComponent,
    CrearProveedorComponent,
    ObtenerProveedorComponent,
    ActualizarProveedorComponent,
    EliminarProveedorComponent,
    CrearMarcaComponent,
    ObtenerMarcasComponent,
    ActualizarMarcaComponent,
    EliminarMarcaComponent,
    CrearEmpleadoComponent,
    ObtenerEmpleadosComponent,
    DetallesEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EliminarEmpleadoComponent,
    ExportarEmpleadosComponent,
    CrearCampusComponent,
    ObtenerCampusComponent,
    ActualizarCampusComponent,
    EliminarCampusComponent,
    CrearCafeteriaComponent,
    ObtenerCafeteriasComponent,
    DetallesCafeteriaComponent,
    ActualizarCafeteriaComponent,
    EliminarCafeteriaComponent,
    CrearArticuloComponent,
    ObtenerArticulosComponent,
    ActualizarArticulosComponent,
    CrearFacturacionArticuloComponent,
    ObtenerFacturacionArticulosComponent,
    DetallesFacturacionArticuloComponent,
    ActualizarFacturacionArticulosComponent,
    VentasPorUsuarioComponent,
    VentasPorFechaComponent,
    VentasPorCampusComponent,
    
    
    
   
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   BrowserAnimationsModule, 
   ReactiveFormsModule,
   FormsModule,
   CommonModule,
   ButtonModule,
   CalendarModule,
   SkeletonModule,
   DialogModule,
   ConfirmDialogModule,
   ToastModule,
   
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

  ],
  providers: [ 
    { 
      
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, 
    multi: true 
  },
  ConfirmationService,
  MessageService,
  DialogService,
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
