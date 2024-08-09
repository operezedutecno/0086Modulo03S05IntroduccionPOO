function Ventas(producto, precio) {
    this.producto = producto
    this.precio = precio

    this.obtenerPorcentaje = function() {
        return this.precio < 100 ? 5 : 7.5;
    }

    this.obtenerComision = function() {
        return (this.precio * this.obtenerPorcentaje()) / 100
    }
}

var ventas = [];

const venta1 = new Ventas("Monitor", 120)
// console.log("Venta1",venta1);
// console.log("Porcentaje", venta1.obtenerPorcentaje());
// console.log("Comisión", venta1.obtenerComision());

ventas.push(venta1)
ventas.push(new Ventas("Teclado", 30))
ventas.push(new Ventas("Mouse", 20))

var suma = 0;
for (let index = 0; index < ventas.length; index++) {
    const element = ventas[index];
    var comision = element.obtenerComision()
    suma = suma + comision
    console.log(element.producto, comision);
}

console.log(suma);