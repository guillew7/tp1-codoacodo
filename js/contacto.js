let formulario = document.getElementById("formulario");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");


//let email="guillermodwilliams@gmail.com"

let validarEmail = function(email) {
    if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value)){
    emailOk = true;
    } else {
     alert("El email ingresado no es correcto. Por favor, escribalo nuevamente");
    }
    }

  
let validarFormulario = function(){

    if (nombre.value.length == 0){
        alert("No completó su nombre, por favor escríbalo");
    }
    if (apellido.value.length == 0){
        alert("No escribió su apellido, por favor escribalo")
    } 
    if (email.value.length == 0){
        alert("Por favor escriba su Email");
        }else validarEmail(email);
    }