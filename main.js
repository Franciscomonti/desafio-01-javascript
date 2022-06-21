let producto1 = 100
let producto2 = 200
let precio = 0
let seleccionProducto = 0

function valorcuota(producto, cantidadcuotas){
    return producto / cantidadcuotas}

do{
    seleccionProducto = parseInt(prompt("seleccione el prducto deseado :\n1. producto 1\n2. producto 2"))

    if(seleccionProducto > 0 , seleccionProducto < 3){
        switch(seleccionProducto){
            case 1:
                precio = producto1
                alert("usted selecciono el producto 1 valor " + producto1)
                break
            case 2:
                precio = producto2
                alert("usted selecciono el producto 2 valor " + producto2)
                reak
        }
    }
    else{
    alert("usted no selecciono ningun producto")
    }

}while(seleccionProducto < 0 || seleccionProducto > 3 )

let seleccionCuotas = 0

do{
    seleccionCuotas = parseInt(prompt("seleccione cantidad de cuotas:\n1. Un pago sin interes\n2. Tres pagos sin interes"))

    if(seleccionCuotas == 1){
        alert("usted selecciono un pago sin interes\n"+ "valor de la cuota es :" + valorcuota(precio, 1))
    }
    else if(seleccionCuotas == 2){
        alert("usted selecciono Tres pagos sin interes\n"+ "valor de la cuota es :" + valorcuota(precio, 3))
    }
    else{
        alert("usted no selecciono un valor de cuotas valido")
    }

}while(seleccionCuotas < 0 || seleccionCuotas > 2)

let confirmacion = prompt("Confirma la compra ? Si/No")

    if(confirmacion == "si"){
        alert("muchas gracias por su compra !")
    }
    else{
        alert("Gracias por su visita !")
    }


