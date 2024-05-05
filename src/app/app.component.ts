import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router desde '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {} // Inyecta Router en el constructor

  ngOnInit(): void {
    // Aquí puedes agregar cualquier inicialización que necesites
  }

  LogOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
