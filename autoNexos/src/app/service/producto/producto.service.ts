import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { throwError} from 'rxjs';

import { Producto } from 'src/app/component/Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});    
  private urlApi: string = '//localhost:8080/api/'
    

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

  constructor(private http: HttpClient) {
 
   
  }

    /*Servicio que nos permite  traer todos los cargos */
    getProductos():Observable<Producto[]>{
      return this.http.get<Producto[]>(this.urlApi + 'listarProductos');
      
  }

  /*Servicio que nos permite crear cargos en la api*/
  createProducto(producto: Producto):Observable<Producto>{
    console.log("Esto es lo que esta llegando" + producto);
    
    return this.http.post<Producto>(`${this.urlApi}/guardarProducto`,producto,{headers: this.httpHeaders})

}
  
     /*Servicio que nos permite traer los cargos por id*/
    getProductoId(id:number):Observable<Producto[]>{
      return this.http.get<Producto[]>(`${this.urlApi + 'verProducto/'}/${id}`);
    }

   
  
       /*Servicio que nos permite editar cargos en la api*/
     updateProducto(producto: Producto):Observable<Producto[]>{
      return this.http.post<Producto[]>(`${this.urlApi + 'editarProducto/' }/${producto.id}`,producto,{headers: this.httpHeaders});
    }

    

      /*eliminar*/
      delete(id:number):Observable<Producto[]>{
        return this.http.delete<Producto[]>(`${this.urlApi + 'eliminarProducto'}/${id}`,{headers: this.httpHeaders});
      }
}
