$(document).ready(() => {
    $('.error').hide();
    $('.error1').hide();
    $('.error2').hide();
    $('.error3').hide();
    $('.error4').hide();
    $('.error5').hide();
    $('.email-valido').hide();
    $('.telefono-valido').hide();

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
            return;
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

});


function emailValido(correo) {
    let patron = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);

    return patron.test(correo);
}