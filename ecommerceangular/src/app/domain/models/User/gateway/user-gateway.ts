import { Observable } from "rxjs";
import { User } from "../user";

export abstract class UserGateway{
    abstract login(email:string, password:string) : Observable<User>;
    abstract signup(user : User) : Observable<User>;
}