import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../service/usuario/usuario.service';
import {ProductoService} from '../../../service/producto/producto.service';
import {Usuario} from 'src/app/component/Models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import {Producto} from 'src/app/component/Models/producto';

@Component({
  selector: 'app-editproducto',
  templateUrl: './editproducto.component.html',
  styleUrls: ['./editproducto.component.css']
})
export class EditproductoComponent implements OnInit {

  public producto: Producto = new Producto;
  public productos: any = [];
  public titulo : string = "Producto";
  public usuario: Usuario = new Usuario;
  public usuarios: any = [];
 

  constructor(private productoService: ProductoService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute, private router: Router ) {   }

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto():void{

    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.productoService.getProductoId(id).subscribe( (producto : any)=> this.producto = producto )
      
      }
    })
  }

        
        update():void{
          this.productoService.updateProducto(this.producto)
          .subscribe(producto =>{
            console.log(this.producto);
            this.router.navigate(['/productos'])
            Swal.fire(
              'Hecho',
              'Producto editado',
              'success'
            );   
          })
        }

}
