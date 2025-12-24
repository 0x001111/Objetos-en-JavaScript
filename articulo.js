class Articulo {

    codigo; 
    descripcion; 
    PVP; 

    constructor (){
        this.codigo = "";
        this.descripcion = "";
        this.PVP = 0; 
    }

    insertaArticulo() {
        
        this.codigo = prompt("Inseta el codigo del articulo");
        this.descripcion = prompt("Introduce la descripcion del articulo")
        this.PVP = Number(prompt("Introduce el precio de venta PVP"))
    }

    muestraArticulo(){
        document.write("<h3>Articulo:</h3>")
        document.write("codigo: " + this.codigo + "<br>");
        document.write("descripcion: " + this.descripcion + "<br>")
        document.write("PVP: " + this.PVP)
    }
}

