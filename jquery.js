$(document).ready(() => {
    $('.error').hide();
    $('.errorClave').hide();
    $('.errorVacio').hide();
    $('.email-valido').hide();
    $('#correo').blur(function(evento) {
        let correo = $('#correo').val().trim()

        if (correo.length < 1) {
            $('.error').show();
            return;
        } else {
            $('.error').hide();
        }

        if (!emailValido(correo) && (correo.length > 0)) {
            $('.email-valido').show();
            return;
        } else {
            $('.email-valido').hide();
        }

    });


    if (!emailValido(correo) && (correo.length > 0)) {
        $('.email-valido').show();
        return;
    } else {
        $('.email-valido').hide();
    }



});

$('#clave').blur(function(evento) {

    let clave = $('#clave').val().trim()

    if (clave.length == 0) {
        $('.errorClave').show();
        $('.errorVacio').hide();
        return;
    }
    if (clave.length < 3 && clave.length > 0) {
        $('.errorClave').hide();
        $('.errorVacio').show();

    } else {
        $('.errorClave').hide();
        $('.errorVacio').hide();
    }

});

$('#formulario-submit').submit(function(evento) {
    evento.preventDefault();
    let correo = $('#correo').val().trim()

    if (correo.length < 1) {
        $('.error').show();
        return;
    } else {
        $('.error').hide();
    }

    if (!emailValido(correo) && (correo.length > 0)) {
        $('.email-valido').show();
        return;
    } else {
        $('.email-valido').hide();
    }

});

$('#formulario-submit').submit(function(evento) {
    evento.preventDefault();
    let clave = $('#clave').val().trim()

    if (clave.length == 0) {
        $('.errorClave').show();
        $('.errorVacio').hide();
        return;
    }
    if (clave.length < 3 && clave.length > 0) {
        $('.errorClave').hide();
        $('.errorVacio').show();

    } else {
        $('.errorClave').hide();
        $('.errorVacio').hide();
    }

});

function emailValido(correo) {
    let patron = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return patron.test(correo);
}