$.validator.setDefaults({
    submitHandler: function() {
        location.href = "/index.html";
    }

});


$(document).ready(function() {
    $('#signupForm').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 8


            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            fullname: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            password: {
                required: "Por favor ingresa una contraseña",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres"
            },
            email: "Por favor ingresa un correo válido",
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
        },
    });
});