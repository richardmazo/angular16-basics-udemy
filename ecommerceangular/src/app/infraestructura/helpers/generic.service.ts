import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, concat, concatMap, delay, of, retryWhen, take, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class GenericService{

    constructor(
        private http:HttpClient,
        private router: Router
    ){}

    public get<T>(url?:string, endpoint?:string, params?:string) : Observable<any>{
        const endpointUri = params ? `${endpoint}/` : `${endpoint}`
        return this.http.get<T>(`${url}/${endpoint}` + (params ?? ''))
            .pipe(
                retryWhen(errors => errors.pipe(
                    concatMap((result:any) =>{
                        if(result.code === 504){
                            return of(result);
                        }
                        return throwError(result);
                    }),
                    delay(1000),
                    take(4),
                    o => concat(o, throwError(`No fue posible conectarse al servicio`))
                )),
                catchError((err: HttpErrorResponse) => {
                    return this.handleError(err);
                })
            )
    }

    public post<T>(url?:string, endpoint?:string, model?:any){
        return this.http.post<T>(`${url}/${endpoint}`,model)
    }

    public put<T>(){

    }

    public patch<T>(){

    }

    public delete<T>(){

    }

    handleError(error: HttpErrorResponse): any {
        if(error.error != null && error.error.message === 'No Auth'){
            this.router.navigate(['/']);
            localStorage.clear();
        }

        let messageError = error.error != null && error.error.errores != undefined && error.error.errores.length > 0 ?
            'Presenta el siguiente error: <p><b>' + error.error.errores[0].description + '</b></p>' : '.';

            messageError = error.error === '.' && error.error.errores != undefined ?
            'Presenta el siguiente error: <p><b>' + error.error.errores[0].description + '</b></p>' : '.';

        return throwError(error);

    }

}