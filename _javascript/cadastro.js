function Enviar(){
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.querySelector('input[name="idade"]:checked').value;

    if(nome == "" || email == ""){
        alert("Adicione todas as informações")
    }else
        if (idade == "-18"){
            alert("Desculpe, idade insuficiente para participação..")

        }else{
            document.getElementById('ir').innerHTML= `Olá <b>${nome}</b>, o link para o formulario ja esta disponivel: <br> <a href="formulario.html" class="btn btn-outline-danger"><b> Clique aqui..</b></a>`;
           return false
        }
}

//Javascript Formulario.html


function formataCPF(cpf) {

    var elementoAlvo = cpf
    var cpfAtual = cpf.value   

    var cpfAtualizado;

    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = cpfAtualizado; 
}  

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    
    if (charCode != 8 && charCode != 9) {
        
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }

}

function valida(){

    if(document.getElementById("day").value == "" || document.getElementById("month").value == "" || document.getElementById("year").value == "" || document.getElementById("cpf").value == "" || document.getElementById("team_id").value == "" || document.getElementById("name").value == "" || document.getElementById("nickname").value == "") {
    
    document.getElementById('mensagem').innerHTML= `Campos obrigatorios não preenchidos`
    return false

    }else{
    var nome = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    var cpf = document.getElementById('cpf').value;
    var dia = parseInt(document.getElementById('day').value)
    var mes = parseInt(document.getElementById('month').value)
    var ano = parseInt(document.getElementById('year').value)

    if(dia <= 0 || dia > 31 ){

        document.getElementById('mensagem').innerHTML= `Dias Somente de 1 à 31 !!!`
        return false

    }else if(mes <= 0 || mes > 12 ){

        document.getElementById('mensagem').innerHTML= `Meses somente de 1 à 12 !!!`
        return false

    }else if(ano <= 1920 || ano > 2003 ){

        document.getElementById('mensagem').innerHTML= `Anos somente de 1920 à 2003 !!!`
        return false

    }else{

        var futebol = document.getElementById("1");
        var volei = document.getElementById("2");
        var basquete = document.getElementById("3");
        var futsal = document.getElementById("4");
        var automobilismo = document.getElementById("5");
        var artMarcial = document.getElementById("6");
        var natacao = document.getElementById("7");
        var esporte = [];
        var time = document.getElementById("team_id").value

        
        if(futebol.checked || volei.checked || basquete.checked || futsal.checked || automobilismo.checked || artMarcial.checked || natacao.checked) {
        
        
        if(futebol.checked){
            esporte.push(1)
        }
        if(volei.checked){
            esporte.push(2)
        }
        if(basquete.checked){
            esporte.push(3)
        }
        if(futsal.checked){
            esporte.push(4)
        }
        if(automobilismo.checked){
            esporte.push(5)
        }
        if(artMarcial.checked){
            esporte.push(6)
        }
        if(natacao.checked){
            esporte.push(7)
        }
        document.getElementById('mensagem').innerHTML= `<span class="text-info"><b>Seus dados foram enviados com sucesso !!! <br> Em breve você recebera um email de nossa agencia.<b></span>`

        var Dados = {
            "Nome:":nome,
            "Apelido:":nickname,
            "Nasciemnto:":`${dia}-${mes}-${ano}`,
            "CPF:":cpf,
            "Esporte:":esporte,
            "Time:":time
        }

        objJson(Dados)

        document.getElementById('name').value='';
        document.getElementById('cpf').value='';
        document.getElementById('day').value='';
        document.getElementById('month').value='';
        document.getElementById('year').value='';
        document.getElementById('nickname').value='';
        document.getElementById('1').checked = false;
        document.getElementById('2').checked = false;
        document.getElementById('3').checked = false;
        document.getElementById('4').checked = false;
        document.getElementById('5').checked = false;
        document.getElementById('6').checked = false;
        document.getElementById('7').checked = false;


        return true

        } else {

        document.getElementById('mensagem').innerHTML= `Adicione ao menos uma opção de esportes`
        return false
        }
    }
    }
}
function objJson(Dados){

    var retorno = JSON.stringify(Dados)
    console.log(retorno)
    return this.retorno
}