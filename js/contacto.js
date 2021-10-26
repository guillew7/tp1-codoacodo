//variables
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const btnEnviar = document.getElementById("botonEnviar");

//array con los datos que fueron completados erroneamente
let datosError=[]

//mensaje de Alerta que aparece al enviar Formulario

const mensajeError= "Por favor complete correctamente los siguientes datos: \n"
const mensajeDatosOk= "Muchas gracias por contactarse con nosotros!, nos pondremos en contacto a la brevedad.\n\n\nEL MANJAR Pizzerías"

//alert que se ejecuta al final de la validacion
const alertFormulario = function(){
    if (nombreOk==false || apellidoOk==false || emailOk==false || telefonoOk==false){
    alert(mensajeError + datosError.join("\n"));
    formulario.addEventListener("click", function(event){
        event.preventDefault()})
        datosError.length=0;
    } else{alert(mensajeDatosOk);
        formulario.submit();}
}

//funciones de Validacion
const validarEmail = function(email) {
    if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value)){
    emailOk = true;
    clearInput(email);
    } else {
    emailOk=false;
    datosError.push("Email");
    errorInput(email);
    }
}
const validarTelefono = function(telefono) {
    if (isNaN(telefono.value)==true || (telefono.value.length <8)){
    telefonoOk=false;
    datosError.push("Telefono");
    errorInput(telefono);
    } else {
    telefonoOk=true;
    clearInput(telefono);
;
    }
}

const validarFormulario = function(){
    if (nombre.value.length == 0){
        nombreOk=false;
        datosError.push("Nombre");
        errorInput(nombre);
    }else{nombreOk=true;
        clearInput(nombre);
    }
    if (apellido.value.length == 0){
        apellidoOk=false;
        datosError.push("Apellido");
        errorInput(apellido);
    } else{apellidoOk=true;
    clearInput(apellido);
}
    if (email.value.length == 0){
        emailOk=false;
        datosError.push("Email");
        errorInput(email);
        }else validarEmail(email);

    if (telefono.value.length == 0){
            telefonoOk=false;
            datosError.push("Telefono");
            errorInput(telefono);
            }else validarTelefono(telefono);
    alertFormulario();
    }

    //funciones para limpiar el textarea y los inputs
    function clearContents(element) {
        element.value = '';
      }
    function clearInput(element){
        element.style.borderColor= "black";
        element.style.backgroundColor= "white";
    }
//funcion para marcar casilleros de input con errores
    function errorInput(element){
        element.style.borderColor= "red";
        element.style.backgroundColor= "#FFBFBF";
    }