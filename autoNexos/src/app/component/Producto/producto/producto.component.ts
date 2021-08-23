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
    this. getUsuarios();
   
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

    cargarProducto():void{

      this.activatedRoute.params.subscribe(params=>{
        let id = params['id']
        if(id){
          this.productoService.getProductoId(id).subscribe( (producto : any)=> this.producto = producto )

         
        }
      })
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
          console.log( "DATA PRODUCTO " + this.producto.idUsuario);
          Swal.fire(
            'Hecho',
            'cargo creado',
            'success'
          );        
        
        },
          err => console.log(err)
        );
    } 

    delete(producto: Producto):void {

      this.usuarioService.getUsuarios()
      .subscribe(
        data => {
          this.usuarios = data;
          console.log(this.usuarios);
        },
        err => console.log(err)
      );

      this.productoService.getProductos()
      .subscribe(
        data => {
          this.productos = data;           
        },
        err => console.log(err)
      );

      if(this.usuarios.id != this.productos.idUsuario){
                
        Swal.fire(
          'Hecho',
          'No puede eliminar este producto',
          'success'
        ); 
      }



      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.productoService.delete(producto.id).subscribe(
            response =>{
               
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Usuario Eliminado con exito.',
                'success'
              )
              this.getUsuarios(); 
            }
          )
       
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }

}
