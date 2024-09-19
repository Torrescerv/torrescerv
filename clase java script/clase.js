// 10.0 Booleans



let isOnline = true;
let hasAccess = true;
let booleanOutput = "";

if (isOnline && hasAccess) {
    booleanOutput = "El usuario está en línea y tiene acceso.";
} else {
    booleanOutput = "El usuario no tiene acceso.";
}

console.log(booleanOutput);

// 10.2 Arrays o Arreglos
let arreglovacio =[];
let fruits = ["manzana", "banana", "naranja","pera"]; 
let arrayOutput = `Frutas: ${fruits.join(", ")} (total: ${fruits.length})`;
console.log(arrayOutput);

// 10.5 Objetos

let person = {
name: "juan",
age: 30,
isStudent: false,
saludar: function() {
    return `Hola, mi nombre es ${this.name}`;
}
};
let objectOutput = person.saludar();
console.log(objectOutput);

// 10.8 funciones
function suma(a, b) {
    return a + b;
}
let sumOutput = `La suma es de : ${suma(8, 23)}`;
console.log(sumOutput);


// 10.9 retorno de funciones
function getSaludar(name){
    return `Hola, ${name}!`;
}
let greetingOutput = getSaludar("maria");
console.log(greetingOutput);


// Mostrando Todos los resultados en el hmtl
document.getElementById(`output`).innerHTML =`
<h2>Resultados:</h2>
