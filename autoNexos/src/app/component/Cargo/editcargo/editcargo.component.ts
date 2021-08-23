import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {CargoService} from '../../../service/cargo/cargo.service';
import {Cargo} from 'src/app/component/Models/cargo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcargo',
  templateUrl: './editcargo.component.html',
  styleUrls: ['./editcargo.component.css']
})
export class EditcargoComponent implements OnInit {

  public cargo: Cargo = new Cargo;
  public cargos: any = [];
  public titulo : string = "Cargo";

  constructor(private cargoService: CargoService
    , private activatedRoute: ActivatedRoute, private router: Router ) {   }




  ngOnInit(): void {
    this.cargarCargo();
  }


  
  cargarCargo():void{

    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.cargoService.getCargoId(id).subscribe( (cargo : any)=> this.cargo = cargo )
      
      }
    })
  }

        
        update():void{
          this.cargoService.updateCargo(this.cargo)
          .subscribe(usuario =>{
            console.log(this.cargo);
            this.router.navigate(['/cargos'])
            Swal.fire(
              'Hecho',
              'Cargo editado',
              'success'
            );   
          })
        }
 

}
