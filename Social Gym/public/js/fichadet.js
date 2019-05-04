function getData(){
    let nome = document.getElementById("nome");
    let moeda = document.getElementById("moeda");
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");
    let tipo_sanguineo = document.getElementById("tipo_sanguineo");
    let ultima_data = document.getElementById("ultima_data");
    let lesoes = document.getElementById("lesoes");
    let cirurgia = document.getElementById("cirurgia");
    let medicamentos = document.getElementById("medicamentos");
    let cardiaco = document.getElementById("cardiaco");
    let doencas_respiratorias = document.getElementById("doenca_respiratoria");
    let doenca_cronica = document.getElementById("doenca_cronica");
    let outros = document.getElementById("outros");
    let observacoes = document.getElementById("observacoes");
    let treinos_recomendados = document.getElementById("treinos_recomendados");

    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
        snapshot.forEach(function(item){
            if (queryObj().CPF == item.val().cpf){
                nome.innerHTML = "<b>Nome: </b>"+item.val().nome;
                moeda.innerHTML = "<b>Health Coins: </b>"+item.val().moedas;
                altura.innerHTML = "<b>Altura: </b>"+item.val().ficha_tecnica.altura;
                peso.innerHTML = "<b>Peso: </b>"+item.val().ficha_tecnica.peso;
                tipo_sanguineo.innerHTML = "<b>Tipo Sanguineo: </b>"+item.val().ficha_tecnica.tipo_sanguineo;
                ultima_data.innerHTML = "<b>Ultima Data de Exame: </b>"+item.val().ficha_tecnica.ultima_data;
                lesoes.innerHTML = "<b>Lesões: </b>"+item.val().ficha_tecnica.lesoes;
                cirurgia.innerHTML = "<b>Cirurgia: </b>"+item.val().ficha_tecnica.cirurgia;
                medicamentos.innerHTML = "<b>Medicamentos: </b>"+item.val().ficha_tecnica.medicamentos;
                cardiaco.innerHTML = "<b>Cardíaco: </b>"+item.val().ficha_tecnica.cardiaco;
                doencas_respiratorias.innerHTML = "<b>Doenças Respiratórias: </b>"+item.val().ficha_tecnica.doencas_respiratorias;
                doenca_cronica.innerHTML = "<b>Doenças Crônicas: </b>"+item.val().ficha_tecnica.doencas_cronicas;
                outros.innerHTML = "<b>Outros: </b>"+item.val().ficha_tecnica.outros;
                observacoes.innerHTML = "<b>Observações: </b>"+item.val().ficha_tecnica.observacoes;
                treinos_recomendados.innerHTML = "<b>Treinos Recomendados: </b>"+item.val().ficha_tecnica.treinos_recomendados;
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
