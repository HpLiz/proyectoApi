import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioI } from '../app/modelos/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  ruta = "http://localhost/apiVeterinaria/public/api/usuarios";

  public getUsers(url: string) {
    return this.http.get(url);
  }
  public getUnUser(id: any){
    let direccion = this.ruta + "/" + id
    return this.http.get(direccion)
  }

  public registrar(usuario: UsuarioI) {
    return this.http.post(`${this.ruta}`, usuario);
  }
  /*  rutaApi = "http://localhost/apiVeterinaria/public/api/usuarios";


  registrar(usuario: UsuarioI) {
    return this.http.post(`${this.rutaApi}`, usuario);
  }

  actualizar(usuario: UsuarioI) {
    return this.http.put(`${this.rutaApi}`, usuario);
  }

  eliminar(id: string | number) {
    return this.http.delete(`${this.rutaApi}/?id=${id}`);
  }
  */
}
