import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private toastr:ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    // Verifica si hay un token presente en el almacenamiento local
    if (!token) {
      // Si no hay token, redirige al usuario a la página de inicio de sesión
      this.toastr.error('Acceso no autorizado. Debe iniciar sesión.');
      this.router.navigate(['/login']);
      return false; // Retorna false para indicar que la navegación no está permitida
    }

    // Si hay token, permite la navegación a la ruta solicitada
    return true;
  }
}
