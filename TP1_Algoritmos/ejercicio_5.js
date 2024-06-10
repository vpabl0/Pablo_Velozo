//En primer linea se declara las variavles
let dato, resultado;
//En esta linea se declara la variable "val1" y se pide al usuario que ingrese su nombre
val1=window.prompt("Introduce tu nombre","...");
//En esta linea se declara la variable "val2" y se pide al usuario que ingrese su apellido
val2=window.prompt("Introduce tu apellido","...");
//En la siguiente liea se guarda las variables "val1" y "val2" en la variable "resultado"
resultado="Concatenado tu nombre y apellido es: ${val1} ${val2} ";
//En la ultima linea se muestra en pantalla el con tenido de la variable "resultado"
document.write(resultado);