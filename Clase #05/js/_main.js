let n1 = 5;

function suma(){
    return n1 + 10
}

// console.log(suma(10))

function cambarColor(){
    this.style.color = "#f0f"
}


const $ele = document.createElement('p')
$ele.innerText = "Hola Mundo"
document.body.appendChild($ele)

$ele.addEventListener('click', cambarColor)



function my(){
    console.log(this)
}

$ele.addEventListener('click', my)


function obj(){
    function b(){
        console.log("B", this)
    }


    this.k = 20
    this.send = function(){
        console.log("Aprete el boton")
    }

    this.s = function(){
        console.log("S", this)
        b()

        
        $ele.addEventListener('click', function(){
            this.send()
        })
    }
}


const j = new obj()

console.log(j)

j.s()