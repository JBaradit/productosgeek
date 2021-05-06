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

    if (contrasena != contrasena2 && contrasena2.length != 0) {
        $('.password2-error').hide();
        $('.password-match-error').show();
        $('#password2-error-icon').show();
        $('#password2-success-icon').hide();
        $('#password2').css('border', 'solid 3px #e74c3c');
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


    /* VALIDACIÓN CONTACTO */

    $('#usuario').blur(function(evento) {
        let nombre = $('#usuario').val().trim()

        if (nombre.length == 0) {
            $('.error').show();
            $('.error5').hide();
        }
        if (nombre.length < 3 && nombre.length > 0) {
            $('.error').hide();
            $('.error5').show();

        } else {
            $('.error5').hide();
        }

    });
    $('#telefono').blur(function(evento) {
        let telefono = $('#telefono').val().trim()

        if (telefono.length == 0) {
            $('.error2').show();
            $('.telefono-valido').hide();
            return;
        }
        if (telefono.length > 0 && telefono.length < 11) {
            $('.error2').hide();
            $('.telefono-valido').show();
        }
        if (telefono.length == 11) {
            $('.error2').hide();
            $('.telefono-valido').hide();
        }
        if (telefono.length > 11) {
            $('.error2').hide();
            $('.telefono-valido').show();
        }

    });
    $('#correo').blur(function(evento) {
        let correo = $('#correo').val().trim()

        if (correo.length < 1) {
            $('.error1').show();
            $('.email-valido').hide();
            return;
        } else {
            $('.error1').hide();
        }

        if (!emailValido(correo) && (correo.length > 0)) {
            $('.email-valido').show();
            return;
        } else {
            $('.email-valido').hide();
        }
    });

    $('#msg').blur(function(evento) {
        let msg = $('#msg').val().trim()

        if (msg.length < 20) {
            $('.error4').show();
            return;
        } else {
            $('.error4').hide();
        }

    });

    $('#motivo').blur(function(evento) {
        let opcion = $('select option:selected').val();

        if (opcion != '0') {
            $('.error3').hide();
        } else {
            $('.error3').show();
        }

    });

    $('#usuario1').blur(function(evento) {
        let nombre = $('#usuario1').val().trim()

        if (nombre.length == 0) {
            $('.error').show();
            $('.error5').hide();
            return;
        }
        if (nombre.length < 3 && nombre.length > 0) {
            $('.error').hide();
            $('.error5').show();

        } else {
            $('.error').hide();
            $('.error5').hide();
        }

    });
    $('#telefono1').blur(function(evento) {
        let telefono = $('#telefono1').val().trim()


        if (telefono.length == 0) {
            $('.error2').show();
            $('.telefono-valido').hide();
        }
        if (telefono.length > 0 && (telefono.length < 11)) {
            $('.error2').hide();
            $('.telefono-valido').show();

        }
        if (telefono.length == 11) {
            $('.error2').hide();
            $('.telefono-valido').hide();
        }
        if (telefono.length > 11) {
            $('.error2').hide();
            $('.telefono-valido').show();
        }
    });
    $('#correo1').blur(function(evento) {
        let correo = $('#correo1').val().trim()

        if (correo.length < 1) {
            $('.error1').show();
            $('.email-valido').hide();
            return;
        } else {
            $('.error1').hide();
        }

        if (!emailValido(correo) && (correo.length > 0)) {
            $('.email-valido').show();

            return;
        } else {
            $('.email-valido').hide();
        }

    });

    $('#msg1').blur(function(evento) {
        let msg = $('#msg1').val().trim()

        if (msg.length < 20) {
            $('.error4').show();
            return;
        } else {
            $('.error4').hide();
        }

    });

    $('#motivo1').blur(function(evento) {
        let opcion1 = $('select option:selected').val();

        if (opcion1 != '0') {
            $('.error3').hide();
        } else {
            $('.error3').show();
        }

    });


    $('#formulario-contacto').submit(function(evento) {
        evento.preventDefault();
        let nombre = $('#usuario').val().trim();
        let correo = $('#correo').val().trim()
        let telefono = $('#telefono').val().trim()
        let msg = $('#msg').val().trim()
        let opcion = $('select option:selected').val();

        if (nombre.length == 0) {
            $('.error').show();
            $('.error5').hide();
        }
        if (nombre.length < 3 && nombre.length > 0) {
            $('.error').hide();
            $('.error5').show();

        } else {
            $('.error5').hide();
        }

        if (correo.length < 1) {
            $('.error1').show();
            return;
        } else {
            $('.error1').hide();
        }

        if (!emailValido(correo) && (correo.length > 0)) {
            $('.email-valido').show();
            return;
        } else {
            $('.email-valido').hide();
        }

        if (telefono.length == 0) {
            $('.error2').show();
            $('.telefono-valido').hide();
        } else if (telefono.length > 0 && telefono.length < 11) {
            $('.error2').hide();
            $('.telefono-valido').show();
        } else if (telefono.length == 11) {
            $('.error2').hide();
            $('.telefono-valido').hide();
        } else if (telefono.length > 11) {
            $('.error2').hide();
            $('.telefono-valido').show();
        }

        if (msg.length < 20) {
            $('.error4').show();
            return;
        } else {
            $('.error4').hide();
        }


        if (opcion != '0') {
            $('.error3').hide();
        } else {
            $('.error3').show();
        }

    });


    /* Validación de formulario responsivo*/

    $('#formulario-contacto1').submit(function(evento) {
        evento.preventDefault();

        let nombre = $('#usuario1').val().trim()

        if (nombre.length == 0) {
            $('.error').show();
            $('.error5').hide();
            return;
        }
        if (nombre.length < 3 && nombre.length > 0) {
            $('.error').hide();
            $('.error5').show();

        } else {
            $('.error').hide();
            $('.error5').hide();
        }

    });
    $('#formulario-contacto1').submit(function(evento) {
        evento.preventDefault();
        let telefono = $('#telefono1').val().trim()


        if (telefono.length == 0) {
            $('.error2').show();
            $('.telefono-valido').hide();
        } else if (telefono.length > 0 && (telefono.length < 11)) {
            $('.error2').hide();
            $('.telefono-valido').show();

        } else if (telefono.length == 11) {
            $('.error2').hide();
            $('.telefono-valido').hide();
        } else if (telefono.length > 11) {
            $('.error2').hide();
            $('.telefono-valido').show();
        }
    });
    $('#formulario-contacto1').submit(function(evento) {
        evento.preventDefault();

        let correo = $('#correo1').val().trim()

        if (correo.length < 1) {
            $('.error1').show();
            $('.email-valido').hide();
            return;
        } else {
            $('.error1').hide();
        }

        if (!emailValido(correo) && (correo.length > 0)) {
            $('.email-valido').show();

            return;
        } else {
            $('.email-valido').hide();
        }

    });

    $('#formulario-contacto1').submit(function(evento) {
        evento.preventDefault();

        let msg = $('#msg1').val().trim()

        if (msg.length < 20) {
            $('.error4').show();
            return;
        } else {
            $('.error4').hide();
        }

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