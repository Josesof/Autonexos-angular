import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/Usuario/usuario/usuario.component';
import { EditusuarioComponent } from './component/Usuario/editusuario/editusuario.component';
import { CargoComponent } from './component/Cargo/cargo/cargo.component';
import { EditcargoComponent } from './component/Cargo/editcargo/editcargo.component';
import { ProductoComponent } from './component/Producto/producto/producto.component';
import { EditproductoComponent } from './component/Producto/editproducto/editproducto.component';

const routes: Routes = [
  {path: 'usuarios',component:UsuarioComponent},
  { path: 'editusuarios/:id', component: EditusuarioComponent },
  {path: 'cargos',component:CargoComponent},
  { path: 'editcargos/:id', component: EditcargoComponent },
  {path: 'productos',component:ProductoComponent},
  { path: 'editproductos/:id', component: EditproductoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
