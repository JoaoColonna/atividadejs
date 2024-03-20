addEventListener("DOMContentLoaded", gerarHTML());

function gerarHTML(){
    document.body.setAttribute('style', 'padding: 20px');

    var container = document.getElementById('container');

    var div_total = document.createElement("div");
    div_total.setAttribute("class", "row mx-5 px-5 mb-3");
    div_total.setAttribute("id", "total");

    var label_total = document.createElement("label");
    label_total.innerHTML = "Total";
    label_total.setAttribute("class", ""); // Definindo a largura do label

    var total = document.createElement("input");
    total.setAttribute('class', 'col form-control mt-2 text-center'); // Definindo a largura do input
    total.setAttribute("value", "0");
    total.setAttribute('readonly', '');
    
    div_total.appendChild(label_total);
    div_total.appendChild(total);

    var btn_limpar = document.createElement("button");
    btn_limpar.setAttribute("class", "col-1 btn btn-secondary mt-2"); // Definindo a largura do botão
    btn_limpar.innerHTML = "Limpar";

    btn_limpar.onclick = function(){
        total.value = "0";
        input_quantidade_homem_meio.value = "0";
        input_quantidade_mulher_meio.value = "0";
    };

    div_total.appendChild(btn_limpar);

    var div_meio = document.createElement("div");
    div_meio.setAttribute("class", "row mx-5 px-5");
    div_meio.setAttribute("id", "meio");
    
    var div_homem_meio = document.createElement("div");
    div_homem_meio.setAttribute("class", "col d-flex flex-column align-items-center");
    div_homem_meio.setAttribute("id", "homem");

    var img_homem = document.createElement("img");
    img_homem.setAttribute("src", "https://cdn-icons-png.freepik.com/512/4086/4086652.png");
    img_homem.setAttribute("class", "img-thumbnail");
    img_homem.style.maxWidth = "200px";
    img_homem.style.maxHeight = "200px";

    var div_botoes_homem = document.createElement("div");
    div_botoes_homem.setAttribute("class", "row");

    var botao_mais_homem_meio = document.createElement("button");
    botao_mais_homem_meio.setAttribute("class", "col btn btn-primary mt-2 mr-2");
    botao_mais_homem_meio.setAttribute("id", "botao_mais_homem");
    botao_mais_homem_meio.innerHTML = " + ";

    var botao_menos_homem_meio = document.createElement("button");
    botao_menos_homem_meio.setAttribute("class", "col btn btn-danger mt-2");
    botao_menos_homem_meio.setAttribute("id", "botao_menos_homem");
    botao_menos_homem_meio.innerHTML = " - ";

    var input_quantidade_homem_meio = document.createElement("input");
    input_quantidade_homem_meio.setAttribute("class", "form-control mt-2 text-center");
    input_quantidade_homem_meio.setAttribute("value", "0");
    input_quantidade_homem_meio.setAttribute("readonly", "");
    input_quantidade_homem_meio.setAttribute("id", "total_homem");

    div_botoes_homem.appendChild(botao_mais_homem_meio);
    div_botoes_homem.appendChild(botao_menos_homem_meio);
    div_botoes_homem.appendChild(input_quantidade_homem_meio);

    div_homem_meio.appendChild(img_homem);
    div_homem_meio.appendChild(div_botoes_homem);

    var div_mulher_meio = document.createElement("div");
    div_mulher_meio.setAttribute("class", "col d-flex flex-column align-items-center");
    div_mulher_meio.setAttribute("id", "mulher");

    var img_mulher = document.createElement("img");
    img_mulher.setAttribute("src", "https://cdn-icons-png.freepik.com/512/4086/4086671.png");
    img_mulher.setAttribute("class", "img-thumbnail");
    img_mulher.style.maxWidth = "200px";
    img_mulher.style.maxHeight = "200px";

    var div_botoes_mulher = document.createElement("div");
    div_botoes_mulher.setAttribute("class", "row");

    var botao_mais_mulher_meio = document.createElement("button");
    botao_mais_mulher_meio.setAttribute("class", "col btn btn-primary mt-2 mr-2");
    botao_mais_mulher_meio.setAttribute("id", "botao_mais_mulher");
    botao_mais_mulher_meio.innerHTML = " + ";

    var botao_menos_mulher_meio = document.createElement("button");
    botao_menos_mulher_meio.setAttribute("class", "col btn btn-danger mt-2");
    botao_menos_mulher_meio.setAttribute("id", "botao_menos_mulher");
    botao_menos_mulher_meio.innerHTML = " - ";

    var input_quantidade_mulher_meio = document.createElement("input");
    input_quantidade_mulher_meio.setAttribute("class", "form-control mt-2 text-center");
    input_quantidade_mulher_meio.setAttribute("value", "0");
    input_quantidade_mulher_meio.setAttribute("readonly", "");
    input_quantidade_mulher_meio.setAttribute("id", "total_mulher");

    div_botoes_mulher.appendChild(botao_mais_mulher_meio);
    div_botoes_mulher.appendChild(botao_menos_mulher_meio);
    div_botoes_mulher.appendChild(input_quantidade_mulher_meio);

    div_mulher_meio.appendChild(img_mulher);
    div_mulher_meio.appendChild(div_botoes_mulher);

    div_meio.appendChild(div_homem_meio);
    div_meio.appendChild(div_mulher_meio);
    
    container.appendChild(div_total);
    container.appendChild(div_meio);

    botao_mais_homem_meio.onclick = function(){
        if(total.value == '0' && input_quantidade_homem_meio == '0'){
            total.value = 0;
            input_quantidade_homem_meio.value = 0;
        }
        total.value++;
        input_quantidade_homem_meio.value++;
    }

    botao_menos_homem_meio.onclick = function(){
        if(input_quantidade_homem_meio.value > 0){
            input_quantidade_homem_meio.value--;
            if(total.value > 0){    
                total.value--;
            }
        }
    }

    botao_mais_mulher_meio.onclick = function(){
        if(total.value == '0' && input_quantidade_mulher_meio == '0'){
            total.value = 0;
            input_quantidade_mulher_meio.value = 0;
        }
        total.value++;
        input_quantidade_mulher_meio.value++;
    }

    botao_menos_mulher_meio.onclick = function(){
        if(input_quantidade_mulher_meio.value > 0){
            input_quantidade_mulher_meio.value--;
            if(total.value > 0){    
                total.value--;
            }
        }
    }
}
