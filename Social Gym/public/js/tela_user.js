function load_informations(){
    let nome = document.getElementById("nome_perfil");
    let moeda = document.getElementById("moeda_perfil");
    let altura = document.getElementById("altura_perfil");
    let peso = document.getElementById("peso_perfil");
    let exp = document.getElementById("exp");
    let nivel = document.getElementById("nivel");
    url = queryObj();
    
    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
        snapshot.forEach(function(item){
            if (url.CPF == item.val().cpf){
                nome.innerHTML = "<b>Nome:</b> "+item.val().nome;
                moeda.innerHTML = "<b>Health Coins:</b> "+item.val().moedas;
                altura.innerHTML = "<b>Altura:</b> "+item.val().ficha_tecnica.altura;
                peso.innerHTML = "<b>Peso:</b> "+item.val().ficha_tecnica.peso;
                exp.style = "width: "+item.val().exp+"%";
                nivel.innerHTML = "<b>Nivel "+item.val().nivel+"</b>";
                if (queryObj().CPF == item.val().cpf){
                    if(item.val().exp == 100) {
                        firebase.database().ref('Power Fit'+'/cliente/'+item.val().cpf).update({
                            nivel: item.val().nivel+1,
                            moedas: item.val().moedas + 150,
                            exp: 0
                        });
                    }
                }
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
