function getPerfil(){
    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
        snapshot.forEach(function(item){
            if (queryObj().CPF_c == item.val().cpf){
                document.getElementById("nome").innerHTML = "<b>Nome: </b>"+item.val().nome;
                document.getElementById("idade").innerHTML = "<b>Idade: </b>"+item.val().idade;
                document.getElementById("altura").innerHTML = "<b>Altura: </b>"+item.val().ficha_tecnica.altura;
                document.getElementById("peso").innerHTML = "<b>Pesos: </b>"+item.val().ficha_tecnica.peso;
                document.getElementById("moedas").innerHTML = "<b>Health Coins: </b>"+item.val().moedas;    
            }
        });
    });
}

function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
      keyValuePair = keyValuePair.split('=');
      result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}

function cadmed(){
    location.href = "cadmed.html?CPF="+queryObj().CPF_c;
}

function fichadet(){
    location.href = "fichadet.html?CPF="+queryObj().CPF_c;
}