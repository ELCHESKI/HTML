let arreglo = []

var largo = parseInt(prompt("Digite la cantidad de los elementos del arreglo"))

function construir(largo){
    arreglo.length = largo
}
construir(largo)

function llenar(){
    for(let i = 0; arreglo.length; i++){
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    
    }
}

do{

   var opcion = parseInt(prompt("1. llenar arreglo"))

   switch(opcion){
case 1 :
    llenar()
break    

   }



}while(true)