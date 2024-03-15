document.querySelector('#header').innerHTML = "estoy leyendo el documento switch"
var Dia
var mensaje 
var userInput = prompt("cual dia de la semana")

function lunes() {
    mensaje = ("odio los lunes")
    document.querySelector('#header').innerHTML = mensaje
  }
function martes() {
    mensaje = "Hoy es martes de moira"
    document.querySelector('#header').innerHTML = mensaje
  }

  function miercoles() {
    mensaje = "hoy es miercoles dia de mr"
    document.querySelector('#header').innerHTML = mensaje
  }

  function jueves() {
    mensaje = "feliz jueves¡¡!!"
    document.querySelector('#header').innerHTML = mensaje
  }  

  function viernes() {
    mensaje = "hoy es viernes cuidado que se te pierde"
    document.querySelector('#header').innerHTML = mensaje
  }  

  function sabado() {
    mensaje = "hoy es sabado por arriba y por abajo me la ando descansando"
    document.querySelector('#header').innerHTML = mensaje
  }  

  function Domingo() {
    mensaje = "hoy es domingo pegate un brinco porque mañana no va a ser lindo"
    document.querySelector('#header').innerHTML = mensaje
  }  

  function Dia_invalido() {
    mensaje = "es duro pero nada mas hay siete dias si no sabias"
    document.querySelector('#header').innerHTML = mensaje
  }  
  
fruta = parseInt(userInput)// con paserInt se convierte a entero

switch(fruta) {
    case 1:
        lunes()
    break
    case 2:
        martes()
    break    
    case 3:
        miercoles()
    break
    case 4:
        jueves()
    break
    case 5:
        viernes()
    break
    case 6:
        sabado()
    break
    case 7: 
        Domingo()
    break       
    default:
        Dia_invalido()  
    break 
}