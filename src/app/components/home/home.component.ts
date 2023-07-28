import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private usuariosService: UsuariosService) {}
  users: any = [];

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  public cargarUsuarios() {
    this.usuariosService
      .getUsers(`http://localhost/apiVeterinaria/public/api/usuarios`)
      .subscribe((res: any) => {
        this.users = res;
      });
  }
}
