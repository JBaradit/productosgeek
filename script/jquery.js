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
    $('.username-correct').hide();

    /* VALIDACIÓN FORMULARIO CONTACTO */
    $('#username').blur(function (event) {

        let nombre = $('#username').val().trim()
        /* Ver campos vacios */
        if (nombre.length == 0) {
            $('.username-error').show();
            $('.username-length-error').hide();

        }
        /* Ver si tiene menos de 3 caracteres */
        else if (nombre.length < 3) {
            $('.username-error').hide();
            $('.username-length-error').show();

        } else {
            $('.username-error').hide();
            $('.username-length-error').hide();
            $('.username-correct').show();
        }

    });

    $('#email').blur(function (event) {
        let correo = $('#email').val().trim()

        if (correo.length == 0) {
            $('.email-error').show();
            $('.email-format-error').hide();
            return;
        }
        else if (!emailValido(correo)) {
            $('.email-format-error').show();
            $('.email-error').hide();
            return;
        }
        else {
            $('.email-error').hide();
            $('.email-format-error').hide();
        }
    });


    var pass;
    $('#password').blur(function (event) {
        let contrasena = $('#password').val().trim()

        if (contrasena.length == 0) {
            $('.password-error').show();
            $('.password-format').hide();
        }

        else if (contrasena.length < 8) {
            $('.password-error').hide();
            $('.password-format').show();
        }

        else {
            $('.password-format').hide();
            $('.password-error').hide();
            contrasena = pass
            return pass;
        }
    });


    $('#password2').blur(function (event) {
        let contrasena2 = $('#password2').val().trim()

        if (contrasena2.length == 0) {
            $('.password2-error').show();
            $('.password-match-error').hide();
        }
        else if (contrasena2 != errorContrasena()) {
            $('.password2-error').hide();
            $('.password-match-error').show();
        }
        else {
            $('.password2-error').hide();
            $('.password-match-error').hide();
        }
    });


    $('#fr-checkbox').blur(function (event) {
        let checkbox = $('#fr-checkbox').is(":checked")

        if (checkbox.length > 0) {
            $('.terms-error').hide();
        }
        else {
            $('.terms-error').show();
        }
    })



    /* VALIDACIÓN CONTACTO */

    $('#usuario').blur(function (evento) {
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
    $('#telefono').blur(function (evento) {
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
    $('#correo').blur(function (evento) {
        let correo = $('#correo').val().trim()

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
    });

    $('#msg').blur(function (evento) {
        let msg = $('#msg').val().trim()

        if (msg.length < 20) {
            $('.error4').show();
            return;
        } else {
            $('.error4').hide();
        }

    });

    $('#motivo').blur(function (evento) {
        let opcion = $('select option:selected').val();

        if (opcion != '0') {
            $('.error3').hide();
        } else {
            $('.error3').show();
        }

    });

    $('#usuario1').blur(function (evento) {
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
    $('#telefono1').blur(function (evento) {
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
    $('#correo1').blur(function (evento) {
        let correo = $('#correo1').val().trim()

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

    });

    $('#msg1').blur(function (evento) {
        let msg = $('#msg1').val().trim()

        if (msg.length < 20) {
            $('.error4').show();
            return;
        } else {
            $('.error4').hide();
        }

    });

    $('#motivo1').blur(function (evento) {
        let opcion1 = $('select option:selected').val();

        if (opcion1 != '0') {
            $('.error3').hide();
        } else {
            $('.error3').show();
        }

    });

});


function emailValido(correo) {
    let patron = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);

    return patron.test(correo);
}


