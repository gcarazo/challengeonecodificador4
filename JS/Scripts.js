

//funcion sencilla para ocultar un elemento de la vista
function hideObj(obj) {
    document.getElementById(obj).style.display="none";
}

//funcion para mostrar el texto en el textarea de resultado.
function name(texto) {
  hideObj("Img");
  hideObj("messages");

}

//funcion q lee el mensaje y llama a encryptar junto con la clave.
function encryptText() {

    var key="27lj";
    var textarea    = document.getElementById("TxtUser");
    var text = textarea.value;
    var textoEncryptado = encrypt(text,key);
    hideObj("Img");
    hideObj("messages");
    document.getElementById("txtResuslt").value = textoEncryptado;
}

function descryptText() {
    var key="27lj";
    var textarea= document.getElementById("TxtUser");
    var text= textarea.value;  
    decrypt(text,key);
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
  


//console.log(encrypt("greivin carazo ara",clave));
//console.log(decrypt("£D¢ P",clave))