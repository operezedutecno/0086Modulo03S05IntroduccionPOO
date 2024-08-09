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

const numero = 10

const venta1 = new Ventas("Monitor", 50)

console.log("Venta1",venta1);
console.log("Porcentaje", venta1.obtenerPorcentaje());
console.log("Comisión", venta1.obtenerComision());