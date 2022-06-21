function iniciarListas(){
    new Formulario('formulario2', 'lista2');
    new Formulario('formulario', 'lista');
}

document.addEventListener('DOMContentLoaded', function() {
    Formulario.ValorInicial = 4;

    iniciarListas()

    console.log(Formulario.getCantInstances())
  
})