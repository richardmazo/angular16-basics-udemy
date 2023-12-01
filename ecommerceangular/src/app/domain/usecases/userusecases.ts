import { Injectable } from "@angular/core";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User } from "../models/User/user";

@Injectable({
    providedIn: 'root'
})
export class UserUseCase{

    constructor(
        private _userGateway:UserGateway
    ){}

    login(email:string, password:string){
        //Se implementa todo lo correspondiente a la logica de negocio
        //Llamar al servicio de login
        //retorna usuario
        //Llama al servicio de notificacion
        //Retorna informacion para el front
        return this._userGateway.login(email,password);
    }

    signup(user : User){
        return this._userGateway.signup(user);
    }
}