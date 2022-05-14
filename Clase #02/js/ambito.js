document.writeln("<h1>Hola</h1>") // Solo en esta clase...

console.log("Hola Mundo") // Se usan mucho

console.error("Algo salio mal...")

console.warn("Creo que se podria hacer mejor...")

// alert("Hola Mundo") // No lo usen...

let variable = 7 // mutable

variable = 10

{
    let variable = 17
    let variable2 = 14 // Antiguo... crea una variable mutable de forma global

    console.log("Variable:", variable)
    
    function suma(n1){
        return n1 + variable2;
    }

    variable2 = 25

    function reset(){
        variable2 = 4
    }
}

console.log("Variable:", variable)
//console.log("Variable:", variable2)

console.log("suma(5):", suma(5))
reset()
console.log("suma(5):", suma(5))


