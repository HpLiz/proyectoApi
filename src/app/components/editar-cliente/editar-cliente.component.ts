import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../services/clientes.service';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{
  constructor(private activerouter: ActivatedRoute, 
    private router: Router, 
    private clienteService: ClientesService,
    private usuariosService: UsuariosService
    ){}
  
  public cliente: any = {};

  ngOnInit() {
    this.cargarCliente();
    this.cargarUsuarios();
  }

  public users: any = [];
  
  public cargarUsuarios() {
    this.usuariosService
      .getUsers(`http://localhost/apiVeterinaria/public/api/usuarios`)
      .subscribe((res: any) => {
        this.users = res;
      });
  }
  
  
/*----------------------- Cargar datos ---------------------- */
  public cargarCliente() {
    const id = this.activerouter.snapshot.paramMap.get('id');
    this.clienteService
      .getUnCliente(id)
      .subscribe((res: any) => {
        if (res) {
          this.cliente = res;
        } else {
          console.log('Cliente no encontrado.');
        }
      });
  }

/*----------------------- Actualizar ---------------------- */
  actualizarCliente() {
    const datosActualizados = {
      nombre: this.cliente.nombre,
      usuarios_id: this.cliente.usuarios_id,
      apellido: this.cliente.apellido,
      direccion: this.cliente.direccion
    };
    const id = this.activerouter.snapshot.paramMap.get('id');
    this.clienteService.actualizar(id, datosActualizados)
      .subscribe((res: any) => {
        console.log('Cliente actualizado:', res);
        this.router.navigate(['/clientes-list']);
      }, (error: any) => {
        console.error('Error al actualizar el cliente:', error);
      });
  }
  regresar(){
    this.router.navigate(['/clientes-list']);
  }
}
