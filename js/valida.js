//Pesquisando na classe paciente, todos os pacientes com querySelectorAll
var pacientes = document.querySelectorAll(".paciente");
//Fazendo um for para percorrer a lista toda de pacientes um por um e executar o caluculo
for (var i = 0; i < pacientes.length; i++) {
    //Otimizando para que todo lugar que tiver paciente seja substituido por pacientes com indice i
    var paciente = pacientes[i];
    //indo direto no item peso para pegar o valor de lá
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdOmbro = paciente.querySelector(".info-ombro");
    var ombro = tdOmbro.textContent;

    var tdPeito = paciente.querySelector(".info-peito");
    var peito = tdPeito.textContent;

    var tdCintura = paciente.querySelector(".info-cintura");
    var cintura = tdCintura.textContent;

    var tdQuadril = paciente.querySelector(".info-quadril");
    var quadril = tdQuadril.textContent;

    var tdBraco = paciente.querySelector(".info-braco");
    var braco = tdBraco.textContent;

    var tdPerna = paciente.querySelector(".info-perna");
    var perna = tdPerna.textContent;


    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var ombroEhValida = validaOmbro(ombro);
    var peitoEhValida = validaPeito(peito);
    var cinturaEhValida = validaCintura(cintura);
    var quadrilEhValida = validaQuadril(quadril);
    var bracoEhValida = validaBraco(braco);
    var pernaEhValida = validaPerna(perna);

    //validando os valores colados em cada item
    if (!pesoEhValido) {
        console.log("Peso inválido");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!ombroEhValida) {
        console.log("Ombro inválido");
        tdOmbro.textContent = "Ombro inválido!";
        ombroEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!peitoEhValida) {
        console.log("Peito inválido");
        tdPeito.textContent = "Peito inválido!";
        peitoEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!cinturaEhValida) {
        console.log("Cintura inválida");
        tdCintura.textContent = "Cintura inválida!";
        cinturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!quadrilEhValida) {
        console.log("Quadril inválido");
        tdQuadril.textContent = "Quadril inválido!";
        quadrilEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!bracoEhValida) {
        console.log("Braço inválido");
        tdBraco.textContent = "Braço inválido!";
        bracoEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!pernaEhValida) {
        console.log("Perna inválida");
        tdPerna.textContent = "Perna inválida!";
        pernaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function validaOmbro(ombro) {
    if (ombro >= 0 && ombro <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaPeito(peito) {
    if (peito >= 0 && peito <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaCintura(cintura) {
    if (cintura >= 0 && cintura <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaQuadril(quadril) {
    if (quadril >= 0 && quadril <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaBraco(braco) {
    if (braco >= 0 && braco <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaPerna(perna) {
    if (perna >= 0 && perna <= 300) {
        return true;
    } else {
        return false;
    }
}