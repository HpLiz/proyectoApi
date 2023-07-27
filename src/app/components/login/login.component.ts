import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router) {}
  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    contrasenia : new FormControl('',Validators.required)
  })

  
  ngOnInit(): void {
    
  }

  onLogin(form: any){
    console.log(form)
  }
}
