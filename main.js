let precioProducto

while (true) {
    precioProducto = parseInt(prompt("Ingrese el valor del producto 1"));
    if (!isNaN(precioProducto) && precioProducto != null && precioProducto != "") {
    break;
    } else {
        alert('No es un numero');
    }
}

alert("El valor del producto 1 ingresado es: $ " + precioProducto);
console.log("El valor del producto 1 ingresado es: $ " + precioProducto);
document.write("<h2> El valor del producto 1 ingresado es: $ " + precioProducto + "</h2>");

let precioProducto2

while (true) {
    precioProducto2 = parseInt(prompt("Ingrese el valor del producto 2"));
    if (!isNaN(precioProducto2) && precioProducto2 != null && precioProducto2 != "") {
    break;
    } else {
        alert('No es un numero');
    }
}

alert("El valor del producto 2 ingresado es: $ " + precioProducto2);
console.log("El valor del producto 2 ingresado es: $ " + precioProducto2);
document.write("<h2> El valor del producto 2 ingresado es: $ " + precioProducto2 + "</h2>");

function sumaProductos(precioProducto, precioProducto2){
    return precioProducto + precioProducto2;
}

let resultadoSuma = sumaProductos(precioProducto, precioProducto2);

function sumaProductosIVA(resultadoSuma){
    return resultadoSuma * 1.21;
}

let resultadoConIVA = sumaProductosIVA(resultadoSuma);

document.write("<h2> El precio de tu compra es: $" +resultadoSuma+ "</h2>")
document.write("<h2> El precio con IVA de tu compra es: $" +resultadoConIVA+ "</h2>")


