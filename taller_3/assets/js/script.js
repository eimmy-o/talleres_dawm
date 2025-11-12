
document.addEventListener("DOMContentLoaded", function() {
    const DOMelement ={
        //calculadora
        num1: document.getElementById("num1"),
        num2: document.getElementById("num2"),
        resultadoCalculadora: document.getElementById("resultadoCalculadora"),
        mensajeCalculadora: document.getElementById("mensajeCalcualdora")
    }

    //calcualdora
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
            //to-do: error
        }

        const num_1 = parseFloat(DOMelement.num1.value);
        const num_2 = parseFloat(DOMelement.num2.value);

        //hago operacion segun operacion
        const result = hacerOperacion(num_1 , num_2 , operacion);

        //muestro resultado
        if(string){
            //to-do: error
        } else {
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
                    return "Error no se puede dividir para 0"
                } else {
                    return a/b
                }
            default:
                return "Error no se reconoce la operacion";
        }
    }

    //to-do: funcion de eror

    //form
})