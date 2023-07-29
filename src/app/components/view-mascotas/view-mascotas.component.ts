import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from './../../../services/mascotas.service';
import { ClientesService } from './../../../services/clientes.service';

@Component({
  selector: 'app-view-mascotas',
  templateUrl: './view-mascotas.component.html',
  styleUrls: ['./view-mascotas.component.css']
})
export class ViewMascotasComponent implements OnInit{

  constructor(private router: Router, private mascotasService: MascotasService,
    private clientesService: ClientesService) {}
  public pets: any = [];
  public clientes: any = [];
  paginaActual = 1;

  ngOnInit(): void {
    this.cargarPets();
    this.cargarClientes();
  }
  public cargarPets() {
    this.mascotasService
      .getPets(`http://localhost/apiVeterinaria/public/api/mascotas`)
      .subscribe((res: any) => {
        this.pets = res;
      });
  }
  public cargarClientes() {
    this.clientesService
      .getClientes(`http://localhost/apiVeterinaria/public/api/clientes`)
      .subscribe((res: any) => {
        this.clientes = res;
      });
  }

  public obtenerNombreUsuario(cliente_id: number): string {
    const usuarioEncontrado = this.clientes.find((user : any) => user.id === cliente_id);
    return usuarioEncontrado ? usuarioEncontrado.nombre : 'No encontrado';
  }

  borrarC(id: any){
    this.mascotasService.eliminar(id)
    .subscribe((res: any) => {
      console.log('Mascota eliminado:', res);
      this.cargarPets();
    }, (error: any) => {
      console.error('Error al eliminar la mascotas:', error);
    });
  }

}
