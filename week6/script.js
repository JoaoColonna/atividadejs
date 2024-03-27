addEventListener("DOMContentLoaded", gerarHTML());

function gerarHTML(){
    document.body.setAttribute('style', 'background-color: black;');

    let container = document.getElementById('container');
    container.setAttribute("style", "height: 40em; width: 25em;")

    let div_resultado = document.createElement("div");
    div_resultado.setAttribute("class", "row");
    div_resultado.setAttribute("id", "resultado");

    let div_col_resultado = document.createElement("div");
    div_col_resultado.setAttribute("class", "col");
    div_col_resultado.setAttribute("style", "height: 80px; width: 100px; margin-bottom: 10px;");

    let result_number = document.createElement("p");
    result_number.setAttribute("style", "color: white; font-size: 70px; text-align: right;");
    result_number.setAttribute("id", "resultado_num");
    result_number.innerHTML = "0";

    div_col_resultado.append(result_number);
    div_resultado.appendChild(div_col_resultado);
    
    container.appendChild(div_resultado);
    
    const array_buttons = [
        "AC", "+/-", "%", "/",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ",", "="
    ];

    const buttonColors = {
        "AC": "lightgrey",
        "+/-": "lightgrey",
        "%": "lightgrey",
        "/": "orange",
        "x": "orange",
        "-": "orange",
        "+": "orange",
        "=": "orange",
        "0": "grey",
        "1": "grey",
        "2": "grey",
        "3": "grey",
        "4": "grey",
        "5": "grey",
        "6": "grey",
        "7": "grey",
        "8": "grey",
        "9": "grey",
        ",": "grey"
    };
    
    const buttonFontColors = {
        "lightgrey": "black",
        "orange": "white",
        "grey": "white"
    }
    for (let j = 1; j <= 5; j++) {
        let div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        div_row.setAttribute("style", "margin-bottom: 10px;");
    
        for (let i = 1; i <= 4; i++) {
            let div_col = document.createElement("div");
            div_col.setAttribute("class", "col");
    
            let button = document.createElement("button");
            button.setAttribute("class", "btn");
            button.setAttribute("id", "bt_" + i);
            button.style.height = "76px";
            button.style.fontSize = "36px";
            button.style.fontFamily = "Helvetica";
            button.style.textAlign = "center";

            let buttonText = array_buttons.shift();
            button.innerHTML = buttonText;
    
            let buttonColor = buttonColors[buttonText];
            button.style.backgroundColor = buttonColor;

            button.style.color = buttonFontColors[buttonColor];

            if(j === 5 && i === 1){
                button.style.width = "176px";
                button.style.borderRadius = "100px";
            } else {
                button.style.borderRadius = "100%";
                button.style.width = "76px";
            }
            div_col.appendChild(button);
            
            console.log(j + " - " + i);
            if(j === 5 && i === 4){
                continue;
            } else {
                div_row.appendChild(div_col);  
            }
        }
        container.appendChild(div_row);
    }
}
