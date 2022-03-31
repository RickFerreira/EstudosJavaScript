function entrar() {
    let usuario = document.querySelector("#usuario")
    let usuarioLabel = document.querySelector("#usuarioLabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    let msgError = document.querySelector("#msgError")
    let listaUser = []

    //criando objetos com atributos pré-definidos
    let usuarioValid = {
            nome: "",
            usuario: "",
            senha: ""
        }
        //chamando a lista de usuarios do localStorage
    listaUser = JSON.parse(localStorage.getItem("listaUser"))
        //varrer lista de user item por item
    listaUser.forEach((item) => {
        //verificando se o usuario e senha são iguais aos que foram passados agora
        if (usuario.value == item.usuarioCad && senha.value == item.senhaCad) {
            //se for igual preenche os atributos
            usuarioValid = {
                nome: item.nomeCad,
                usuario: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == usuarioValid.usuario && senha.value == usuarioValid.senha) {
        //se der certor o login ele vai pra outra pagina
        window.location.href = "adm.html"
    } else {
        //mensagens de layout de erro
        usuarioLabel.setAttribute("style", "color: red")
        usuario.setAttribute("style", "border-color: red")
        senhaLabel.setAttribute("style", "color: red")
        senha.setAttribute("style", "border-color: red")
        msgError.setAttribute("Style", "display: block")
        msgError.innerHTML = "Usuário ou senha incorretos"
            //voltar a caixa pra digitar de novo
        usuario.focus()
    }
}