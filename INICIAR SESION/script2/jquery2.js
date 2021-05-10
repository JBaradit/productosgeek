/*validación formulario iniciar sesion*/

function validarEmail1() {
    let correo = $('#correo_2').val().trim()


    if (correo.length == 0) {
        $('.error_2').show();
        $('.emailValido_2').hide();
        return false;

    } else if (!emailValido(correo)) {
        $('.emailValido_2').show();
        $('.error_2').hide();

        return false;

    } else {
        $('.emailValido_2').hide();
        $('.error_2').hide();

        return true;
    }

}

function validarClave() {

    let clave = $('#clave').val().trim()

    if (clave.length == 0) {
        $('.errorClave').show();
        $('.errorVacio').hide();
        return false;
    }
    if (clave.length < 3 && clave.length > 0) {
        $('.errorClave').hide();
        $('.errorVacio').show();
        return false;

    } else {
        $('.errorClave').hide();
        $('.errorVacio').hide();
        return true;
    }

}

$(document).ready(() => {

    $('.error_2').hide();
    $('.errorClave').hide();
    $('.errorVacio').hide();
    $('.emailValido_2').hide();






    /*Validacion de campo inicio sesión*/
    $('#correo_2').blur(validarEmail1);
    $('#clave').blur(validarClave);



    $('#formulario-inicio-submit').submit(function(e) {
        let resultado = true;
        resultado &= validarEmail1()
        resultado &= validarClave()
            /*resultado = resultado & validarNombre(); */
        return !!resultado;
        /* & boolean a enteros */
        /* !! entero a booleano */
    });
});

function emailValido(correo) {
    let patron = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);

    return patron.test(correo);
}