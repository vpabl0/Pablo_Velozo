notas = [];
total = 0;
numeroNotas = 5;
for (i=0; i < numeroNotas; i++) {
    nota = parseInt(prompt(`Ingrese la nota ${i + 1}:`), 10);
    while (isNaN(nota) || nota < 0 || nota >= 11) {
        nota = parseInt(prompt(`Nota inválida. Ingrese nuevamente la nota ${i + 1} (debe ser un número natural menor que 11):`), 10);
    }
    notas.push(nota);
    total += nota;
}
promedio = total / numeroNotas;
let resultado;
if (promedio < 6) {
    resultado = "Reprobado";
} else if (promedio >= 6 && promedio < 8) {
    resultado = "Aprobado";
} else if (promedio >= 8) {
    resultado = "Sobresaliente";
}
document.write(`Promedio: ${promedio.toFixed(2)}<br>`);
document.write(`Resultado: ${resultado}`);
