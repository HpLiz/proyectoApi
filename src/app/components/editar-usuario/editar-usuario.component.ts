import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioI } from '../../modelos/usuario.interface';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{

  constructor(private activerouter: ActivatedRoute, private router: Router, private usuariosService: UsuariosService){}
  
  public user: any = {};
  nombre: string = '';

  ngOnInit() {
    this.cargarUsuario();
  }
  
  public cargarUsuario() {
    const id = this.activerouter.snapshot.paramMap.get('id');
    this.usuariosService
      .getUnUser(id)
      .subscribe((res: any) => {
        if (res) {
          this.user = res;
        } else {
          console.log('Usuario no encontrado.');
        }
      });
  }

}
