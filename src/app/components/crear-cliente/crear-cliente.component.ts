import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  constructor(private router: Router, private clientesService: ClientesService){}
  @ViewChild('modalRef', { static: false }) modalRef!: ElementRef;

  // Función para abrir el modal
  public abrirModal() {
    this.modalRef.nativeElement.showModal();
  }

  // Función para cerrar el modal
  public cerrarModal() {
    this.modalRef.nativeElement.close();
  }
  
  public cliente: any = {};
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  usuario_id: string = '';


  /*----------------------- Crear ---------------------- */
  public crearUser(){
    const datosNuevo = {
      nombre: this.nombre,
      apellido: this.apellido,
      usuario_id: this.usuario_id,
      direccion: this.direccion
    };

    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Medico:', this.usuario_id);
    console.log('Direccion:', this.direccion);

    this.clientesService.registrar(datosNuevo)
      .subscribe((res: any) => {
        console.log('Cliente registrado:', res);
        this.router.navigate(['/clientes-list']);
      }, (error: any) => {
        console.error('Error al crear el cliente:', error);
      });
  }
}
