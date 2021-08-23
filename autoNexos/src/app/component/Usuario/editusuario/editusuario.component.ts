import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../service/usuario/usuario.service';
import {Usuario} from 'src/app/component/Models/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {
  public usuario: Usuario = new Usuario;
  public usuarios: any = [];
  public titulo : string = "Usuario";

  constructor(private usuarioService: UsuarioService
    , private activatedRoute: ActivatedRoute, private router: Router ) {   }

  ngOnInit(): void {
    this.cargarUsuario();
  }


  cargarUsuario():void{

    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.usuarioService.getUsuarioId(id).subscribe( (usuario : any)=> this.usuario = usuario )
      
      }
    })
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
