import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { throwError} from 'rxjs';
import { Usuario } from 'src/app/component/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});    
  private urlApi: string = '//localhost:8080/api/'

 
  constructor(private http: HttpClient) {
 
   
  }

    /*Servicio que nos permite  traer todos los cargos */
    getUsuarios():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.urlApi + 'listarUsuarios');
      
  }

  /*Servicio que nos permite crear cargos en la api*/
  createUsuario(usuario: Usuario):Observable<Usuario>{
    console.log("Esto es lo que esta llegando" + usuario);
    
    return this.http.post<Usuario>(`${this.urlApi}/guardarUsuario`,usuario,{headers: this.httpHeaders})

}



    
  /*Servicio que nos permite traer los cargos por id*/
    getUsuarioId(id:number):Observable<Usuario[]>{
      return this.http.get<Usuario[]>(`${this.urlApi + 'verUsuario'}/${id}`);
    }
 
    /*Servicio que nos permite editar cargos en la api*/
     updateUsuario(usuario: Usuario):Observable<Usuario[]>{
      return this.http.post<Usuario[]>(`${this.urlApi + 'editarUsuario'}/${usuario.id}`,usuario,{headers: this.httpHeaders});
    }


    /*eliminar*/
    delete(id:number):Observable<Usuario[]>{
      return this.http.delete<Usuario[]>(`${this.urlApi + 'eliminarUsuario'}/${id}`,{headers: this.httpHeaders});
    }

}
