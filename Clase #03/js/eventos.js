let contador = 0

function click(){
    contador++
    this.innerText = "Contador: "+ contador + " -- "+ Math.random()
    console.log(this)

    if(contador%2 == 0){
        this.classList.add('par')
    }
    else{
        this.classList.remove('par')
    }
}

const p = document.getElementById('par')

p.onclick = click

