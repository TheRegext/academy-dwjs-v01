function modificar_pelicula(pelicula){
    const formModificar = document.getElementById("frmModificar");
    formModificar.style.display = 'block';

    formModificar.elements['name'].value = pelicula.name;
    formModificar.pelicula = pelicula;
}

function agregar_pelicula(pelicula){
    const list = document.getElementById('movie-list')
    const item = document.createElement('li')
    const text = document.createElement('p')
    text.innerText = pelicula.name
    item.id = 'movie-item-' + pelicula.id
    
    item.appendChild(text)
    list.appendChild(item)

    text.addEventListener('click', function(){
        modificar_pelicula(pelicula);
        const formModificar = document.getElementById("frmModificar");
        item.insertBefore(formModificar, text)
    })
}

function actualizar_pelicula(pelicula){
    document.body.appendChild(document.getElementById("frmModificar"))
    
    const item = document.getElementById('movie-item-' + pelicula.id)
    item.childNodes[0].innerText = pelicula.name
}

document.addEventListener('DOMContentLoaded', function() {
    const formModificar = document.getElementById("frmModificar");
    const formCargar = document.getElementById("frmCargar");

    // const list = JSON.parse(localStorage.getItem('peliculas')) ? JSON.parse(localStorage.getItem('peliculas')) : [];
    const list = JSON.parse(localStorage.getItem('peliculas')) || [];

    for(let item of list){
        agregar_pelicula(item);
    }

    formModificar.addEventListener('submit', function(event){
        event.preventDefault()

        this.pelicula.name = this.elements['name'].value;
        localStorage.setItem('peliculas', JSON.stringify(list))

        actualizar_pelicula(this.pelicula)
        
        formModificar.style.display = 'none';


    })

    formModificar.elements['btnCancelar'].addEventListener('click', function(e){
        formModificar.style.display = 'none';
        document.body.appendChild(formModificar)
    })




   
    formCargar.addEventListener('submit', function(event){
        event.preventDefault() // evitamos que se ejecute el comportamiento por defecto
        // creamos un objeto
        const pelicula = {
            name: formCargar.elements['name'].value,
            id: list.length + 1
        }
        list.push(pelicula)
        agregar_pelicula(pelicula);
        localStorage.setItem('peliculas', JSON.stringify(list))
    })

    
})