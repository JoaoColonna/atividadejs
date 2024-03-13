function setTipoUsuario(param){
    // let tipo = document.getElementsByName("tipoUser");
    if(param == "professor"){
        document.getElementById("areaProfessor").style.display = "block";
        document.getElementById("divLattes").style.display = "block";
        document.getElementById("cursoAluno").style.display = "none";
    } else {
        document.getElementById("cursoAluno").style.display = "block";
        document.getElementById("areaProfessor").style.display = "none";
        document.getElementById("divLattes").style.display = "none";
    }
}