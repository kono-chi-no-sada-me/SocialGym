function cadastrar_exame(){
    let cardiaco_ = (document.getElementById("cardiaco_sim").checked) ? "sim" : "nao";
    let doencas_respiratorias_ = (document.getElementById("doencas_respiratorias_sim").checked) ? "sim" : "nao"

    firebase.database().ref('Power Fit'+'/cliente/'+queryObj().CPF).update({
        ficha_tecnica: {
            altura: document.getElementById("altura").value,
            peso: document.getElementById("peso").value,
            tipo_sanguineo: document.getElementById("tipo_sanguineo").value,
            ultima_data: document.getElementById("ultima_data").value,
            lesoes: document.getElementById("lesoes").value,
            cirurgia: document.getElementById("cirurgias").value,
            medicamentos: document.getElementById("medicamentos").value,
            cardiaco: cardiaco_,
            doencas_respiratorias: doencas_respiratorias_,
            doencas_cronicas: document.getElementById("doencas_cronicas").values,
            outros: document.getElementById("outros").value,
            observacoes: document.getElementById("observacoes").value,
            treinos_recomendados: document.getElementById("treinos_recomendados").value
        }
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