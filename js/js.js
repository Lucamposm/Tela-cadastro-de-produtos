window.addEventListener("load", function(event){
    carregaData();
});

function carregaData(){
    const dataAtual = new Date();
    const day = dataAtual.getDate();
    const months = dataAtual.getMonth();
    const year = dataAtual.getFullYear();

    var dataok = day + "/" + months +"/" + year;

    document.getElementById("produto").focus();
}
function salvar(){

    var produto = document.getElementById("produto").value;
    var data = document.getElementById("data").value;
    var qtdd = document.getElementById("qtdd").value;
    if(produto==""|| data ==""|| qtdd ==""){
        alert("Existem campos em branco, favor verificar!");
        return;
    }
    alert("O produto" + produto + "Foi Salvo com a quantidade" +qtdd + " no dia " + data);
    document.getElementById("produto").focus();
    limpaCampos();
}
    function limpaCampos(){
        document.getElementById("produto").value = "";
        document.getElementById("data").value = "";
        document.getElementById("qtdd").value = "";
        document.getElementById("produto").focus();
    }
