import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { UsuarioI } from '../../modelos/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost/apiVeterinaria/public/api/usuarios"

  constructor(private http: HttpClient) { }

  loginByEmail(form:LoginI){
    let direccion = this.url;
    return this.http.post(direccion,form);
  }
}
