import { Usuario } from "./usuario";

export class Producto  {
    id: number;
    nombreProducto: string;
    cantidad: number;
    fechaIngreso: string;
    usuario: Usuario;

    constructor() {
        this.nombreProducto = "";
        this.cantidad = 0;
        this.fechaIngreso = "";
        this.id = 0;
        this.usuario = new Usuario();
    }
}