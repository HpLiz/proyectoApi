import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ViewUsuariosComponent } from './components/view-usuarios/view-usuarios.component';
import { ViewClientesComponent } from './components/view-clientes/view-clientes.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ViewMascotasComponent } from './components/view-mascotas/view-mascotas.component';
import { XviewUsuariosComponent } from './components/xview-usuarios/xview-usuarios.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';

const rutas: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios-list', component: ViewUsuariosComponent },
  { path: 'crear-u', component: CrearUsuarioComponent },
  { path: 'editar-u/:id', component: EditarUsuarioComponent },
  { path: 'clientes-list', component: ViewClientesComponent },
  { path: 'crear-c', component: CrearClienteComponent },
  { path: 'editar-c/:id', component: EditarClienteComponent },
  { path: 'mascotas-list', component: ViewMascotasComponent },
  { path: 'viewinfo-u/:id', component: XviewUsuariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    DrawerComponent,
    ViewUsuariosComponent,
    ViewClientesComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ViewMascotasComponent,
    XviewUsuariosComponent,
    EditarClienteComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
