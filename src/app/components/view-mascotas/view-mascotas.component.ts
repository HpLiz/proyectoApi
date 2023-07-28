import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from './../../../services/mascotas.service';

@Component({
  selector: 'app-view-mascotas',
  templateUrl: './view-mascotas.component.html',
  styleUrls: ['./view-mascotas.component.css']
})
export class ViewMascotasComponent implements OnInit{

  constructor(private router: Router, private mascotasService: MascotasService) {}
  public pets: any = [];
  paginaActual = 1;

  ngOnInit(): void {
    this.cargarPets();
  }
  public cargarPets() {
    this.mascotasService
      .getPets(`http://localhost/apiVeterinaria/public/api/mascotas`)
      .subscribe((res: any) => {
        this.pets = res;
      });
  }
  

}
