// Variables con valores
let var1 = 7 // una variable mutable
const var2 = 14 // una variable inmutable

// Objetos
let obj = { // Guarda una referencia
    prop1: 17,
    prop2: 44
} 

// Colecciones -- Array -- Vectores
let obj2 = {}

let col1 = [1, 2, 3]

col1.push(9)

col1.push(17)

col1.push({
    hola: 17
})

col1.push(44)


/*
for(let i=0; i< col1.length; i++){
    console.log(i + ": ", col1[i])
}
*/

// Recorre un array
for( let i in col1){
    console.log(i + ": ", col1[i])
}

// Recorre cualquier objeto recorrible
for( let i in obj){
    console.log(i + ": ", obj[i])
}

const alumnos = [
    {
        id: 17,
        name: "Pedro"
    },
    {
        id: 14,
        name: "Sofia"
    },
    {
        id: 10,
        name: "Jaquelin"
    }
]

console.log(alumnos)