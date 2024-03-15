document.querySelector('#header').innerHTML = "estoy leyendo el documento switch"
var fruta
var mensaje 
var userinput = prompt("ingrese el sabor de su fruta")

function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }
function jugo_de_naranja() {
    window.alert("batiendo naranjas");
    mensaje = "batir naranjas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje
  }

  function servir_vaso_de_agua() {
    window.alert('sirveme el vaso de agua');
    mensaje = "servirme vaso con agua";
    document.querySelector('#header').innerHTML = mensaje
  }
  
fruta = userinput.toLowerCase()
switch(fruta){
    case "fresa":
    mensaje = "batir fresas"
        jugo_de_fresas()
    break
    case "naranja":
    case "mandarina":
        jugo_de_naranja()
    break
    default:
        servir_vaso_de_agua()
    break    
}