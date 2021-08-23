import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../service/usuario/usuario.service';
import {Usuario} from 'src/app/component/Models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import {CargoService} from '../../../service/cargo/cargo.service';
import {Cargo} from 'src/app/component/Models/cargo';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario;
  public usuarios: any = [];
  public titulo : string = "Usuario";

  public cargo: Cargo = new Cargo;
  public cargos: any = [];




  constructor(private usuarioService: UsuarioService,private cargoService: CargoService
    , private activatedRoute: ActivatedRoute, private router: Router ) {   }
  
  

  ngOnInit(): void {
    this.getUsuarios();   
    this.getCargos(); 
   
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
    cargarUsuario():void{

      this.activatedRoute.params.subscribe(params=>{
        let id = params['id']
        if(id){
          this.usuarioService.getUsuarioId(id).subscribe( (usuario : any)=> this.usuario = usuario )

         
        }
      })
    }

       /* Obtener la lista de todos los cargos creados */
       getCargos() {
        this.cargoService.getCargos()
          .subscribe(
            data => {
              this.cargos = data;
              console.log(this.cargos);
            },
            err => console.log(err)
          );
      }



      /* metodo para guardar el Usuario */
  public saveUsuario():void {
    
      this.usuarioService.createUsuario(this.usuario)
        .subscribe(reponse => {                  
          Swal.fire(
            'Hecho',
            'Usuario creado',
            'success'
          );        
        
        },
          err => console.log(err)
        );
    } 



    delete(usuario: Usuario):void {


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
          this.usuarioService.delete(usuario.id).subscribe(
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
