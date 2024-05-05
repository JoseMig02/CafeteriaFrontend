import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Login } from '../../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
    private router: Router
  ) {
    // Inicializamos loginForm como un FormGroup vacío al momento de la creación del componente
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) {
      this.toastr.error('Por favor, completa todos los campos.', 'Error');
      return;
    }

    const usuario:Login = this.loginForm.value;
    
    this.userService.iniciarSesion(usuario).subscribe({
      next: (token: string) => {
        console.log(token)
        this.toastr.success('Bienvenido')
        localStorage.setItem('token', token);
        this.router.navigate(['/obtenerTipoUsuario']);
      },
      error: (err: HttpErrorResponse) => {
        
        this.toastr.error(err.error.msg, "Error")
      }
    });
  }
}
