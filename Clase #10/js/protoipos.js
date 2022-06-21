let nombre = "Brian Lara"

String.prototype.concatenar = function(str){
    return this + str
}
String.prototype.toUpper = function(){
    return this.toUpperCase()
}


console.log(nombre.concatenar(" Esteban").toUpper())