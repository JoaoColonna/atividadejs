let nome = prompt("Digite seu nome", "");    

if(confirm("Quer ver seu nome?")){
    alert("Seu nome é " + nome);
}
for (let i = 1; i < 6; i++) {
    document.write("<h"+i+"> Fala " +nome+ "!<h"+i+">");   
}