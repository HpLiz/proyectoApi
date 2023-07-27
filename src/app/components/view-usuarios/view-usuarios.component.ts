import { Component } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuariosService } from './../../../services/usuarios.service';

@Component({
  selector: 'app-view-usuarios',
  templateUrl: './view-usuarios.component.html',
  styleUrls: ['./view-usuarios.component.css']
})
export class ViewUsuariosComponent {
  constructor(private usuariosService: UsuariosService) {}
  public users: any = [];

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  public cargarUsuarios() {
    this.usuariosService
      .getUsers('http://localhost/apiVeterinaria/public/api/usuarios')
      .subscribe((res: any) => {
        this.users = res.results;
      });
  }
}
