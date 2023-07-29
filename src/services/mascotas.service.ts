import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  constructor(private http: HttpClient) {}
  
  ruta = "http://localhost/apiVeterinaria/public/api/mascotas";

  public getPets(url: string) {
    return this.http.get(url);
    }

    public eliminar(id: number) {
      let direccion = this.ruta + "/" + id
      return this.http.delete(direccion);
    }
}