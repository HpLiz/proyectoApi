import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from './../../../services/clientes.service';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'app-view-clientes',
  templateUrl: './view-clientes.component.html',
  styleUrls: ['./view-clientes.component.css']
})
export class ViewClientesComponent implements OnInit{

  constructor(
    private activerouter: ActivatedRoute, 
    private router: Router, 
    private clientesService: ClientesService,
    private usuariosService: UsuariosService
  ) {}
  public clientes: any = [];
  public user: any = {};
  paginaActual = 1;

  ngOnInit(): void {
    this.cargarClientes();
  }
  public cargarClientes() {
    this.clientesService
      .getClientes(`http://localhost/apiVeterinaria/public/api/clientes`)
      .subscribe((res: any) => {
        this.clientes = res;
      });
  }
  editarC(id: any){
    this.router.navigate(['editar-c',id])
  }
  borrarC(id: any){
    this.clientesService.eliminar(id)
    .subscribe((res: any) => {
      console.log('Cliente eliminado:', res);
      this.cargarClientes();
    }, (error: any) => {
      console.error('Error al eliminar el cliente:', error);
    });
  }

  /*----------------------- Cargar medico ---------------------- 
  public cargarUsuario(id: any) {
    this.usuariosService
      .getUnUser(id)
      .subscribe((res: any) => {
        if (res) {
          this.user = res;
        } else {
          console.log('Usuario no encontrado.');
        }
      });
  }*/
}
