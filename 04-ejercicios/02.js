/*

    Nombre : ancho x alto
    Ejemplo: 1366 x 768
    Resoluciones: 
    - 1366 x 768 -> HD
    - 1920 x 1080 -> Full HD    
    - 2560 x 1440 -> 2K
    - 3840 x 2160 -> 4K
    - cualquier otra -> Resolución desconocida
 *

*/


function nombreResolucion(ancho, alto){
    if(ancho === 1366 && alto === 768){
        return "HD";
    } else if(ancho === 1920 && alto === 1080){
        return "Full HD";
    } else if(ancho === 2560 && alto === 1440){
        return "2K";
    } else if(ancho === 3840 && alto === 2160){
        return "4K";
    }
    return "Resolución desconocida";
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);