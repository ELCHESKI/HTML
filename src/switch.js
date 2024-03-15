document.querySelector('#header').innerHTML = "estoy leyendo el documento switch"
var fruta
var mensaje 
var userInput = prompt("ingrese el numero de la fruta")

function jugo_de_fresas() {
    mensaje = ("batir fresas")
    document.querySelector('#header').innerHTML = mensaje
  }
function jugo_de_naranja() {
    window.alert("batiendo naranjas")
    mensaje = "batir naranjas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje
  }

  function servir_vaso_de_agua() {
    window.alert('sirveme el vaso de agua')
    mensaje = "servirme vaso con agua"
    document.querySelector('#header').innerHTML = mensaje
  }
  
fruta = parseInt(userInput)// con paserInt se convierte a entero

switch(fruta) {
    case 1:
        jugo_de_fresas()
    break
    case 2:
    case 3:
        jugo_de_naranja()
    break
    default:
        servir_vaso_de_agua()  
    break 
}