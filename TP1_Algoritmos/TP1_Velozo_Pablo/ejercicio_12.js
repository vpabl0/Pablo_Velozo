class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerInformacion() {
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.año}`;
    }
}
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
      super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }
     obtenerInformacion() {
        return `${super.obtenerInformacion()}\nColor: ${this.color}\nPrecio: ${this.precio}`;
    }
}
const vehiculo1 = new Vehiculo('Chevrolet', 'Corsa', 2010);
console.log(vehiculo1.obtenerInformacion()); 
const automovil1 = new Automovil('renault', 'Clio', 2013, 'Rojo', 5000000);
console.log(automovil1.obtenerInformacion());