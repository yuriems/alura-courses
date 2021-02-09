var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida) {
        paciente.querySelector(".info-imc").textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc (peso, altura)
        paciente.querySelector(".info-imc").textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso > 0 && peso < 500) {
        return true
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

function validaGordura(gordura) {
    if(gordura > 0 && gordura < 100) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}