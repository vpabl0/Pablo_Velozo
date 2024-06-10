
var meses=[
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var num=prompt("Para mostrar el mes que desea ingrese un número del 1 al 12");
num=parseInt(num);
if (num >=1 && num <=12) {
   alert("El mes "+num+" es: "+meses[num - 1]);
} else {
    alert("Por favor ingrese un número válido entre 1 y 12.");
}
