
document.addEventListener("DOMContentLoaded", function() {
    const DOMelement ={
        //calculadora
        num1: document.getElementById("num1"),
        num2: document.getElementById("num2"),
        resultadoCalculadora: document.getElementById("resultadoCalculadora"),
        mensajeCalculadora: document.getElementById("mensajeCalcualdora"),

        //form
        nombre: document.querySelector("nombre"),
        correo: document.querySelector("correo"),
        contrasena: document.querySelector("contrasena"),
        fechaNacimiento: document.querySelector("fechaNacimiento"),
        formMensaje: document.getElementById("formMensaje"),
        errorNombre: document.getElementById("errorNombre"),
        errorCorreo: document.getElementById("errorCorreo"),
        errorContrasena: document.getElementById("errorCotrasena"),
        registro: document.getElementById("form"),
    };

    // ~~~~~ CALCULADORA ~~~~~
    document.getElementById("sumar").addEventListener("click" , () => calcular("+"));
    document.getElementById("restar").addEventListener("click" , () => calcular("-"));
    document.getElementById("multiplicar").addEventListener("click" , () => calcular("*"));
    document.getElementById("dividir").addEventListener("click" , () => calcular("/"));

    //funcion principal de calculadora
    function calcular(operacion){
        const num_1_str = DOMelement.num1.value; //str
        const num_2_str = DOMelement.num2.value; //str

        //valido que esten llenos los 2
        if(num_1_str.trim() == "" || num_2_str.trim() == ""){
            mostrarMensaje(DOMelement.mensajeCalculadora, "Error: debe ingresar ambos números", "error");
            DOMelement.resultadoCalculadora.textContent = "---" ;
            return;
        }

        const num_1 = parseFloat(DOMelement.num1.value);
        const num_2 = parseFloat(DOMelement.num2.value);

        //hago operacion segun operacion
        const result = hacerOperacion(num_1 , num_2 , operacion);

        //muestro resultado
        if(typeof result === "string"){
            mostrarMensaje(DOMelement.mensajeCalculadora, result , "error");
            DOMelement.resultadoCalculadora.textContent = "---" ;
            return;
        } else {
            mostrarMensaje(DOMelement.mensajeCalculadora, "Calculo hecho correctamente", "success");
            DOMelement.resultadoCalculadora.textContent = result;
        }
    }

    //funcion que hace la operacion segun operacion
    function hacerOperacion(a , b , operacion){
        switch (operacion) {
            case "+":
                return a+b ;
            case "-":
                return a-b ;
            case "*":
                return a+b ;
            case "/":
                if(b == 0) {
                    return "Error no se puede dividir para 0";
                } else {
                    return a/b;
                }
                break;
            default:
                return "Error no se reconoce la operacion";
        }
    }

    // ~~~~~ FORMULARIO ~~~~~
    DOMelement.registro.addEventListener("submit" , registrar);

    //funcion principal de registro
    function registrar(event) {
        event.preventDefault(); //evitar envio por error

        let formValido = true ;

        //validacion nombre
        const errorNombre = validarCampo("nombre" , DOMelement.nombre.value);
        mostrarMensaje(DOMelement.errorNombre, errorNombre, "error");
        if (errorNombre) formulario = false ;

        //validacion correo
        const errorCorreo = validarCampo("correo" , DOMelement.correo.value);
        mostrarMensaje(DOMelement.errorNombre, errorCorreo, "error");
        if (errorCorreo) formulario = false ;

        //validacion contraseña
        const errorContrasena = validarCampo("contrasena" , DOMelement.contrasena.value);
        mostrarMensaje(DOMelement.errorNombre, errorContrasena, "error");
        if (errorContrasena) formulario = false ;

        if(formValido){
            //exito general
            mostrarMensaje(DOMelement.formMensaje, "Registro Exitoso" , "success");
        } else {
            //mal
            mostrarMensaje(DOMelement.formMensaje, "Revisar que el form este lleno correctamente" , "error");
        }

    }

    //key up ya mismo reviso eso

    //funcion para validar los campos
    function validarCampo(campoId , valor){
        //campo vacio
        if(valor.trim() === ''){
            return "Este campo no puede estar vacio";
        }

        switch(campoId) {
            case "nombre":
                if(valor.length < 3) {
                    return "El nombre debe tener al menos 3 caracteres" ;
                }
                break;
            case "correo":
                const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if(!re.test(valor)){
                    return "El formato del correo no es válido" ;
                }
                break;
            case "contrasena":
                if(valor.length < 6) {
                    return "La contaseña debe tener minimo 6 caracteres" ;
                }
                break;
        }
        return ""; //nada sera exito
    }

    // ~~~~~ FECHAS ~~~~~







    //funcion para mostrar los mensajes en el form
    function mostrarMensaje(elemento, mensaje, tipo) {
        if(tipo === "success"){
            elemento.classList.add('success-msg');
            elemento.classList.remove('error-msg');
        } else {
            elemento.classList.add('error-msg');
            elemento.classList.remove('success-msg');
        }
    }

});
