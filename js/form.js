var botaoAdicionar = document.querySelector("#adicionar-paciente");
//evento baseado no click do botão adicionar
botaoAdicionar.addEventListener("click", function(event) {
    //para que não seja executada as funções padrões do event
    event.preventDefault();
    //pegando as informações do formulario
    var form = document.querySelector("#form-adiciona");
    //função que pega os valores de cada um item no form
    var paciente = obtemAlunoDoFormulario(form);
    //função que cria uma nova linha na tabela td e tr do aluno
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    // adcionando o aluno na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


    form.reset();
    //apagar os itens de erro da ul depois que adicionar novo aluno
    var mensagenErro = document.querySelector("#mensagens-erro")
    mensagenErro.innerHTML = "";
});

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    //apagar todas as li dentro da ul antes de exibir novas mensagens de erros
    ul.innerHTML = "";
    //para cada item do array fazer uma função(alguma coisa)
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemAlunoDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        ombro: form.ombro.value,
        peito: form.peito.value,
        cintura: form.cintura.value,
        quadril: form.quadril.value,
        braco: form.braco.value,
        perna: form.perna.value
    }
    return paciente;

}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //concatena e coloca dentro de cada td
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.ombro, "info-ombro"));
    pacienteTr.appendChild(montaTd(paciente.peito, "info-peito"));
    pacienteTr.appendChild(montaTd(paciente.cintura, "info-cintura"));
    pacienteTr.appendChild(montaTd(paciente.quadril, "info-quadril"));
    pacienteTr.appendChild(montaTd(paciente.braco, "info-braco"));
    pacienteTr.appendChild(montaTd(paciente.perna, "info-perna"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    //criando um array de erros 
    var erros = [];
    //dependendo do erro adiciona no array o caracter necessario
    if (paciente.nome.length == 0) erros.push("Digite um nome!");
    if (paciente.peso.length == 0) erros.push("Digite um peso!");
    if (paciente.altura.length == 0) erros.push("Digite uma altura!");
    if (paciente.ombro.length == 0) erros.push("Digite a medida do ombro!");
    if (paciente.peito.length == 0) erros.push("Digite a medida do peito!");
    if (paciente.cintura.length == 0) erros.push("Digite a medida da cintura!");
    if (paciente.quadril.length == 0) erros.push("Digite a medida do quadril!");
    if (paciente.braco.length == 0) erros.push("Digite a medida do braço!");
    if (paciente.perna.length == 0) erros.push("Digite a medida da perna!");

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
    if (!validaOmbro(paciente.ombro)) erros.push("Obro é inválido!");
    if (!validaPeito(paciente.peito)) erros.push("Peito é inválido!");
    if (!validaCintura(paciente.cintura)) erros.push("Cintura é inválida!");
    if (!validaQuadril(paciente.quadril)) erros.push("Quadril é inválido!");
    if (!validaBraco(paciente.braco)) erros.push("Braço é inválido!");
    if (!validaPerna(paciente.perna)) erros.push("Perna é inválida!");

    return erros;
}