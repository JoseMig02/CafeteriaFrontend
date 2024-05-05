import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      console.log(decodedToken)
      if (decodedToken.tipoUsuarioID === 5) {
        return true; // Permite el acceso a los administradores
      } else {
        // Muestra un mensaje Toastr y permite al usuario permanecer en la página actual
        this.toastr.error('No tienes permiso para acceder a esta funcionalidad.');
        this.router.navigate(['/obtenerTipoUsuario']);
        return false;
      }
    }

    // Si no hay un token, redirige al login
    this.toastr.error('Acceso no autorizado. Debe iniciar sesión.');
    this.router.navigate(['/login']);
    return false;
  }
}
