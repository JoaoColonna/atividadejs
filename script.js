let texts = [];

function adicionarAoArray() {
    var input = document.getElementById("meuInput");

    if (input.value.trim() !== "") {
        texts.push(input.value);
        texts.sort();
        exibirLista();
        input.value = "";
    } 
}

function exibirLista() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    texts.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}