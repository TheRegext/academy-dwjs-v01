const elemento = document.createElement("h1")
elemento.innerText = "Soy el titulo..."


const parrafo = document.getElementById("par")

// document.body.insertBefore(elemento, parrafo)

document.body.appendChild(parrafo)

