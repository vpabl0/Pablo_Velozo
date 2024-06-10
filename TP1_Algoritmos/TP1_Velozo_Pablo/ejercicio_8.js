palabra=window.prompt("Escribe una palabra");
vocales=`aeiou`;
posicion=-1;
vocal="";
for(i=0; i<palabra.length; i++){
    if(vocales.indexOf(palabra[i]) !==-1){
        vocal=palabra[i];
        posicion=i+1;
        break;
    }
}
if (posicion !== -1) {
    alert("La primera vocal es '" + vocal + "' y es la letra Nº" + posicion);
} else {
    alert("No se encontraron vocales en el texto ingresado.");
}