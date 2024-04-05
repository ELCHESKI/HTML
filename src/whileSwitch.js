var mensaje;
mensaje = "estoy leyendo documento whileSwitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML =  mensaje


var inicio = true
function suma() {
    var numero1 = prompt("imgrese numero 1")
    var numero2 = prompt("infrese numero 2")
    alert(parseInt(numero1)+parseInt(numero2))
  }  

  
  function resta() {
    var numero1 = prompt("imgrese numero 1")
    var numero2 = prompt("infrese numero 2")
    alert(parseInt(numero1)-parseInt(numero2))
  }  

  
  function division() {
    var numero1 = prompt("imgrese numero 1")
    var numero2 = prompt("infrese numero 2")
    alert(parseInt(numero1)/parseInt(numero2))
  }  

  
  function mutiplicacion() {
    var numero1 = prompt("imgrese numero 1")
    var numero2 = prompt("infrese numero 2")
    alert(parseInt(numero1)*parseInt(numero2))
  }  

while(inicio == true){
    var def = "Ea no es una opcion"
     var respuesta = prompt("1. suma\n2. Resta\n3. multiplicacion\n4. division\n5. volver")


    switch(parseInt(respuesta)){
    case 1 :
        suma()
    break 
    case 2 :
        resta()
    break
    case 3 :
        division()
    break    
    case 4 :
        multiplicacion()
    break
    case 5 :
        inicio = false
               
default: alert(def)

} 
}   
