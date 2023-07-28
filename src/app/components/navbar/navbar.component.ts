import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nombre: any = sessionStorage.getItem('nombre');
  correo: any = sessionStorage.getItem('correo');
  foto: any = sessionStorage.getItem('foto');
  @Input() textNavbar?: string = '';

  logout() {
    sessionStorage.clear();
  }
}
