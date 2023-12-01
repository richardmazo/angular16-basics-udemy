import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //implementar la logica de validación y generación del token o lo requerido
        const tokenJson = localStorage.getItem('token');
        const token = tokenJson ? JSON.parse(tokenJson) : null;
        if(token.expiry < Date.now()){
            //Consumir api de generación de token
        }
        const headers = req.clone({
            headers : req.headers.set('Authoriztion',`Bearer ${token.token}`)
        })
        return next.handle(headers);
    }


}