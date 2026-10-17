const valor = localStorage.getItem("validacao");
const texto = document.getElementById("texto");
const usuario = localStorage.getItem("usuario");
const textoUsuario = document.getElementById("textoUsuario");

if(valor == "true")
{
    texto.innerHTML = "Usuário Identificado. Parabéns!";
    textoUsuario.innerHTML = `Bem-vindo ${usuario}`;
}
localStorage.clear();
