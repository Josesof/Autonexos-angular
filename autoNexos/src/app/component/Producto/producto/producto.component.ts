import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ProductoService} from '../../../service/producto/producto.service';
import {Producto} from 'src/app/component/Models/producto';
import {UsuarioService} from '../../../service/usuario/usuario.service';
import {Usuario} from 'src/app/component/Models/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public producto: Producto = new Producto;
  public productos: any = [];
  public titulo : string = "Producto";
  public usuario: Usuario = new Usuario;
  public usuarios: any = [];
 

  constructor(private productoService: ProductoService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute, private router: Router  ) {   }
  
  

  ngOnInit(): void {
    this.getProductos(); 
  
   
  }



    /* Obtener la lista de todos los cargos creados */
    getProductos() {
      this.productoService.getProductos()
        .subscribe(
          data => {
            this.productos = data;           
          },
          err => console.log(err)
        );
    }

        /* Obtener la lista de todos los cargos creados */
        getUsuarios() {
          this.usuarioService.getUsuarios()
            .subscribe(
              data => {
                this.usuarios = data;
                console.log(this.usuarios);
              },
              err => console.log(err)
            );
        }



      /* metodo para guardar el cargo */
  public saveProducto():void {    
      this.productoService.createProducto(this.producto)
        .subscribe(reponse => {   
          
          Swal.fire(
            'Hecho',
            'cargo creado',
            'success'
          );        
        
        },
          err => console.log(err)
        );
    } 

}
