function searchCliente(){
    let cpf = document.getElementById("search").value;
    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
            if(cpf == item.val().cpf){
                location.href = "func.html?CPF_f="+queryObj().CPF+"&CPF_c="+cpf;
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