function Formulario(idForm, idList){ // funcion constructura
    Formulario.Cant++

    this.elementForm = document.getElementById(idForm);
    this.elementsList = document.getElementById(idList)
    this.list = []

    this.elementForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        this.list.push({
            id: Formulario.ValorInicial + this.list.length,
            name:this.elementForm.elements['name'].value
        });
        this.render();
    })

    this.render = ()=>{
        let html = '';
        for(let i = 0; i < this.list.length; i++){
            html += `
            <li>
                <p class="name">
                    #${this.list[i].id} - ${this.list[i].name}
                </p>
            </li>`
        }
        
        this.elementsList.innerHTML = html;
    }
}

// Propiedad de Clase - static
Formulaio.ValorInicial = 17
Formulario.Cant = 0

Formulario.getCantInstances = ()=>{
    return Formulario.Cant
}

