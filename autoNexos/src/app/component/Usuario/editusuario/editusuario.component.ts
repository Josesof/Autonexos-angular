import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../service/usuario/usuario.service';
import {Usuario} from 'src/app/component/Models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import {CargoService} from '../../../service/cargo/cargo.service';
import {Cargo} from 'src/app/component/Models/cargo';


@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {
  public usuario: Usuario = new Usuario;
  public usuarios: any = [];
  public titulo : string = "Usuario";

  public cargo: Cargo = new Cargo;
  public cargos: any = [];

  constructor(private usuarioService: UsuarioService,private cargoService: CargoService
    , private activatedRoute: ActivatedRoute, private router: Router ) {   }

  ngOnInit(): void {
    this.cargarUsuario();
    this.getCargos();
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

        
        update():void{
          this.usuarioService.updateUsuario(this.usuario)
          .subscribe(usuario =>{
            console.log(this.usuario);
            this.router.navigate(['/usuarios'])
            Swal.fire(
              'Hecho',
              'Usuario editado',
              'success'
            );   
          })
        }

        

}
