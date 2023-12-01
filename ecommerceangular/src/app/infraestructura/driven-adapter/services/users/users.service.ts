import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { User } from 'src/app/domain/models/User/user';
import { GenericService } from 'src/app/infraestructura/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements UserGateway {

  constructor(private genericService : GenericService) { }
  signup(user: User): Observable<User> {
    return this.genericService.post<User>('https://run.mocky.io/v3/71a9dd68-99f7-4868-9229-022781f03b1f','',user);
  }

  login(email:string, password:string) : Observable<User>{
    return this.genericService.get<User>('https://run.mocky.io/v3/71a9dd68-99f7-4868-9229-022781f03b1f');
  }

}
