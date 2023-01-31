

//funcion sencilla para ocultar un elemento de la vista
function hideObj(obj) {
    var muneco = document.getElementById(obj);
    muneco.style.backgroundImage = 'none';
}

//funcion para mostrar el texto en el textarea de resultado.
function name(texto) {
  hideObj("Img");
  

}

//funcion q lee el mensaje y llama a encryptar junto con la clave.
function encryptText() {

    var key="PBKDF2";
    var textarea    = document.getElementById("TxtUser");
    var text = textarea.value;
    var textoEncryptado = encrypt(text,key);
    hideObj("txtResuslt");
    document.getElementById("txtResuslt").value = textoEncryptado;
}

function descryptText() {
    var key="PBKDF2";
    var textarea= document.getElementById("TxtUser");
    var text= textarea.value;  
    var textoDesencryptado = decrypt(text,key);
    document.getElementById("txtResuslt").value = textoDesencryptado;
    
}

//funcion encriptar.
function encrypt(text, key) {
    // Convierte el texto y la clave a arreglos de números
    let textArray = [];
    let keyArray = [];
  
    for (let i = 0; i < text.length; i++) {
      textArray.push(text.charCodeAt(i));
    }
  
    for (let i = 0; i < key.length; i++) {
      keyArray.push(key.charCodeAt(i));
    }
  
    // Crea un arreglo vacío para almacenar el texto encriptado
    let encryptedArray = [];
  
    // Encripta el texto
    for (let i = 0; i < textArray.length; i++) {
      encryptedArray.push(textArray[i] + keyArray[i % keyArray.length]);
    }
  
    // Convierte el arreglo encriptado a una cadena y la devuelve
    let encryptedText = '';
    for (let i = 0; i < encryptedArray.length; i++) {
      encryptedText += String.fromCharCode(encryptedArray[i]);
    }
    console.log(encryptedText);
    return encryptedText;
    
    
}
//funcion desencriptar
function decrypt(encryptedText, key) {
    // Convierte el texto cifrado y la clave a arreglos de números
    let encryptedArray = [];
    let keyArray = [];
  
    for (let i = 0; i < encryptedText.length; i++) {
      encryptedArray.push(encryptedText.charCodeAt(i));
    }
  
    for (let i = 0; i < key.length; i++) {
      keyArray.push(key.charCodeAt(i));
    }
  
    // Crea un arreglo vacío para almacenar el texto desencriptado
    let textArray = [];
  
    // Desencripta el texto
    for (let i = 0; i < encryptedArray.length; i++) {
      textArray.push(encryptedArray[i] - keyArray[i % keyArray.length]);
    }
  
    // Convierte el arreglo a una cadena y la devuelve
    let text = '';
    for (let i = 0; i < textArray.length; i++) {
      text += String.fromCharCode(textArray[i]);
    }
    console.log(text);
    return text;
  }

  //funcion copy
  //Asigno el evento "click" del botón para provoar el copiado
 // document.getElementById("btnCopiar").addEventListener( 'click' , copyText);
  
  function copyText () {
    var codigoACopiar = document.getElementById('txtResuslt');    //Elemento a copiar
        //Debe estar seleccionado en la página para que surta efecto, así que...
        var seleccion = document.createRange(); //Creo una nueva selección vacía
        seleccion.selectNodeContents(codigoACopiar);    //incluyo el nodo en la selección
        //Antes de añadir el intervalo de selección a la selección actual, elimino otros que pudieran existir (sino no funciona en Edge)
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);  //Y la añado a lo seleccionado actualmente
        try {
            var res = document.execCommand('copy'); //Intento el copiado
            if (res)
                exito();
            else
                fracaso();

            mostrarAlerta();
        }
        catch(ex) {
            excepcion();
        }
        window.getSelection().removeRange(seleccion);
    
  }


  //Detectar pegado (se puede hacer para toda la página interceptándolo en el documento o solo en elementos concretos, como es el caso)
  // document.getElementById('TxtUser').addEventListener('paste', interceptarPegado);

  // function interceptarPegado(ev) {
  //     alert('Has pegado el texto:' + ev.clipboardData.getData('text/plain'));
  // }

///////
// Auxiliares para mostrar y ocultar mensajes
///////
  var divAlerta = document.getElementById('alerta');
  
  function exito() {
      divAlerta.innerText = '¡¡Código copiado al portapapeles!!';
      divAlerta.classList.add('alert-success');
  }

  function fracaso() {
      divAlerta.innerText = '¡¡Ha fallado el copiado al portapapeles!!';
      divAlerta.classList.add('alert-warning');
  }

  function excepcion() {
      divAlerta.innerText = 'Se ha producido un error al copiar al portapaples';
      divAlerta.classList.add('alert-danger');
  }

  function mostrarAlerta() {
      divAlerta.classList.remove('invisible');
      divAlerta.classList.add('visible');
      setTimeout(ocultarAlerta, 1500);
  }

  function ocultarAlerta() {
      divAlerta.innerText = '';
      divAlerta.classList.remove('alert-success', 'alert-warning', 'alert-danger', 'visible');
      divAlerta.classList.add('invisible');
  }
  


//console.log(encrypt("greivin carazo ara",clave));
//console.log(decrypt("£D¢ P",clave))