document.addEventListener("DOMContentLoaded", function getDia() {
    let dias = new Array(
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    );

    let meses = new Array(
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Septembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    );
        
    let today = new Date;

    let dia = dias[today.getDay()];
    let diaNum = today.getDate();
    let ano = today.getFullYear();
    let mes = meses[today.getMonth()];

    let inputData = document.getElementById('meuInputDate');
    if(inputData){
        inputData.innerHTML = dia + ", " + diaNum + " de " + mes + " de " + ano;
    }
});

window.onload = function startClock() {
    var currentDate = new Date();
    time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let p = document.getElementById("p");
    if(p){
        p.innerHTML = time;
    }
    setTimeout(startClock, 1000);
}

function returnPalindromo() {
    let input = document.getElementById("entradaTexto");
    let output = document.getElementById("saidaTexto");
    output.innerHTML = ePalindromo(input.value);
}

function ePalindromo(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return "Não é um palíndromo";
        }
        j--;
    }
    return "É palíndromo";
}