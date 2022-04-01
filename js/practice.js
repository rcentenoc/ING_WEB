// var ladoCuadrado = parseInt(prompt("Ingrese cuanto mide un lado del cuadrado"));
// const varAreaCuadrado = Math.pow((parseInt(ladoCuadrado)),2);
// const varPerimetroCuadrado =(parseInt(ladoCuadrado)*4);
// document.write("El area del cuadrado es "+ varAreaCuadrado +" y el perimetro es "+ varPerimetroCuadrado+".<br/><br/>"); 


// var alturaTriangulo = parseInt(prompt("Ingrese cuanto mide la altura del triangulo"));
// var baseTriangulo = parseInt(prompt("Ingrese la base del triangulo"));
// const varLadoTriangulo = Math.sqrt((parseInt(alturaTriangulo))^2+((parseInt(baseTriangulo))/2)^2);
// const varAreaTriangulo = ((alturaTriangulo)*parseInt(baseTriangulo))/2;
// const varPerimetroTriangulo = ((varLadoTriangulo)*2 + parseInt(baseTriangulo));
// // document.write("El area del triangulo es "+ varAreaTriangulo + " y el perimetro es " + varPerimetroTriangulo + ".<br/><br/>");


// var radioCirculo = parseInt(prompt("Ingrese el radio del circulo"));
// const varAreaCirculo = (parseInt(radioCirculo)^2)*Math.PI;
// const varPerimetroCirculo = (parseInt(radioCirculo))*(2*Math.PI);
// document.write("El area del circulo es "+varAreaCirculo+" y el perimetro del circulo es "+varPerimetroCirculo+".<br/><br/>");

// OTRA FORMA

console.group("CUADRADO ▼");
const areaCuadrado = (a) => Math.pow(a,2);
const perimetroCuadrado = (a) => (a*4);
console.groupEnd();

console.group("TRIANGULO ▼");
const areaTriangulo = (a,b) => (a*b)/2;
const ladoTriangulo = (a,b) => (Math.sqrt(Math.pow(a,2)+Math.pow((b/2),2)));
const perimetroTriangulo = (a,b) => (ladoTriangulo(a,b)*2 + b);
console.groupEnd();

console.group("CIRCULO ▼");
const areaCirculo = (a) => (Math.pow(a,2))*Math.PI;
const perimetroCirculo = (a) => a*2*Math.PI;
console.groupEnd();

// document.write("El area del cuadrado es "+ areaCuadrado(ladoCuadrado) +" y el perimetro es "+ perimetroCuadrado(ladoCuadrado) +".<br/><br/>");
// document.write("El area del triangulo es "+ areaTriangulo(alturaTriangulo,baseTriangulo) + " y el perimetro es " + perimetroTriangulo(alturaTriangulo,baseTriangulo) + ".<br/><br/>");
// document.write("El area del circulo es "+areaCirculo(radioCirculo)+" y el perimetro del circulo es "+perimetroCirculo(radioCirculo)+".<br/><br/>");

// HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputLadoCuadrado");
    const result = document.querySelector(".resultadoCuadrado");
    const value = parseInt(input.value);
    let perimetro = perimetroCuadrado(value);
    result.innerHTML= 'El perimetro del cuadrado es de: '+perimetro+' cm.';
}
function calcularAreaCuadrado () {
    const input = document.getElementById("inputLadoCuadrado");
    const result = document.querySelector(".resultadoCuadrado");
    const value = parseInt(input.value);
    let area = areaCuadrado(value);
    result.innerHTML= 'El area del cuadrado es de: '+area+' cm.';
}
