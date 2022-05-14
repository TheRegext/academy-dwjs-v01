// const spans = document.getElementsByTagName('ul')[0]
//                .getElementsByTagName('span')

const spans = document.querySelectorAll('ul.primary span')

function cambiarColor(){
    this.selected = !this.selected // agregando una nueva propiedad al elemento
    if(this.posX === undefined){
        this.posX = 0
    }

    this.posX += 10
    this.style.transform = 'translateX('+this.posX+'px)'

    if(this.selected){
        //this.style.width = (this.clientWidth + 10) + 'px'
        //this.style.borderWidth = '2px'
    }
    else{
        //this.style.transform = ''
        //this.style.borderWidth = ''
    }
}

function ocultar(){
    this.oculto = !this.oculto 
    if(this.oculto){
        this.style.opacity = '0'
    }
    else{
        this.style.opacity = '1'
    }
    
}

for(let span=0; span<spans.length; span++){
    let $element = spans[span]


    $element.classList.add('item')

    if(span==1){
        $element.className = 'item power'
    }

    if(span == 0){
        // Estable en linea
        $element.style.backgroundColor = "#000"
        $element.style.color = "#FFF"
    }

    //$element.onclick = cambiarColor
    //$element.onclick = ocultar

    $element.addEventListener('click', cambiarColor)
    $element.addEventListener('click', ocultar)



    console.log($element.className)
}

const elementos = [
    {
        id: 5,
        name: "Brian"
    },
    {
        id: 4,
        name: "Laura"
    },
    {
        id: 1,
        name: "Jose"
    }
]

function buscar(lista, valorBuscado, factorBusqueda){
    for(let item in lista){
        if(factorBusqueda(lista[item]) === valorBuscado){
            return item
        }
    }
    return -1
}


const funcion1 = function(){

}

console.log("Buscar por Name: ", buscar(elementos, "Jose", function(item){
    return item.name
}))

console.log("Buscar por ID: ", buscar(elementos, 4, function(item){
    return item.id
}))