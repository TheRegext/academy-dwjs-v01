let timmerId

function crearIntervalo(){
    timmerId = window.setInterval(function(){
        document.getElementById('button-1').click()
     }, 1000)
}

document.getElementById('cancelar').addEventListener('click', function(){
    if(timmerId){
        clearTimeout(timmerId)
        timmerId = null
        this.innerText = "Reanudar"
    }
    else{
        crearIntervalo()
        this.innerText = "Cancelar"
    }
})

