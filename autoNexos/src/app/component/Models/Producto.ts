import { Usuario } from "./usuario";

export class Producto  {
    id: number;
    nombreProducto: string;
    cantidad: number;
    fechaIngreso: string;
    idUsuario : number;

    constructor() {
        this.id = 0;
        this.nombreProducto = "";
        this.cantidad = 0;
        this.fechaIngreso = "";
        this.idUsuario = 0;
       
    }
}