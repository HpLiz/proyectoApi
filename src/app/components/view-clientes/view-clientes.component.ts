import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from './../../../services/clientes.service';

@Component({
  selector: 'app-view-clientes',
  templateUrl: './view-clientes.component.html',
  styleUrls: ['./view-clientes.component.css']
})
export class ViewClientesComponent implements OnInit{

  constructor(private router: Router, private clientesService: ClientesService) {}
  public clientes: any = [];

  ngOnInit(): void {
    this.cargarClientes();
  }
  public cargarClientes() {
    this.clientesService
      .getClientes(`http://localhost/apiVeterinaria/public/api/clientes`)
      .subscribe((res: any) => {
        this.clientes = res;
      });
  }

}
