import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Se deben agregar para porder utilzar la BD de FireBase
//Requerir AngularFire
import { AngularFireModule } from "@angular/fire";
import {  AngularFireDatabaseModule } from "@angular/fire/database";
//Importar Archivo environment.ts para cargar la configuracion AngularFireModule
import { environment } from "../environments/environment";

//Componentes del Proyecto
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserComponent } from './components/users/user/user.component';

//Servicios del Proyecto
import { UserService } from "./services/user.service";

import {CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserComponent
  ],
  //Para inyectar los modulos y poder hacer uso dentro de la App BrowserModule,NgModule,
  //AppComponent,AngularFireDatabaseModule

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  //Proveedor para poder utilizar el metodo en todos los componente
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
