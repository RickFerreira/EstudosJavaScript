var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");
//analisa toda a tabela e verifica se tem duplo click
//quando escuta duplo click olha quem foi clicado
//remove a linha inteira de que foi clicado
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});