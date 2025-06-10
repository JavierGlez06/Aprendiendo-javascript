// short-circuit

// falso 
// false
// 0
// '' (cadena vacía)
// null
// undefined
// NaN (Not a Number)
let nombre = 'Chachito feliz'; // cadena vacía
let username = nombre || 'anonimo';
console.log(username); // ' ' (cadena vacía, no se considera falso)

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}   

let x = fn1() && fn2(); // fn1 se ejecuta, fn2 no se ejecuta