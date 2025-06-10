function suma(a, b) {
    console.log(arguments); // Imprime los argumentos pasados a la función
    return a + b;
}

let resultado = suma(5, 6 , 1 ,2, 3); // Llamada a la función con un argumento
console.log(resultado); // Imprime 7
console.log(typeof resultado); // Imprime "number"

