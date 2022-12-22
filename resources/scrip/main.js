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

$(document).ready(function(){
    $("#encriptar_").on("click", function(){
        $("#caja_").fadeOut("slow");

        setTimeout(function(){
            $("#respuesta_").fadeIn("slow");
        }, 1000);

    });
    $("#desencriptar_").on("click", function(){
        $("#caja_").fadeOut("slow");

        setTimeout(function(){
            $("#respuesta_").fadeIn("slow");
        }, 1000);

    });
    $("#copiar_").on("click", function(){
        $("#respuesta_").fadeOut("slow");

        setTimeout(function(){
            $("#caja_").fadeIn("slow");
        }, 1000);

    });
});

encriptar.addEventListener('click', encriptarTexto);

desencriptar.addEventListener('click', desencriptarTexto);

copiar.addEventListener('click', copiarTexto);


function encriptarTexto() {
    cadena = document.getElementById("cadena").value;
    if(revisarTexto()) {
        $('#cadena').val("");

        for(let i = 0; i < cadena.length; i++) {
            let letra = cadena.charAt(i);
            switch(letra) {
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
        $('#textoMensaje_').val(nuevaCadena);
        nuevaCadena = "";
    } else {
        $('#textoMensaje_').val("debes ingresar un texto, intenta copiar este!");
    }
}

function desencriptarTexto() {
    cadena = document.getElementById("cadena").value;
    if(revisarTexto()) {
        $('#cadena').val("");

        for(let i = 0; i < cadena.length; i++) {
            let letra = cadena.charAt(i);
            switch(letra) {
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
        $('#textoMensaje_').val(nuevaCadena);
        nuevaCadena = "";
    } else {
        $('#textoMensaje_').val("denterbenters imesngrentersair ufatn tenterxtober, imesntenterntai coberpimesair enterstenter!");
    }
}

function copiarTexto() {
    document.querySelector('#textoMensaje_').focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
}

function revisarTexto() {
    if(cadena == "") {
        return false;
    } else {
        return true;
    }
}
