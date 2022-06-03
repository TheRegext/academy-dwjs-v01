function sleep() {
    let k = 0
    
    while(++k < 10000000000);

    console.log("Termine")
}

function buttonClck(event){
    //event.preventDefault();
    // this.innerText = ++this.count 
    const row = this.getAttribute('data-row')
    const col = this.getAttribute('data-col')

    this.innerText = this.parentNode.valores[row][col]

    sleep();
}

function randomArray(array, row, col){
    for(let r=0; r < row; r++){
        array[r] = []
        for(let c=0; c < col; c++){
            array[r][c] = parseInt(Math.random()*100) % 8
        }   
    }
}

// MAIN
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.getElementsByClassName("tablero")

    for(let c=0; c < containers.length; c++){
        const container = containers[c]
        const row = parseInt(container.getAttribute("data-row"))
        const col = parseInt(container.getAttribute("data-col"))
        container.style.width = 50 * col + 'px';

        let items = row * col
        container.valores = []

        randomArray(container.valores, row , col)

        for(let r=0; r < row; r++){
            for(let c=0; c < col; c++){
                const div = document.createElement('div')
                div.setAttribute('data-row', r)
                div.setAttribute('data-col', c)
                div.count = 0 // agregando una varibale al contexto
                div.addEventListener('click',buttonClck)
    
                container.appendChild(div)
            }   
        }
    }
    

    const cursor = document.getElementById('cursor')
    document.addEventListener('mousemove', function(event){
        //console.log(event)
        cursor.style.top = event.y + 'px'
        cursor.style.left = event.x + 'px'
    })
})