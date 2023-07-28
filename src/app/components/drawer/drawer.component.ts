import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  nombre: any = sessionStorage.getItem('nombre');
  correo: any = sessionStorage.getItem('correo');
  foto: any = sessionStorage.getItem('foto');

  logout() {
    sessionStorage.clear();
  }
}
