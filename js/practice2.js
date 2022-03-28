
const calcularDescuento = (precio,descuento) => (precio * (100-descuento))/100;

function calcularDescuentoFinal (){    
    const auxiliarPrecio = document.getElementById("inputPrice");
    const precio = parseInt(auxiliarPrecio.value);
    const auxiliarDescuento = document.getElementById("inputDiscount");
    const descuento = parseInt(auxiliarDescuento.value);
    var result = document.querySelector(".resultDiscount");
    const calculo = calcularDescuento(precio,descuento);
    result.innerHTML='<h2>El precio con descuento es: S/'+ calculo + ' soles.</h2>';
    // result.document.getElementById("resultDiscount");
}


