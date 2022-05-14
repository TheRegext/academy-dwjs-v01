
let suma = 5 // variables mutables
const numero = 9 // variable inmutable

suma+=5

document.writeln("Resultado: " + suma)
suma ++
document.writeln("Resultado: " + suma)

document.writeln("<h2>Hola soy JavaScript</h2>")

// 
/*
    Operadores artimeticos
        + - * / %
    Operador de asignacion
        Variable = Valor
    Operadores Relacion
        > < >= <= 
        == != (representan equivalencias)
        === Igualdad
        !== Desigual
    Operadores Logicos
        ! && ||

*/

for(let i=0; i<10; i++){
    if(i%2 == 0){
        document.writeln("<h2>Estoy en un ciclo - PAR</h2>")
    }
    else{
        document.writeln("<h2>Estoy en un ciclo - IMPAR</h2>")
    }
}
let n = 3
while(n!=0)
{
    document.writeln("<h2>Estoy en un WHILE</h2>")
    n--
}

let valor = 70

switch(valor){
    case 7:
        document.writeln("<h2>Soy el switch</h2>")
        break
    default:
        document.writeln("<h2>Soy el default</h2>")
}




console.log("Hola Mundo")
console.log("Soy el segundo LOG")