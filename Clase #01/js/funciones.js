function potencia(numero, exponente){
    let resultado = numero

    for(let i=1; i<exponente; i++){
        resultado *= numero
    }

    return resultado
}



document.writeln("<h2>2 ^ 5 = "+potencia(2,5)+"</h2>")

function suma(n1, n2){
    return n1 + n2
}


let x = parseInt(prompt("Ingrese un numero")), y = parseInt(prompt("Ingrese un numero"))


document.writeln("<h2>Resultado: "+suma(x,y)+"</h2>")






