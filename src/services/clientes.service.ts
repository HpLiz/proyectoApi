import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ClientesService {
    constructor(private http: HttpClient) {}
  
    public getClientes(url: string) {
      return this.http.get(url);
    }
}
  