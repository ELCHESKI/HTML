document.querySelector('#header').innerHTML = "estpy leyendo el documneto doWhile"

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

  var inicio = true

do{

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
    break    

    default : alert("no existe")

}   

}while(inicio == true)



