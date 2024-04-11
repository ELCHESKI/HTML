document.querySelector('#header').innerHTML = "estoy leyendo el elemento arrays "

var canasta = ["fresa","aguacate","lemon"]

console.log(canasta)

canasta[0] = "tamarindo" //para modificar elvalor de una posicion
console.log(canasta)

console.log(canasta.length)//ver el tamaño del array

canasta.push("granada")//agrega un elemento a la array
console.log(canasta)

canasta.pop()//este elemina el ultimo elemento del array
console.log(canasta)

canasta.push("manzana")
canasta.push("aguacate")
console.log(canasta)

canasta.splice(2,1)//el segundo parametro (1) indica cuantos elementos eliminar desde el indice proporcionado(2)
console.log(canasta)

console.log(canasta[2])

var canastaVacia = []//para hacer una array vacia



var opcion = prompt("1. ver elementos de la canasta\n2. Agregar una frutar a la canasta\n3. Quitar un elemento de la canasta")