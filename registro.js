IMask(document.getElementById("cpf"), {
  mask: '000.000.000-00'
});

IMask(document.getElementById("celular"), {
  mask: '(00) 00000-0000'
});


function cadastreSe() {
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let celular = document.getElementById("celular").value;
    let aceitouTermos = document.getElementById("checkbox").checked;
    let generoSelecionado = document.querySelector('input[name="genero"]:checked');
    let msg = document.getElementById("mensagem");

    if (cpf === "" || email === "" || senha === "" || celular === "" || aceitouTermos === false || !generoSelecionado) {
        msg.textContent = "Preencha os campos corretamente";
        msg.style.color = "#ff4d4d";
    } else {
        msg.textContent = "Tudo pronto! Cadastro enviado.";
        msg.style.color = "#00ff00";
    }
}