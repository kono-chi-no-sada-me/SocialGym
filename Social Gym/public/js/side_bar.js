function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
      keyValuePair = keyValuePair.split('=');
      result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}

function fichadet(){
    location.href = "fichadet.html?CPF="+queryObj().CPF;
}

function index(){
    location.href = "index.html?CPF="+queryObj().CPF;
}

function coins(){
    location.href = "coins.html?CPF="+queryObj().CPF;
}

function treinos(){
    location.href = "treinos.html?CPF="+queryObj().CPF;
}

function conquista(){
    location.href = "conquista.html?CPF="+queryObj().CPF;
}