class Cliente{

    DNI;
    Nombre; 
    Direccion;
    Telefono; 


    constructor(){
        this.DNI = "";
        this.Nombre = "";
        this.Direccion = "";
        this.Telefono = "";
    }

    insertaCliente(){
        this.DNI = prompt("Introduce el DNI");
        this.Nombre = prompt("Introduce el nombre")
        this.Direccion = prompt("Introduce la direccion")
        this.Telefono = prompt("Introduce el telefono")
    }


    /* --------CON DOM----------
    muestraCliente(){
        document.getElementById("salida").innerHTML = 
        "DNI: " + this.DNI + "<br>" + 
        "Nombre: " + this.Nombre + "<br>" + 
        "Direccion: " + this.Direccion + "<br>" + 
        "Telefono: " + this.Telefono; 
    } */
    muestraCliente(){
        
        document.write("DNI: " +  this.DNI + "<br>" + "Nombre: " + this.Nombre + "<br>" + "Direccion: " + this.Direccion + "<br>" + "Telefono: " + this.Telefono + "<br>");
    }
}

