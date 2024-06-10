//Parte 1

valores = [true, false, 2, "Hola", "Mundo", 3, "char"];

texto_mas = "";
for (i=0; i < valores.length; i++){
    if (typeof valores[i] ==="string"){
        if(valores[i].length> texto_mas.length){
            texto_mas=valores[i];
            }
    }
}
console.log("El texto mas largo es: "+texto_mas);

//Parte 2

textos = valores.filter(function(elementos) {
    return typeof elementos === 'string';
});
textos.sort(function(a, b) {
    return a.length - b.length;
});
console.log("Texto ordenados de menor a mayor cantidad de letras:");
for (i = 0; i < textos.length; i++) {
    console.log(textos[i]);
}

//Parte 3

A= valores[5];
B= valores[2];
console.log (`La suma de A+B es: ${A+B}`);
console.log (`La diferencia de A-B es: ${A-B}`);
console.log (`La multiplicación de AxB es: ${A*B}`);
console.log (`La división de A/B es: ${A/B}`);