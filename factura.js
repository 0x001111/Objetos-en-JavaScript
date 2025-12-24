class Factura {

    cliente; 
    articulos; 

    constructor(cliente, articulos){
        this.cliente = "";
        this.articulos = [];
    }

    crearFactura(cliente, articulos){

        this.cliente = cliente;
        this.articulos = articulos;
    }

    mostrarFactura(){   
        console.log("mostrarfactura()");
        
        document.write("<h2>Cliente</h2>")
        this.cliente.muestraCliente();

        document.write("<h2>Articulos</h2>");
        
        //para mostrar cada articulo
        for(let i = 0; i<this.articulos.length ; i++){
            this.articulos[i].muestraArticulo();
            document.write("<br>");
        }
    }
}

