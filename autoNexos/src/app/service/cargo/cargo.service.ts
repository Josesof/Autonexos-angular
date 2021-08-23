import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { throwError} from 'rxjs';

import { Cargo } from 'src/app/component/Models/cargo';

@Injectable({
  providedIn: 'root'
})




export class CargoService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});    
  private urlApi: string = '//localhost:8080/api/'
    

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

  constructor(private http: HttpClient) {
 
   
  }

    /*Servicio que nos permite  traer todos los cargos */
    getCargos():Observable<Cargo[]>{
      return this.http.get<Cargo[]>(this.urlApi + 'listarCargos');
      
  }

  /*Servicio que nos permite crear cargos en la api*/
  createCargo(cargo: Cargo):Observable<Cargo>{
    console.log("Esto es lo que esta llegando" + cargo);
    
    return this.http.post<Cargo>(`${this.urlApi}/guardarCargo`,cargo,{headers: this.httpHeaders})

}



    /*Servicio que nos consultar cargo cargos en la api*/

    getCargoId(id:number):Observable<Cargo[]>{
      return this.http.get<Cargo[]>(`${this.urlApi + 'ver/'}/${id}`);
    }
 
      /*Servicio que nos permite editar cargos en la api*/
     updateCargo(cargo: Cargo):Observable<Cargo[]>{
      return this.http.post<Cargo[]>(`${this.urlApi + 'editarCargo/'}/${cargo.id}`,cargo,{headers: this.httpHeaders});
    }

  

  


  /*eliminar*/
  delete(id:number):Observable<Cargo[]>{
    return this.http.delete<Cargo[]>(`${this.urlApi + 'eliminarCargo'}/${id}`,{headers: this.httpHeaders});
  } 
}
