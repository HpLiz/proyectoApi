import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private router: Router, 
    private usuariosService: UsuariosService)  {}
    public users: any = [];
    public user: any = {};
    public userf: any = {};
    usuario: string = '';
    contrasenia: string = '';
    warning: boolean = false;
    warningMessage: string = '';

    ngOnInit() {
      this.cargarUsuarios();
    }
    public cargarUsuarios() {
      this.usuariosService
        .getUsers(`http://localhost/apiVeterinaria/public/api/usuarios`)
        .subscribe((res: any) => {
          this.users = res;
          /*this.user = this.users[this.users.length - 1];
          sessionStorage.setItem('nombre', this.user.nombre + this.user.apellido);
          sessionStorage.setItem('correo', this.user.usuario);
          sessionStorage.setItem('contrasenia', this.user.contrasenia);
          sessionStorage.setItem('foto', this.user.imagen);*/
        });
    }
    public obtenerNombreUsuario(usuario_n: string): string {
      this.userf = this.users.find((user: any) => user.usuario === usuario_n);
      return this.userf ? this.userf.nombre : 'No encontrado';
    }
    /*----------------------------- Validar ---------------------------- */
    
    public isFormValid = false;
    public ingresar() {
      if(this.validarCredenciales()){
        this.router.navigate(['/home']);
      }else{
        this.warningMessage =
          'Usuario o contraseña incorrectos';
        this.warning = true;
      }
    }
  public validarFormulario(){
    if (this.usuario && this.contrasenia) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  }
  validarCredenciales(){
    this.obtenerNombreUsuario(this.usuario);
    if(this.usuario===this.userf.usuario && this.contrasenia===this.userf.contrasenia){
      this.user = this.users[this.users.length - 1];
          sessionStorage.setItem('nombre', this.userf.nombre + this.userf.apellido);
          sessionStorage.setItem('correo', this.userf.usuario);
          sessionStorage.setItem('contrasenia', this.userf.contrasenia);
          sessionStorage.setItem('foto', this.userf.imagen);
      return true;
    }else{
      return false;
    }
  }
  
    
}
