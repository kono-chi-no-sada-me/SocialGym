var database = firebase.database();
function cadastrar_funcionario(){
    let cargo;
    if(document.getElementById("gerente").checked){
        cargo = "gerente";
    }else if(document.getElementById("personal").checked){
        cargo = "personal";
    }else if(document.getElementById("medico").checked){
        cargo = "medico";
    }
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let senha = document.getElementById("senha").value;
    let permissao = {
        avaliacao: (document.getElementById("avaliacao").checked) ? "sim" : "nao",
        cadastro: (document.getElementById("cadastro").checked) ? "sim" : "nao",
        perfil: (document.getElementById("perfil").checked) ? "sim" : "nao",
        treino: (document.getElementById("treino").checked) ? "sim" : "nao"
    }


    firebase.database().ref('Power Fit'+'/funcionario/'+cpf).update({
        nome : nome,
        cargo : cargo,
        cpf: cpf,
        senha: senha,
        permissao : {
            avaliacao: permissao.avaliacao,
            cadastro: permissao.cadastro,
            perfil: permissao.perfil,
            treino: permissao.treino
        }
	}, function(error) {
		if (error) {
			console.log("error");
		} else {
			console.log("Dados salvos");
		}
	});

}