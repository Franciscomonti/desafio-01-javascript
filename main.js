let producto1 = 100
let producto2 = 200
let producto3 = 300
let producto4 = 400

let precio = 0
let seleccionProducto = 0

function valorcuota(producto, cantidadcuotas){
    return parseInt(producto / cantidadcuotas)}

alert("bienvenido a TuTienda !")

// seleccion de producto menu de opciones

do{
    seleccionProducto = parseInt(prompt("seleccione el prducto deseado :\n1. producto 1\n2. producto 2\n3. producto 3\n4. producto 4"))

    if(seleccionProducto > 0 , seleccionProducto < 5){
        switch(seleccionProducto){
            case 1:
                precio = producto1
                alert("Usted selecciono el producto 1 valor " + producto1)
                break
            case 2:
                precio = producto2
                alert("Usted selecciono el producto 2 valor " + producto2)
                break
            case 3:
                precio = producto3
                alert("Usted selecciono el producto 3 valor " + producto3)
                break
            case 4:
                precio = producto4
                alert("Usted selecciono el producto 4 valor " + producto4)
                break
        }
    }
    else{
    alert("Usted no selecciono ningun producto")
    }

}while(seleccionProducto < 1 || seleccionProducto > 4 )

// sleccion de cantidad de cuotas

let seleccionCuotas = 0

do{
    seleccionCuotas = parseInt(prompt("seleccione cantidad de cuotas:\n1. Un pago sin interes\n2. Tres pagos sin interes\n3. Seis pagos sin interes"))

    if(seleccionCuotas == 1){
        alert("Usted selecciono un pago sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 1))
    }
    else if(seleccionCuotas == 2){
        alert("Usted selecciono Tres pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 3))
    }
    else if(seleccionCuotas == 3){
        alert("Usted selecciono Tres pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 6))
    }
    else{
        alert("Usted no selecciono un valor de cuotas valido")
    }

}while(seleccionCuotas < 1 || seleccionCuotas > 3)

// confirmacion de compra 

let confirmacion = prompt("Confirma la compra ? Si/No")

    if(confirmacion == "si"){
        alert("Muchas gracias por su compra !")
    }
    else{
        alert("Gracias por su visita !")
    }


