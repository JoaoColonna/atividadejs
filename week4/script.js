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

const alterarNumero = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

function gerarRegistro(){

    let tipoPessoa = document.getElementById('aluno');

    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefoneFixo = document.getElementById('telefoneFixo')
    let telefoneCelular = document.getElementById('telefoneCelular');
    let dataNasc = document.getElementById('dataNasc');
    let matricula = document.getElementById('matricula');

    if (nome.value !== "" && email.value !== "" && telefoneFixo.value !== "" && telefoneCelular.value !== "" && dataNasc.value !== "" && matricula.value !== "") {
        if(tipoPessoa.checked == true && document.getElementById('curso').value !== "null"){
            let aluno = new Aluno();
            aluno.setNome(nome.value);
            aluno.setEmail(email.value);
            aluno.setTelefoneFixo(telefoneFixo.value);
            aluno.setTelefoneCelular(telefoneCelular.value);
            aluno.setDataNasc(dataNasc.value);
            aluno.setMatricula(matricula.value);
            aluno.setCurso(document.getElementById('curso').value);
    
            console.log(aluno);
            alert("Registro inserido com sucesso!\n" + aluno.MostrarInformacoes());
            alert("Você pode ver o registro do Objeto no Console do navegador.");
            document.getElementById('redefinir').click();
        } else if(document.getElementById('area').value !== "" && document.getElementById('lattes').value !== ""){
            let professor = new Professor();
            professor.setNome(nome.value);
            professor.setEmail(email.value);
            professor.setTelefoneFixo(telefoneFixo.value);
            professor.setTelefoneCelular(telefoneCelular.value);
            professor.setDataNasc(dataNasc.value);
            professor.setMatricula(matricula.value);
            professor.setAreaAtuacao(document.getElementById('area').value);
            professor.setLattes(document.getElementById('lattes').value);
    
            console.log(professor);
            alert("Registro inserido com sucesso!\n" + professor.MostrarInformacoes());
            alert("Você pode ver o registro do Objeto no Console do navegador.");
            document.getElementById('redefinir').click();
        }
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
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

