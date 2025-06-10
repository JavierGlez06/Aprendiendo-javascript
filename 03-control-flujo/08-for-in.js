let user = {
    id: 1,
    name: 'John Doe',
    age: 30,
};

for (let prop in user){
    console.log(prop,user[prop]); // Acceso a las propiedades del objeto
}

let animales = ['perro', 'gato', 'conejo', 'loro'];
for (let indice in animales){
    console.log(indice, animales[indice]); // Acceso al índice y al valor del array
} // no utilizar solo for of