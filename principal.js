let cliente1 = new Cliente();
cliente1.insertaCliente();

let listaArticulos = [];

let articulo1 = new Articulo();
articulo1.insertaArticulo();

let articulo2 = new Articulo();
articulo2.insertaArticulo();

listaArticulos.push(articulo1);
listaArticulos.push(articulo2);

let factura1 = new Factura();
factura1.crearFactura(cliente1, listaArticulos);
factura1.mostrarFactura();

