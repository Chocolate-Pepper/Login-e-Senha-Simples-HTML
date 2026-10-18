const valorSenha = document.getElementById("logsenha");
valorSenha.type = "password";
const celular = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const elementoFundo = document.body;

if(celular)
{
    elementoFundo.style.background = url("/imagens/Gato\ Lingudo.jpg");
}

const botao = document.getElementById("enviar").addEventListener("click", function(event){

event.preventDefault();

let valor = false;
const msgErro = document.getElementById("mensagemErro");
const user = document.getElementById("logusuario").value;
const password = document.getElementById("logsenha").value;
const usuario = localStorage.getItem("usuario"); 
const senha = localStorage.getItem("senha"); 

console.log(usuario)
console.log(senha)

if(user === "" && password  === "")
{
    msgErro.innerHTML = "Usuário ou senha inválidos.";
}
else if(user != usuario || password != senha)
{
    msgErro.innerHTML = "Usuário ou senha inválidos."
}
else if(user === usuario && password === senha)
{
    window.location.href = "html/paginaFinal.html";
    valor = true;
    localStorage.setItem("validacao", valor)
}

});
