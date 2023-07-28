import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ClientesService {
    constructor(private http: HttpClient) {}

    ruta = "http://localhost/apiVeterinaria/public/api/clientes";
  
    public getClientes(url: string) {
      return this.http.get(url);
    }

    public getUnCliente(id: any){
      let direccion = this.ruta + "/" + id
      return this.http.get(direccion)
    }
  
    public registrar(cliente: any) {
      return this.http.post(this.ruta, cliente);
    }
    public actualizar(id: any, cliente: any) {
      let direccion = this.ruta + "/" + id
      return this.http.put(direccion, cliente);
    }
  
    public eliminar(id: number) {
      let direccion = this.ruta + "/" + id
      return this.http.delete(direccion);
    }
}
  