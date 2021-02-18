import { Injectable } from '@angular/core';

//Importo el servicio firebase esto con el fin validar, eliminar, listar, editar, ingresar
//*AngularFireDatabase= Se utiliza para realizar la conexion a Firebase
//*
import { AngularFireDatabase,AngularFireList } from "@angular/fire/database";

//Importo la clase user para poder hacer la inserción
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Para listar en Firebase en tablas se utiliza lo siguiente
  // <any>: Es un tipo de definición de los tipos de datos que trae firebase
  userList: AngularFireList<any>;

  //Declaración de variable temporal para efectos de que en nuestra interfaz se seleccione un registro y este pueda ser
  //Seleccionado para su visualización, edición y eliminación
  //Cuando se inicie el servicio 'selectUser' estará en blanco porque no se ejecutado ninguna selección.
  selectedUser: User = new User();

  //Para poder utilizar la conexion a Firebase se debe declarar dentro del constructor de manera Privada
  constructor(private firebase: AngularFireDatabase) { }

  /*Metodos para ser reutilizados en los componentes declarados:*/

  //getUser(): Se obtiene en este caso los usuarios contenidos en la BD
  getUser(){
      return this.userList = this.firebase.list('users');
  }
  //insertUser(user: User): Inserta en la base de datos utilizando el userList, esta se instancia con el modelo User
  insertUser(user: User){

    this.userList.push({
      name:     user.$name,
      user:     user.$user,
      password: user.$password,
      email:    user.$email

    });
  }
  //updateUser(user: User): Edita la selección del usuario, esta se instancia con el modelo User
  updateUser(user: User){
    this.userList.update(user.$key, {
      name:     user.$name,
      user:     user.$user,
      password: user.$password,
      email:    user.$email

    });
  }
 //deleteuser($key: string): se procede a eliminar de userList con la llave en este caso $key
 //que declarada en el modelo User como string.
  deleteuser($key: string){
    this.userList.remove($key)
  }

}
