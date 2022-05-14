// es un objeto que nos proporciona el API Web para manejar el documento HTML
const parrafo = document.getElementById("par")

parrafo.innerHTML = "Hola <strong>que</strong> hace"

console.log("Elemento: ", parrafo)


const parrafo2 = document.getElementById('lorem')

parrafo2.innerText += "..."
console.log("Objeto: ", parrafo)
console.log("TEXT: ", parrafo.innerText)
console.log("HTML: ", parrafo.innerHTML)


console.log("BODY: ", document.body.innerText)
