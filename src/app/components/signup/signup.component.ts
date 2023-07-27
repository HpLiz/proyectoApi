import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router) { }

  email: string = '';
  password: string = '';
  fullname: string = '';
  disableLoginButton: boolean = false;
  warning: boolean = false;
  warningMessage: string = '';

  signup(event: Event) {
    // alert(`email: ${this.email}, password: ${this.password}`);
    // this.validar();
    event.preventDefault();
    const user: object = {
      email: this.email,
      password: this.password,
      fullname: this.fullname,
    };

    if (this.validar()) {
      sessionStorage.setItem('email', this.email);
      // sessionStorage.setItem('password', this.password);
      sessionStorage.setItem('fullname', this.fullname);

      this.router.navigate(['/home']);
    }
  }

  login(event: Event) {
    this.router.navigate(['/login']);
  }

  emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  fullnameRegex = /^[a-zA-Z\s]+$/;

  validar() {
    if (!this.fullname || !this.password) {
      // alert();
      this.warningMessage = 'Todos los campos son obligatorios.';
      this.warning = true;
      return false;
    }

    // validar nombre
    if (!this.fullnameRegex.test(this.fullname)) {
      this.warningMessage = 'El nombre solo puede contener letras y numeros.';
      this.warning = true;
      return false;
    }
    
    // validar password
    if (this.password.length < 6) {
      this.warningMessage = 'La constraseña debe contener al menos 6 caracteres.';
      this.warning = true;
      return false;
    }

    // validar email
    if (!this.emailregex.test(this.email)) {
      this.warningMessage = 'Correo electrónico inválido.';
      this.warning = true;
      return false;
    }
    return true;
  }
  
}
