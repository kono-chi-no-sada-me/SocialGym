var database = firebase.database();
function cadastrar_cliente(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let cpf = document.getElementById("cpf").value;
    firebase.database().ref('Power Fit'+'/cliente/'+cpf).update({
        nome : nome,
        senha : senha,
        cpf: cpf,
        exp: 0,
        nivel: 1,
        moedas: 0,
        ficha_tecnica: {
            altura: 0,
            peso: 0
        },
        ficha_treino: {
            domingo: "",
            segunda: "",
            terca: "",
            quarta: "",
            quinta: "",
            sexta: "",
            sabado: ""
        }
	}, function(error) {
		if (error) {
			console.log("error");
		} else {
			console.log("Dados salvos");
		}
	});

}