/**
 * @Author: Adrian Iglesias Riño
 * @github: https//github.com/
 */

document.addEventListener('DOMContentLoaded', () => {

    //Declaro las variables globales que voy a usar.
    let saldo = 1000;
    const PIN = "1234";
    let intentos = 3;

    //Enlazo el html con el js usando DOM es decir los id

    const depositar = document.getElementById("depositar");
    const retirar = document.getElementById("retirar");
    const transferir = document.getElementById("transferir");
    const cambiarContrasenia = document.getElementById("cambiar");
    const salir = document.getElementById("salir");
    const spanSaldo = document.getElementById("resultado");

    // hago los metodos.

    //empiezo con leer el saldo.
    const saldoActual = () => {
        spanSaldo.innerText = `${saldo}€`;
    }
    //pongo el metodo aqui para comprobar que funciona
    saldoActual();

    //metodo ingresar saldo.

    const ingresarSaldo = () => {
        const ingreso = parseFloat(prompt(`Ingresa la cantidad que quieras ingresar`));
        if (isNaN(ingreso) || ingreso <= 0) {
            alert(`Datos erroneos, ingresa la cantidad correctamente`);
        } else {
            saldo += ingreso;
            //con esto compruebo que los datos salen como quiero y veo que ingreso recibe el dato correctamente.
            console.log(`Saldo: ${saldo}, Ingreso: ${ingreso}`);
            alert(`Ingresaste : ${ingreso}`);
            saldoActual();
        }
    };

    depositar.addEventListener("click", ingresarSaldo);

    const restarSaldo = () => {
        const retiro = parseFloat(prompt(`Ingresa la cantidad a retirar`));
        if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
            alert(`Datos erroneos, ingresa la cantidad correctamente`);
        } else {
            saldo -= retiro;
            //con esto compruebo que los datos salen como quiero y veo que ingreso recibe el dato correctamente.
            console.log(`Saldo: ${saldo}, Ingreso: ${retiro}`);
            alert(`Retiraste : ${retiro}`);
            saldoActual();
        }
    }
    retirar.addEventListener("click", restarSaldo);

    const transferirSaldo = () => {
        const monto = parseFloat(prompt(`Ingresa el monto a transferir`))
        //aqui iria la expresion regular. 
        if (isNaN(monto) || monto <= 0 || monto > saldo) {
            alert(`Datos erroneos, introduce el monto correcto`)
        } else {
            saldo -= monto;
            //con esto compruebo que los datos salen como quiero y veo que ingreso recibe el dato correctamente.
            console.log(`Saldo: ${saldo}, Ingreso: ${monto}`);
            alert(`Retiraste : ${monto}`);
            saldoActual();
        }
    }
});
