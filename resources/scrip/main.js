//Variable equivalentes a cada vocal
const vocal = ["ai", "enter", "imes", "ober", "ufat"];

//Botones
const copiar = document.querySelector('#copiar_');
const encriptar = document.querySelector('#encriptar_');
const desencriptar = document.querySelector('#desencriptar_');

//Variable para manipular la cadena
var cadena = "";
//Variable para concatenar la cadena
var nuevaCadena = "";

//Aqui vamos a manipular la seccion donde veremos
//la cadena nueva
$(document).ready(function(){
    //Al detectar el evento click del boton
    //encriptar vamos a esconder la imagen y texto
    $("#encriptar_").on("click", function(){
        $("#caja_").fadeOut("slow");
        //Esperamos un poco para poder mostrar el mensaje ya procesado
        setTimeout(function(){
            $("#respuesta_").fadeIn("slow");
        }, 1000);

    });
    //De la misma forma que la anterior solo que ahora empleamos el
    //boton desencriptar para escoderlo esta vez
    $("#desencriptar_").on("click", function(){
        $("#caja_").fadeOut("slow");

        setTimeout(function(){
            $("#respuesta_").fadeIn("slow");
        }, 1000);

    });
    //Al presionar copiar dejaremos todo como estaba
    //volvemos a mostrar como es inicialmente
    $("#copiar_").on("click", function(){
        $("#respuesta_").fadeOut("slow");

        setTimeout(function(){
            $("#caja_").fadeIn("slow");
        }, 1000);

    });
});

//Evento click en el boton encriptar y llama a funcion encriptarTexto
encriptar.addEventListener('click', encriptarTexto);
//Evento click en el boton desencriptar y llama a funcion desencriptarTexto
desencriptar.addEventListener('click', desencriptarTexto);
//Evento click en el boton copiar y llama a funcion copiarTexto
copiar.addEventListener('click', copiarTexto);


function encriptarTexto() {
    //Pasamos lo que se encuentre en el campo de texto a la
    //variable cadena y si esta en mayusculas sera pasada a
    //minisculas y quitara caracteres especiales
    cadena = document.getElementById("cadena").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //Revisamos que contenga algo
    //si es asi pasaremos a ejecutar instrucciones
    if(revisarTexto()) {
        //Vaciamos el campo de texto textera
        $('#cadena').val("");
        //Iniciamos ciclo for con la longuitud de la cadena
        for(let i = 0; i < cadena.length; i++) {
            //Recorremos la cadena caracter por caracter
            let letra = cadena.charAt(i);
            //Evaluamos con un switch case
            switch(letra) {
                //Si la vocal coincide concatenamos lo de
                //su respectiva posicion en el arreglo
                //a la nueva cadena si no coincide solo concatemos lo
                //que ya tenemos
                case 'a':
                    nuevaCadena += vocal[0];
                break;
                case 'e':
                    nuevaCadena += vocal[1];
                break;
                case 'i':
                    nuevaCadena += vocal[2];
                break;
                case 'o':
                    nuevaCadena += vocal[3];
                break;
                case 'u':
                    nuevaCadena += vocal[4];
                break;
                default:
                    nuevaCadena += letra;
                break;
            }
        }
        //Mostramos el texto nuevo en el campo textoMensaje
        $('#textoMensaje_').val(nuevaCadena);
        //Vaciamos la cadena
        nuevaCadena = "";
        //Si no existe ningun texto
    } else {
        //Mostramos un mensaje para que el usuario lo copie y pueda probra con el mismo
        $('#textoMensaje_').val("debes ingresar un texto, intenta copiar este!");
    }
}

function desencriptarTexto() {
    //Pasamos lo que se encuentre en el campo de texto a la
    //variable cadena y si esta en mayusculas sera pasada a
    //minisculas y quitara caracteres especiales
    cadena = document.getElementById("cadena").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //Revisamos que contenga algo
    //si es asi pasaremos a ejecutar instrucciones
    if(revisarTexto()) {
        //Vaciamos el campo de texto textera
        $('#cadena').val("");
        //Iniciamos ciclo for con la longuitud de la cadena
        for(let i = 0; i < cadena.length; i++) {
            //Recorremos la cadena caracter por caracter
            let letra = cadena.charAt(i);
            //Evaluamos con un switch case
            switch(letra) {
                //Si la vocal coincide concatenamos la
                //vocal correspondiente y nos movemos lo
                //que resta de la pequeña cadena parte del
                //cifrado para encontrar la siguiente letra
                //si no coincide solo concatemos lo
                //que ya tenemos
                case 'a':
                    nuevaCadena += "a";
                    i++;
                break;
                case 'e':
                    nuevaCadena += "e";
                    i += 4;
                break;
                case 'i':
                    nuevaCadena += "i";
                    i += 3;
                break;
                case 'o':
                    nuevaCadena += "o";
                    i += 3;
                break;
                case 'u':
                    nuevaCadena += "u";
                    i += 3;
                break;
                default:
                    nuevaCadena += letra;
                break;
            }
        }
        //Mostramos el texto nuevo en el campo textoMensaje
        $('#textoMensaje_').val(nuevaCadena);
        //Vaciamos la cadena
        nuevaCadena = "";
        //Si no existe ningun texto
    } else {
        //Mostramos un mensaje para que el usuario lo copie y pueda probra con el mismo
        $('#textoMensaje_').val("denterbenters imesngrentersair ufatn tenterxtober, imesntenterntai coberpimesair enterstenter!");
    }
}

function copiarTexto() {
    //Sentramos un puntero en el campo textoMensaje_
    document.querySelector('#textoMensaje_').focus();
    //Seleccionamos dicho campo
    document.execCommand('selectAll');
    //Copiamos
    document.execCommand('copy');
}

function revisarTexto() {
    //Si no exite nada en la cadena
    if(cadena == "") {
        //retornamos falso
        return false;
    } else {
        //si no retornamos verdadero
        return true;
    }
}
