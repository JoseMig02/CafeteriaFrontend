import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode'; // Cambia la forma de importar jwt_decode
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtiene el token JWT del almacenamiento local
    const token = localStorage.getItem('token');

    // Clona la solicitud y agrega el encabezado de autorización si hay un token
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Continúa con la solicitud manipulada
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toastr.error('Acceso no autorizado. Debe iniciar sesión.');
          this.router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    );
  }
}

