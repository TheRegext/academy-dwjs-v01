let palabra

palabra = prompt("Ingrese palabra")
document.writeln('<ul>')
while(palabra !== ""){
    document.writeln('<li>'+palabra+'</li>')

    palabra = prompt("Ingrese palabra")
}

document.writeln('</ul>')
