$.validator.setDefaults({
    submitHandler: function() {
        $("form input[type=text] , form input[type=textarea], form select, form input[type=tel], form input[type=password]").each(function() { this.value = '' });
        location.href = "registro_completo.html";
    }
});


$(document).ready(function() {
    $('#signupForm').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            phone: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 9

            },
            password: {
                required: true,
                minlength: 8


            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            sexo: {
                required: true,
            },
        },
        messages: {
            fullname: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            comments: "Por favor ingresa un comentario",
            password: {
                required: "Por favor ingresa una contraseña",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres"
            },
            confirm_password: {
                required: "Ingresa un password",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres",
                equalTo: "Por favor las contraseñas deben ser iguales"
            },
            email: "Por favor ingresa un correo válido",
            sexo: {
                required: "Por favor ingresa una opcion valida"
            },
            phone: {
                required: "Ingresa un numero",
                number: "Solo debe ser numeros",
                minlength: "Debe tener digitos tu numero 9",
                maxlength: "Debe tener digitos tu numero 9"

            }
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-success").removeClass("has-error");
        }
    });
});