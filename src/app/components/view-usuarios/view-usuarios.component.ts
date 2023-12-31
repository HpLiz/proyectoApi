import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './../../../services/usuarios.service';

@Component({
  selector: 'app-view-usuarios',
  templateUrl: './view-usuarios.component.html',
  styleUrls: ['./view-usuarios.component.css']
})
export class ViewUsuariosComponent implements OnInit{
  constructor(private router: Router, private usuariosService: UsuariosService) {}
  public users: any = [];
  paginaActual = 1;

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

  editarU(id: any){
    this.router.navigate(['editar-u',id])
  }
  borrarU(id: any){
    this.usuariosService.eliminar(id)
    .subscribe((res: any) => {
      console.log('Usuario eliminado:', res);
      this.cargarUsuarios();
    }, (error: any) => {
      console.error('Error al eliminar el usuario:', error);
    });
  }

  /*ver(id: any){
    this.router.navigate(['/viewinfor-u',id]);
  }*/
}
