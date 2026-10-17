const valorSenha = document.getElementById("cadpass");
valorSenha.type = "password";

const botao = document.getElementById("enviar").addEventListener("click", function(event){

    const usuarioNome = document.getElementById("caduser").value; 
    const usuarioSenha = document.getElementById("cadpass").value;
    const msgErro = document.getElementById("mensagemErro")

    localStorage.setItem("usuario", usuarioNome);
    localStorage.setItem("senha", usuarioSenha);
    
    if(usuarioNome === "" || usuarioSenha === "")
    {
        msgErro.innerHTML = "Usuário ou senha inválidos. Tente Novamente."
    }
    else
    {
        window.location.href = "../index.html";
    }
});


