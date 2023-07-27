import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{

  constructor(private activerouter: ActivatedRoute, private router: Router, private usuariosService: UsuariosService){}
  
  public user: any = {};

  ngOnInit() {
    this.cargarUsuario();
  }
  
  
/*----------------------- Cargar datos ---------------------- */
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

/*----------------------- Actualizar ---------------------- */
  actualizarUser() {
    const datosActualizados = {
      nombre: this.user.nombre,
      apellido: this.user.apellido,
      usuario: this.user.usuario,
      contrasenia: this.user.contrasenia,
      imagen: this.user.imagen
    };
    const id = this.activerouter.snapshot.paramMap.get('id');
    this.usuariosService.actualizar(id, datosActualizados)
      .subscribe((res: any) => {
        console.log('Usuario actualizado:', res);
        this.router.navigate(['/usuarios-list']);
      }, (error: any) => {
        console.error('Error al actualizar el usuario:', error);
      });
  }
/*----------------------- Eliminar ---------------------- */

/*----------------------- Expandir ---------------------- */
}
