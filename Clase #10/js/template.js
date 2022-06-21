
let nombre = "Brian Lara"


console.log("Hola " + nombre + ", como estas?")
console.log("<li class='nombre'>Texto</li>")

function nombrar(){
    return nombre + " Esteban"
}

// template string - template literal
console.log(`Hola ${nombrar()}, como ${2 * 5} estas?`)

console.log("<ul>\n<li>1</li>\n<li>1</li>\n<li>1</li>\n</ul>")
console.log(`
<ul>
    <li>${nombre}</li>
    <li>${2+3}</li>
    <li>Pedro</li>
</ul>
`)
