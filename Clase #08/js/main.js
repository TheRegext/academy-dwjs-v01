//funciones tradicionales nombradas
function suma(n1, n2){
    return n1 + n2;
}

// funciones tradicionales anonimas
const resta = function (n1, n2){
    suma(n1, n2)
    return n1 - n2;
}

// callback
function calcular(n1, n2, callback){
    return callback(n1, n2);
}

// funciones flecha
const multiplo = (n1, n2) => {
    return n1 * n2
}

const dividir = (n1, n2) => n1 * n2

const doble = n1 => n1 * 2

 // console.log(suma(5, 2))
 console.log(calcular(5, 2, multiplo))

// Expresion es toda instruccion que tiene un resultado


