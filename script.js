const texto = document.querySelector('.text');
const textoEncriptado = document.querySelector('.texto-encriptado');
const encriptarButton = document.querySelector('.boton-encriptar');
const desencriptarButton = document.querySelector('.boton-desencriptar');
const placeholder = document.querySelector('#placeholder');
const secondSection = document.querySelector('.second-section');
const thirdSection = document.querySelector('.third-section');



texto.addEventListener('focus', limpiarTexto);
encriptarButton.addEventListener('click', mostrarTextoEncriptado);
desencriptarButton.addEventListener('click', mostrarTextoDesencriptado);


function mostrarTextoEncriptado(){
    if(texto.textContent.trim() !== ''){
        secondSection.style.display='none';
        thirdSection.style.display='flex';
        textoEncriptado.textContent=encriptarTexto(texto.textContent);
    } else{
        secondSection.style.display='flex';
        thirdSection.style.display='none';
    }

}

function mostrarTextoDesencriptado(){
    textoEncriptado.textContent=desencriptarTexto(texto.textContent);
}

function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

function limpiarTexto(){
    placeholder.textContent = '';
}




