function log_in(){
    let cpf = document.getElementById("cpf").value;
    let senha = document.getElementById("senha").value;

    firebase.database().ref('/Power Fit/funcionario').on('value', function(snapshot) {
		snapshot.forEach(function(item){
            if(cpf == item.val().cpf && senha == item.val().senha){
                location.href = "admin.html?CPF="+cpf;
            }
        });
    });

    firebase.database().ref('/Power Fit/cliente').on('value', function(snapshot) {
		snapshot.forEach(function(item){
            if(cpf == item.val().cpf && senha == item.val().senha){
                location.href = "index.html?CPF="+cpf;
            }
        });
    });
    
}