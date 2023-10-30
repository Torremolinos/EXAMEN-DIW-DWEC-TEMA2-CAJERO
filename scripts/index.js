/**
 * @Author: Adrian Iglesias Riño
 * @github: https//github.com/
 */

document.addEventListener('DOMContentLoaded', () => {

    //Declaro las variables globales que voy a usar.
    let saldo = 1000;
    let pin = "1234";
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
        spanSaldo.innerText = `${saldo.toFixed(2)}€`;
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
            console.log(`Saldo: ${saldo}€, Ingreso: ${ingreso}€`);
            alert(`Ingresaste : ${ingreso}€`);
            saldoActual();
        }
    };


    const restarSaldo = () => {
        const retiro = parseFloat(prompt(`Ingresa la cantidad a retirar`));
        if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
            alert(`Datos erroneos, ingresa la cantidad correctamente`);
        } else {
            saldo -= retiro;
            //con esto compruebo que los datos salen como quiero y veo que ingreso recibe el dato correctamente.
            console.log(`Saldo: ${saldo}€, Ingreso: ${retiro}€`);
            alert(`Retiraste : ${retiro}€`);
            saldoActual();
        }
    }

    const transferirSaldo = () => {
        const monto = parseFloat(prompt(`Ingresa el monto a transferir`))
        let expresionRegular = /^(ES\d{22})$/;
        let cuenta = prompt(`Introduce la cuenta de banco para transferir el dinero`);
        if (expresionRegular.test(cuenta) === false) {
            console.log(expresionRegular.test(cuenta)) //aqui controlo que  salga false.
            alert(`Cuenta de banco mal introducida`);
            return;
        }
        if (isNaN(monto) || monto <= 0 || monto > saldo) {
            alert(`Datos erroneos, introduce el monto correcto`)
        } else {
            saldo -= monto;
            //con esto compruebo que los datos salen como quiero y veo que ingreso recibe el dato correctamente.
            console.log(`Saldo: ${saldo}€, Ingreso: ${monto}€`);
            alert(`Retiraste : ${monto}€`);
            saldoActual();
        }
    }
    //Creo el metodo cambiar pin, donde guardo en una variable nueva el nuevo pin porque el otro es CONSTANTE Y GLOBAL y no se puede cambiar, una vez refresque vuelvo a tener la misma contraseña
    const cambiarPin = () => {
        const pinActual = prompt(`Introduce el pin actual`)

        if (pinActual != pin) {
            alert(`Introduce correctamente el pin actual, no se ha modificado la contraseña`);
            return;
        }
        console.log('pin:' + pin)

        pin = prompt(`Introduce un nuevo pin`);
        console.log(`pin: ${pin}`);
        alert(`Tu nuevo pin es: ${pin}`)
        console.log(`pin:${pin}`);
        //que compruebe antes el pin y luego lo cambia lo muestra.
    }


    //Creo el metodo salirPRograma para salir del programa 
    const salirPrograma = () => {
        window.location.replace('templates/salida.html')
    }

    //Creo el metodo inicio de sesion para comprobar el Pin.
    const inicioSesion = () => {
        let contra = prompt(`Inserta la contraseña correcta`)
        while (intentos > 1 && contra != pin) {
            intentos--;
            alert(`Contraseña incorrecta. Te quedan ${intentos}`);
            contra = prompt(`Inserta la contraseña correcta`)
        }
        if (contra === pin) {
            alert(`Contraseña correcta, selecciona la opcion que desees`);
        } else {
            window.location.replace('templates/bloqueo.html');
        }
    }
    //Hago un event que cuando carge la pantalla solo se de acceso al metodo Inicio sesion.
    document.addEventListener('load', inicioSesion());

    //Una vez lanzado el inicio de sesion cuando carga el programa tienes acceso a los metodos
    depositar.addEventListener("click", ingresarSaldo);
    retirar.addEventListener("click", restarSaldo);
    transferir.addEventListener("click", transferirSaldo);
    cambiarContrasenia.addEventListener("click", cambiarPin)
    salir.addEventListener("click", salirPrograma)

});
