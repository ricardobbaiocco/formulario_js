 
function fazerAcao(){
	var nome = document.getElementById("nome").value;
	var idade = document.getElementById("idade").value;
	var cpf = document.getElementById("cpf").value;
	var telefone = document.getElementById("telefone").value;
	var cep = document.getElementById("cep").value;
	var endereco = document.getElementById("endereco").value;
	
	
	
	

	if (nome == "") {
		alert("Nome Obrigatório");
		document.getElementById("nome").focus();
		return false;
	}

	if (idade == "") {
		alert("Idade Obrigatório");
		document.getElementById("idade").focus();

		return false;
	}

	if (isNaN(idade)) {
		alert("Digite apenas Números.");
		document.getElementById("idade").focus();
		return false;
	}
	if (cpf == "") {
		alert("CPF Obrigatório");
		document.getElementById("cpf").focus();
		return false;
	}
	if (isNaN(cpf)) {
		alert("Digite apenas Números.");
		document.getElementById("cpf").focus();
		return false;
	}
	if (telefone == "") {
		alert("Telefone Obrigatório");
		document.getElementById("telefone").focus();
		return false;
	}
	if (isNaN(telefone)) {
		alert("Digite apenas Números.")
		document.getElementById("telefone").focus();
	}
	if (cep == "") {
		alert("CEP Obrigatório");
		document.getElementById("cep").focus();
		return false;
	}
	if (isNaN(cep)) {
		alert("Digite apenas Números.");
		document.getElementById("cep").focus();
		return false;
	}
	if (endereco == "") {
		alert("Endereço Obrigatório");
		document.getElementById("endereco").focus();
		return false;
	}
}

 