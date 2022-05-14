$(document).ready(function(){
	$('#formulario').validate({
		submitHandler: function(){
		$.post("guarda.php",
			{
				nombre: $("#nombre").val(),
				apaterno: $("#apaterno").val(),
				amaterno: $("#amaterno").val(),
				ciudad: $("#ciudad").val()
			},
			function(data, status){
				alert("Datos: "+ data +"Status:"+status);
				$("#formulario").trigger("reset");
			});
	}, 

		rules: {
			nombre: {
				required: true,
				minlength: 2,
				maxlength: 30
			},
			apaterno: {
                                required: true,
                                minlength: 2,
                                maxlength: 30
                        },
			amaterno: {
                                required: true,
                                minlength: 2,
                                maxlength: 30
                        },
			ciudad: {
                                required: true,
                                minlength: 2,
                                maxlength: 50
                        }
		},

		messagges: {
			nombre: {
				required: "Campo obligatorio",
				minlenght: "Nombre debe tener minimo 2 caracteres",
				maxlenght: "Nombre debe tener maximo 30 caracteres"
			},
			apaterno: {
                                required: "Campo obligatorio",
                                minlenght: "Apellido Paterno debe tener minimo 2 caracteres",
                                maxlenght: "Apellido Paterno tener maximo 30 caracteres"
                        },
			amaterno: {
                                required: "Campo obligatorio",
                                minlenght: "Apellido Materno debe tener minimo 2 caracteres",
                                maxlenght: "Apellido Materno maximo 30 caracteres"
                        },
			ciudad: {
                                required: "Campo obligatorio",
                                minlenght: "Ciudad debe tener minimo 2 caracteres",
                                maxlenght: "Ciudad debe tener maximo 30 caracteres"
                        }
		}
	});

});
