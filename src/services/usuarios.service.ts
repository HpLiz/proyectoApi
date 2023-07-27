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

  public registrar(usuario: any) {
    return this.http.post(this.ruta, usuario);
  }
  public actualizar(id: any, usuario: any) {
    let direccion = this.ruta + "/" + id
    return this.http.put(direccion, usuario);
  }

  public eliminar(id: number) {
    let direccion = this.ruta + "/" + id
    return this.http.delete(direccion);
  }
}
