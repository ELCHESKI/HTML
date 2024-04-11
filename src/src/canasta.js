document.querySelector('#header').innerHTML = " estoy leyendo el elemento canasta"

var canasta = ["fresa","lemon","sandia","aguacate"]
var i = 0

function elementos(){
    alert(canasta)
}

function agregar_fruta(){
    var nueva_fruta = prompt("ingrese su nueva fruta")
    alert(canasta.push(nueva_fruta))
}

function quitar_fruta(){
    canasta.pop()
}




inicio = true
do{

    var respuesta = prompt("1.ver los elementos de la cesta\n2. Agregar una fruta a la cesta\n3. Quitar ultima fruta de la cesta\n4. salir subnormal")

switch(parseInt(respuesta)){
    case 1:
        elementos()
    break
    case 2:
        agregar_fruta()
    break
    case 3:
        quitar_fruta()
    break 
    case 4:
    inicio  = prompt("Desea terminar el ciclo (si/no)") 
    if(inicio == "si"){
      inicio = false     
    }   
}   
    

}while(inicio == true)



