function Treino(){
    let checkboxes = {
        rd: document.getElementById("rosca_direta").checked,
        ag: document.getElementById("agachamento").checked,
        sc: document.getElementById("scott").checked,
        lp: document.getElementById("legpress").checked
    };
    let validar = false;
    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
        snapshot.forEach(function(item){
            if(queryObj().CPF == item.val().cpf){
               let teste =  item.val().exp;
               console.log(teste);
               agora_sim(teste);
            }
        });
    });
}    



    // console.table(checkboxes);
    // firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
    //     snapshot.forEach(function(item){
    //         console.log(item);
    //         if (queryObj().CPF == item.val().cpf){
    //             if(!checkboxes.rd && checkboxes.ag && checkboxes.sc && checkboxes.lp){
    //                 validar = true;
    //                 console.log("Olá");
    //             }
    //             if(true){
    //                 console.log("Olá")

    //                 firebase.database().ref('Power Fit'+'/cliente/'+item.val().cpf).update({
    //                     exp: (item.val().exp) + 5
    //                 });
    //             }
    //             return false;
    //         }
    //     });
    // });
function agora_sim(teste){
    console.log(teste);
    // firebase.database().ref('Power Fit'+'/cliente/'+queryObj().CPF).update({
        //  exp: teste + 5
    // });
}

function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
      keyValuePair = keyValuePair.split('=');
      result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}