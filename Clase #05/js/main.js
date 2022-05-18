

function Contador(id){
    this.boton = document.createElement('button')
    this.boton.id = 'button-'+id
    this.boton.innerText = "CONTAR"
    this.label = document.createElement('span')

    this.count = parseInt(localStorage.getItem(this.boton.id) | 0)

    this.render = function (){
        this.label.innerHTML = this.count
    }

    this.boton.addEventListener('click', () =>{
        this.count++
        localStorage.setItem(this.boton.id, this.count)
        this.render()
    })

    document.body.appendChild(this.boton)
    document.body.appendChild(this.label)

    this.render()

}
const c1 = new Contador(1)
const c2 = new Contador(2)
const c3 = new Contador(3)


