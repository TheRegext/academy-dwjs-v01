function cambiar(n){
    n.edad = 60
}

const pedro = {
    edad: 17,
    altura: 2.6
}

pedro.nombre = "Pedro Sanchez"

const juan = pedro

cambiar(juan)

console.log("Pedro", pedro)



let n1 = 17

let n2 = n1
n1 = 20


console.log("N2", n2)