var mensaje = "batir las fresas" 
var fresas, hay_fresas;
var mensaje3 = "servir vaso de agua"
var mensaje2 = "batir las peras"
var mensaje4 = "batir los mangos"


function jugo_de_fresas() {
  window.alert(mensaje);
  document.querySelector('#header').innerHTML = mensaje
}

function servir_vaso_de_agua() {
  window.alert('sirveme el vaso de agua');
  document.querySelector('#header').innerHTML = mensaje3
}


function jugo_de_peras() {
  window.alert('batir peras');
  document.querySelector('#header').innerHTML = mensaje2
}

function jugo_de_mango() {
  window.alert('batir mangos');
  document.querySelector('#header').innerHTML = mensaje4
}


hay_fresas = false;
hay_peras = false;
hay_mangos = false;
if (hay_fresas) {
  jugo_de_fresas();
} else if (hay_peras) {
  jugo_de_peras();
} else if (hay_mangos) {
  jugo_de_mango();
} else {
  servir_vaso_de_agua();
}
