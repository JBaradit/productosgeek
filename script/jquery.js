function validarNombre() {
    let nombre = $('#username').val().trim()

    if (nombre.length == 0) {
        $('.username-error').show();
        $('.username-length-error').hide();
        $('#username-error-icon').show();
        $('#username-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    }
    /* Ver si tiene menos de 3 caracteres */
    else if (nombre.length < 3) {
        $('.username-error').hide();
        $('.username-length-error').show();
        $('#username-error-icon').show();
        $('#username-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    } else {
        $('.username-error').hide();
        $('.username-length-error').hide();
        $('.username-correct').show();
        $('#username-error-icon').hide();
        $('#username-success-icon').show();
        $(this).css('border', 'solid 3px #2ecc71');
        return true;
    }
}

function validarEmail() {
    let correo = $('#email').val().trim()

    if (correo.length == 0) {
        $('.email-error').show();
        $('.email-format-error').hide();
        $('#email-error-icon').show();
        $('#email-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    } else if (!emailValido(correo)) {
        $('.email-format-error').show();
        $('.email-error').hide();
        $('#email-error-icon').show();
        $('#email-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;

    } else {
        $('.email-error').hide();
        $('.email-format-error').hide();
        $('#email-error-icon').hide();
        $('#email-success-icon').show();
        $(this).css('border', 'solid 3px #2ecc71');
        return true;
    }
}


function validarContrasena() {
    let contrasena = $('#password').val().trim()
    let contrasena2 = $('#password2').val().trim()

    if (contrasena2.length != 0 & contrasena.length != 0 & contrasena != contrasena2) {
        $('.password-format').show();
        $('.password-match-error').show();
        $('#password-error-icon').show();
        $('#password2-error-icon').show();
        $('#password-success-icon').hide();
        $('#password2-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        $('#contrasena2').css('border', 'solid 3px #e74c3c');
        return false;
    }
    if (contrasena.length == 0) {
        $('.password-error').show();
        $('.password-format').hide();
        $('#password-error-icon').show();
        $('#password-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    } else if (contrasena.length < 8) {
        $('.password-error').hide();
        $('.password-format').show();
        $('#password-error-icon').show();
        $('#password-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    } else {
        $('.password-format').hide();
        $('.password-error').hide();
        $('#password-error-icon').hide();
        $('#password-success-icon').show();
        $(this).css('border', 'solid 3px #2ecc71');

        if (contrasena == contrasena2) {
            $('.password-error').hide();
            $('.password-format').hide();
            $('#password-error-icon').hide();
            $('#password-success-icon').show();
            $('#password2-success-icon').show();
            $(this).css('border', 'solid 3px #2ecc71');
            $('#contrasena2').css('border', 'solid 3px #2ecc71');
            return true;
        } else {
            return false;
        }
    }
}

function validarContrasena2() {
    let contrasena2 = $('#password2').val().trim()
    let contrasena = $('#password').val().trim()


    if (contrasena2.length == 0) {
        $('.password2-error').show();
        $('.password-match-error').hide();
        $('#password2-error-icon').show();
        $('#password2-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    } else if (contrasena2 != contrasena) {
        $('.password2-error').hide();
        $('.password-match-error').show();
        $('#password2-error-icon').show();
        $('#password2-success-icon').hide();
        $(this).css('border', 'solid 3px #e74c3c');
        return false;
    } else {
        $('.password2-error').hide();
        $('.password-match-error').hide();
        $('#password2-error-icon').hide();
        $('#password2-success-icon').show();
        $(this).css('border', 'solid 3px #2ecc71');
        return true;
    }
}

function validarTerminos() {
    if ($('#fr-checkbox').is(':checked')) {
        $('#terms-error').hide();
        return true;
    } else {
        $('#terms-error').show();
        return false;
    }
}


/*validación formulario contacto*/

function validarNombre1() {
    let nombre = $('#usuario').val().trim()
    if (nombre.length == 0) {
        $('.error').show();
        $('.error5').hide();
    } else {
        $('.error').hide();

    }
    if (nombre.length < 3 && nombre.length > 0) {
        $('.error').hide();
        $('.error5').show();
        return false;
    } else {
        $('.error5').hide();
        return true;
    }
}

function validarCorreo() {
    let correo = $('#correo').val().trim()

    if (correo.length < 1) {
        $('.error1').show();
        $('.email-valido').hide();
    } else {
        $('.error1').hide();
    }

    if (!emailValido(correo) && (correo.length > 0)) {
        $('.email-valido').show();
        return false;
    } else {
        $('.email-valido').hide();
        return true;
    }
}

function validarTelefono() {
    let telefono = $('#telefono').val().trim()
    if (telefono.length == 0) {
        $('.error2').show();
        $('.telefono-valido').hide();
        return false;
    }

    if (!/^56 ?9 ?[1-9][0-9]{3} ?[0-9]{4}$/.test(telefono)) {
        $('.error2').hide();
        $('.telefono-valido').show();
        return false;
    }

    $('.error2').hide();
    $('.telefono-valido').hide();
    return true;
}

function validarMotivo() {
    let opcion = $('select option:selected').val();

    if (opcion != '0') {
        $('.error3').hide();
        return true;
    } else {
        $('.error3').show();
        return false;
    }
}

function validarMsj() {
    let msg = $('#msg').val().trim()

    if (msg.length < 20) {
        $('.error4').show();
        return false;
    } else {
        $('.error4').hide();
        return true;
    }
}

/*Validación de campo formulario responsivo*/

function validarNombre2() {
    let nombre = $('#usuario1').val().trim()
    if (nombre.length == 0) {
        $('.error').show();
        $('.error5').hide();
    } else {
        $('.error').hide();

    }
    if (nombre.length < 3 && nombre.length > 0) {
        $('.error').hide();
        $('.error5').show();
        return false;

    } else {
        $('.error5').hide();
        return true;
    }
}

function validarCorreo2() {
    let correo = $('#correo1').val().trim()

    if (correo.length < 1) {
        $('.error1').show();
        $('.email-valido').hide();
    } else {
        $('.error1').hide();
    }

    if (!emailValido(correo) && (correo.length > 0)) {
        $('.email-valido').show();
        return false;
    } else {
        $('.email-valido').hide();
        return true;
    }
}

function validarTelefono2() {
    let telefono = $('#telefono1').val().trim()
    if (telefono.length == 0) {
        $('.error2').show();
        $('.telefono-valido').hide();
        return false;
    }

    if (!/^56 ?9 ?[1-9][0-9]{3} ?[0-9]{4}$/.test(telefono)) {
        $('.error2').hide();
        $('.telefono-valido').show();
        return false;
    }

    $('.error2').hide();
    $('.telefono-valido').hide();
    return true;

}


function validarMsj2() {
    let msg = $('#msg1').val().trim()

    if (msg.length < 20) {
        $('.error4').show();
        return false;
    } else {
        $('.error4').hide();
        return true;
    }
}

$(document).ready(() => {
    $('.error').hide();
    $('.error1').hide();
    $('.error2').hide();
    $('.error3').hide();
    $('.error4').hide();
    $('.error5').hide();
    $('.email-valido').hide();
    $('.telefono-valido').hide();
    $('.username-error').hide();
    $('.username-length-error').hide();
    $('.email-error').hide();
    $('.email-format-error').hide();
    $('.password-error').hide();
    $('.password-format').hide();
    $('.password2-error').hide();
    $('.password-match-error').hide();
    $('.terms-error').hide();



    /* VALIDACIÓN FORMULARIO CONTACTO */
    /* $('....').on("blur submit", function() { ... }); */

    $('#username').blur(validarNombre);
    $('#email').blur(validarEmail);
    $('#password').blur(validarContrasena);
    $('#password2').blur(validarContrasena2);
    $('#fr-checkbox').blur(validarTerminos);

    $('#formulario-registro').submit(function(e) {
        let resultado = true;
        resultado &= validarNombre()
        resultado &= validarEmail()
        resultado &= validarContrasena()
        resultado &= validarContrasena2()
        resultado &= validarTerminos()

        /*resultado = resultado & validarNombre(); */
        return !!resultado;
        /* & boolean a enteros */
        /* !! entero a booleano */
    });

    /*Validacion de campo formulario contacto*/

    $('#usuario').blur(validarNombre1);
    $('#correo').blur(validarCorreo);
    $('#telefono').blur(validarTelefono);
    $('#motivo').blur(validarMotivo);
    $('#msg').blur(validarMsj);

    /*Validacion de campo formulario responsivo*/

    $('#usuario1').blur(validarNombre2);
    $('#correo1').blur(validarCorreo2);
    $('#telefono1').blur(validarTelefono2);
    $('#msg1').blur(validarMsj2);


    /*Validacion submit formulario contacto*/

    $('#formulario-contacto').submit(function(e) {
        let resultado = true;
        resultado &= validarNombre1()
        resultado &= validarCorreo()
        resultado &= validarTelefono()
        resultado &= validarMotivo()
        resultado &= validarMsj()

        /*resultado = resultado & validarNombre(); */
        return !!resultado;
        /* & boolean a enteros */
        /* !! entero a booleano */
    });

    /*Validacion submit formulario contacto responsivo*/
    $('#formulario-contacto2').submit(function(e) {
        let resultado = true;
        resultado &= validarNombre2()
        resultado &= validarCorreo2()
        resultado &= validarTelefono2()
        resultado &= validarMsj2()

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



function iniciarMapa() {
    var coord = { lat: -33.0441425, lng: -71.3770601 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    })
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}


$.getJSON('https://animechan.vercel.app/api/random', function(data) {
    var animeData = data;
    $("#quote").html(animeData.character + ': ' + '"' + animeData.quote + '"');
});