let arreglo = []//1
var largo = parseInt(prompt("Digite la cantidad de los elementos del arreglo"));

let finalizar = false;

construir(largo)//2

do {
    var opcion = parseInt(prompt(
        `1. llenar arreglo \n
2. Sacar el promedio del arreglo \n
3. Sacar el total de mayores al promedio \n
4. Aumentar Arreglo \n
5. Sumar Impares \n
6. Mostrar el número mayor del arreglo \n
7. Muestre el valor de la mayor diferencia en valor absoluto entre dos celdas consecutivas del arreglo \n
8. Buscar número en el arreglo \n
9. Buscar posición de un número en el arreglo \n
10. Invertir arreglo\n
11. Sustituir el valor de una posicion específica \n
12. Mostrar hilera del arreglo\n
13. Finalizar aplicación`
    ))

    switch (opcion) {
        case 1:
            llenar()
            break;
        case 2://4
            console.log(promedioArreglo(arreglo))
            break;
        case 3://5
            console.log("Hay un total de " + mayoresPromedio() + " mayores al promedio")
            break;
        case 4://6
           sumaValor()
            break;
        case 5://7
            console.log("La suma total de impares es: " + sumaImPares())
            break;
        case 6://8
            console.log("El valor mayor del arreglo es: " + mayorArreglo())
            break;
        case 7://9
            console.log("El valor absoluto mayor entre dos celdas consecutivas es: " + mayorDiferencia())
            break;
        case 8://10
            let numeroConsulta = parseInt(prompt("¿Qué número deseas buscar en el arreglo?"))
            console.log("El resultado de la búsqueda fue: " + encontrarElemento(numeroConsulta))
            break;
        case 9://10
            let numeroConsultaPosicion = parseInt(prompt("¿Qué número deseas buscar en el arreglo para que retorne la posicion?"))
            console.log("El resultado de la búsqueda fue: " + posicionElemento(numeroConsultaPosicion))
            break;
        case 10://11
            invertirArreglo()
            console.log("El arreglo fue invertido con éxito")
            break;
        case 11://12
            let posicion = parseInt(prompt("¿Qué posicion desea sustituir?"))
            let valor = parseInt(prompt("¿Qué valor deseas asignar?"))
            insertarElemento(posicion, valor)
            break;
        case 12://13
            mostrarHileraArreglo()
            break;
        case 13://14
            finalizarAplicacion()
            break;
    }
} while (!finalizar)



/*
1 != 10 sí -> true
2 != 10 sí -> true
10 != 10 no -> false


number -- 10, 70, 49
double // Float -- 10.3, 10.2, 70.2323
boolean false y true // 0 y 1
string "Esto es una prueba", "12178321382", "12618.213213"
...
*/