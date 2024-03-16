addEventListener("DOMContentLoaded", setTipoUsuario());

function setTipoUsuario(param){
    let tipo = document.getElementsByName("tipoUser");
    if(param == "professor" || tipo == "professor"){
        document.getElementById("areaProfessor").style.display = "block";
        document.getElementById("divLattes").style.display = "block";
        document.getElementById("cursoAluno").style.display = "none";
    } else {
        document.getElementById("cursoAluno").style.display = "block";
        document.getElementById("areaProfessor").style.display = "none";
        document.getElementById("divLattes").style.display = "none";
    }
}

function gerarRegistro(){
    let tipoPessoa = document.getElementById('aluno');
    if(tipoPessoa.checked == true){
        let aluno = new Aluno();
        aluno.setNome(document.getElementById('nome').value);
        aluno.setEmail(document.getElementById('email').value);
        aluno.setTelefoneFixo(document.getElementById('telefoneFixo').value);
        aluno.setTelefoneCelular(document.getElementById('telefoneCelular').value);
        aluno.setDataNasc(document.getElementById('dataNasc').value);
        aluno.setMatricula(document.getElementById('matricula').value);
        aluno.setCurso(document.getElementById('curso').value);

        console.log(aluno);
        alert("Registro inserido com sucesso!\n" + aluno.MostrarInformacoes());
    } else {
        let professor = new Professor();
        professor.setNome(document.getElementById('nome').value);
        professor.setEmail(document.getElementById('email').value);
        professor.setTelefoneFixo(document.getElementById('telefoneFixo').value);
        professor.setTelefoneCelular(document.getElementById('telefoneCelular').value);
        professor.setDataNasc(document.getElementById('dataNasc').value);
        professor.setMatricula(document.getElementById('matricula').value);
        professor.setAreaAtuacao(document.getElementById('area').value);
        professor.setLattes(document.getElementById('lattes').value);

        console.log(professor);
        alert("Registro inserido com sucesso!\n" + professor.MostrarInformacoes());
    }
    alert("Você pode ver o registro do Objeto no Console do navegador.");
}

function Pessoa () {
    
    var nome;
    var email;
    var telefoneFixo;
    var telefoneCelular;
    var DataNasc;
    var matricula;

    this.setNome = function(_nome){
        this.nome = _nome;
    }
    this.getNome = function(){
        return this.nome;
    }

    this.setEmail = function(_email){
        this.email = _email;
    }
    this.getEmail = function(){
        return this.email;
    }

    this.setTelefoneFixo = function(_telefoneFixo){
        this.telefoneFixo = _telefoneFixo;
    }
    this.getTelefoneFixo = function(){
        return this.telefoneFixo;
    }

    this.setTelefoneCelular = function(_telefoneCelular){
        this.telefoneCelular = _telefoneCelular;
    }
    this.getTelefoneCelular = function(){
        return this.telefoneCelular;
    }

    this.setDataNasc = function(_dataNasc){
        this.dataNasc = _dataNasc;
    }
    this.getDataNasc = function(){
        return this.dataNasc;
    }

    this.setMatricula = function(_matricula){
        this.matricula = _matricula;
    }
    this.getMatricula = function(){
        return this.matricula;
    }

    this.infos = function(){
        let response = 
        "Nome: " + this.getNome() +
        "\nEmail: " + this.getEmail() + 
        "\nTelefone Fixo: " + this.getTelefoneFixo() + 
        "\nTelefone Celular" + this.getTelefoneCelular() +
        "\nData de Nascimento " + this.getDataNasc() +
        "\nNúmero da Matrícula: " + this.getMatricula();

        return response;
    }
}

function Aluno () {
    Pessoa.call(this);

    var curso;

    this.setCurso = function(_curso){
        this.curso = _curso;
    }
    this.getCurso = function(){
        return this.curso;
    }

    this.MostrarInformacoes = function() {
        let infos = this.infos();
        return infos + 
        "\nCurso: " + this.getCurso();
    }
}

function Professor () {
    Pessoa.call(this);

    var areaAtuacao;
    var lattes;

    this.setAreaAtuacao = function(_areaAtuacao){
        this.areaAtuacao = _areaAtuacao;
    }
    this.getAreaAtuacao = function(){
        return this.areaAtuacao;
    }

    this.setLattes = function(_lattes){
        this.lattes = _lattes;
    }
    this.getLattes = function(){
        return this.lattes;
    }

    this.MostrarInformacoes = function(){
        let infos = this.infos();

        return infos +
        "\nÁrea de atuação: " + this.getAreaAtuacao() + 
        "\nLink do Lattes: " + this.getLattes();
    }
}

