document.querySelector('#header').innerHTML = "estoy leyendo documento proyecto"

var tareas = []
i = 0
var inicio = true


function ver() {
    alert(tareas)
}
function agregar() {
    var agregar = prompt("Digite nueva nota")
    alert(tareas.push(agregar))
}
function eleminar_especifico() {
    var borrar =prompt("Ingrese el numero de la nota que quiere cambiar")
 tareas.splice(borrar, 1)

}
function modificar() {
    var modificacion= prompt("Tarea que cambiara la actual")
    var number = prompt("Numero de la tarea a cambiar")
    tareas[number]=modificacion
}
   

function eleminar() {
    tareas.pop()
    alert("Se elimino bien")
}




do {
    

    var opcion = prompt("1. Ver \n2. Agregar \n3. eliminar\n4. eliminar tarea especifica\n5. Modificar\n6. Salir")

    switch (parseInt(opcion)) {
        case 1:
            ver()
            break;
        case 2:
            agregar()
            break;
        case 3:
            eleminar()
            break
        case 4:
           eleminar_especifico()
            break

            case 5:
            modificar()
            break
        case 6:
            inicio = prompt("desea terminar ciclo?")
            if (inicio == "si"){
               inicio = false 
            }
            break
        default:
            alert("Eso no existe")
            break


    }
} while (inicio==true );