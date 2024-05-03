document.querySelector('#header').innerHTML = "sirve para algo?"

var arreglo = []

//var redondeado = Math.floor(1.4)
//var redondeado2 = Math.floor(2.6)
//  var redondeado3 = Math.floor(3.9)

for(let i = 0; i <10; i++){
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1
    arreglo[i] = numeroAleatorio

}

console.log(arreglo)
