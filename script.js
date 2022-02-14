// REGRAS DA CRIPTOGRAFIA NO FINAL DO CÓDIGO

// Passo 01 - Capturar botão por ID via document.querySelector e criar a função de criptografia

var textoCapturado = document.querySelector("#input-texto");
console.log(textoCapturado);
var textoCriptografado = "";
textoCapturado.focus();

function criptografa(){
    textoCriptografado = textoCapturado.value.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    var criptografiaPronta = document.querySelector("#msg");
    criptografiaPronta.value = textoCriptografado;
    // Lembrar que a classe do botão era "submit" e não "button" como alterei agora.
    textoCapturado.value = "";
    return textoCriptografado;
}

var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.onclick = criptografa;

// Passo 02 - Capturar o texto digitado com o botão de descriptografia e verificar se já está criptografado

var textoDescriptografado = "";
var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.onclick = verificaCriptografia;

function verificaCriptografia(){
    var vogaisCriptografadas = ["ai", "enter", "imes", "ober", "ufat"];
    var verificaCriptografia = vogaisCriptografadas.some(vogaisCriptografadas => textoCapturado.value.includes(vogaisCriptografadas));
    if(verificaCriptografia == true){
        descriptografa();
    } else {
        alert("ERRO! O texto não está criptografado, toque no botão criptografar");
    }
}

// Passo 03 - Executar a função descriptografia caso o texto esteja criptografado

function descriptografa(){
    textoDescriptografado = textoCapturado.value.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    var descriptografiaPronta = document.querySelector("#msg");
    descriptografiaPronta.value = textoDescriptografado;
    textoCapturado.value = "";
    return textoDescriptografado;
}

// Passo 04 - Habilitar botão de copiar e ao copiar, limpar a caixa de texto

var botaoCopiar = document.querySelector("#btn-copy");
botaoCopiar.onclick = copiarTexto;

function copiarTexto(){
    var textoFinal = document.querySelector("#msg");
    navigator.clipboard.writeText(textoFinal.value);
    textoFinal.value = "";
    textoCapturado.focus();
}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/