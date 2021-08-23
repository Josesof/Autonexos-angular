import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {CargoService} from '../../../service/cargo/cargo.service';
import {Cargo} from 'src/app/component/Models/cargo';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  public cargo: Cargo = new Cargo;
  public cargos: any = [];
  public titulo : string = "Cargo";
 


  constructor(private cargoService: CargoService ) {   }
  
  

  ngOnInit(): void {
    this.getCargos();   
   
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



      /* metodo para guardar el cargo */
  public saveCargo():void {
    
      this.cargoService.createCargo(this.cargo)
        .subscribe(reponse => {
          console.log(this.cargo.nombreCargo);
          
          Swal.fire(
            'Hecho',
            'cargo creado',
            'success'
          );        
        
        },
          err => console.log(err)
        );
    } 

    delete(cargo: Cargo):void {


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
          this.cargoService.delete(cargo.id).subscribe(
            response =>{
               
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Usuario Eliminado con exito.',
                'success'
              )
              this.getCargos(); 
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






