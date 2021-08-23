import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { MainComponent } from './component/Main/main/main.component';
import { HomeComponent } from './component/Home/home/home.component';
import { UsuarioComponent } from './component/Usuario/usuario/usuario.component';
import { EditusuarioComponent } from './component/Usuario/editusuario/editusuario.component';
import { CargoComponent } from './component/Cargo/cargo/cargo.component';
import { EditcargoComponent } from './component/Cargo/editcargo/editcargo.component';
import { ProductoComponent } from './component/Producto/producto/producto.component';
import { EditproductoComponent } from './component/Producto/editproducto/editproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    UsuarioComponent,
    EditusuarioComponent,
    CargoComponent,
    EditcargoComponent,
    ProductoComponent,
    EditproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
