import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private usuariosService: UsuariosService){}

  public user: any = {};
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  contrasenia: string = '';
  imagen: string = 'https://randomuser.me/api/portraits/lego/1.jpg';


  /*----------------------- Crear ---------------------- */
  public crearUser(){
    const datosNuevo = {
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.usuario,
      contrasenia: this.contrasenia,
      imagen: this.imagen
    };

    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasenia);

    this.usuariosService.registrar(datosNuevo)
      .subscribe((res: any) => {
        console.log('Usuario registrado:', res);
        this.router.navigate(['/login']);
      }, (error: any) => {
        console.error('Error al crear el usuario:', error);
      });
  }
  /*----------------------------- Validar ---------------------------- */
  public isFormValid = false;
  public c_con = '';
  public validarFormulario() {
    // Verificar que todos los campos requeridos estén llenos
    if (this.nombre && this.apellido && this.usuario && this.contrasenia && this.c_con) {
      // Verificar que las contraseñas coincidan
      this.isFormValid = this.validarContrasenias();
    } else {
      this.isFormValid = false;
    }
  }
  validarContrasenias(){
    return this.contrasenia === this.c_con;
  }
}
