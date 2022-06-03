document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("form")    

    form.addEventListener('submit', function(event){
        event.preventDefault()

        const texto = this.elements['text'].value
        const seniority = this.elements['seniority'].value

        const li = document.createElement('li')
        li.innerText = seniority + " " + texto
        
        const p = document.createElement('p')
        p.innerText = this.elements['comentario'].value
        li.appendChild(p)

        
        li.style.border = '1px solid '+this.elements['color'].value

        li.style.cursor = 'pointer'
        li.onclick = function(){
            document.getElementById('list').removeChild(li)    
        }

        document.getElementById('list').appendChild(li)

        for(let i=0; i<this.elements['lenguajes'].length ; i++){
            if(this.elements['lenguajes'][i].checked){
                const span = document.createElement('span')
                span.innerText = this.elements['lenguajes'][i].value
                li.appendChild(span)
            }
            
        }

        console.log(this.elements)
       
    })



})

