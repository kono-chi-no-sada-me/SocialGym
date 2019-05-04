function getThings(){
    let moeda = document.getElementById("moeda");
    let url = queryObj();
    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
        snapshot.forEach(function(item){
            if (url.CPF == item.val().cpf){
                moeda.innerHTML = "<b>Health Coins: </b>"+item.val().moedas+" <i class=\"material-icons\">add_circle_outline</i>";
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
