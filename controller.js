//Validar acesso em tela de login

function acessar() {

  let loginEmail = document.getElementById('loginEmail').value;
  let loginSenha = document.getElementById('loginSenha').value;

  if (!loginEmail || !loginSenha) {
    alert("Favor preencher todos os campos.");

  } else {
    //alert("Campos preenchidos com sucesso.");
    window.location.href = 'cadastro.html';

  }

}


//Função que armazena, em array, nome e email na tela de cadastro

var cadUdser = [];
//var dadosLista = [];
//var salvaEmail = [];
//var salvaCPF = [];

function salvarUser() {
  let nome = document.getElementById('nomeUser').value;
  let email = document.getElementById('emailUser').value;
  let cpf = document.getElementById('CPFuser').value;

  if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    alert("Por favor, informe um e-mail valido");
  } else if (nome && email && validaCPF(cpf)) {
    //dadosLista.push(nomeUser); 
    //salvaEmail.push(email);
    //salvaCPF.push(CPF);
    cadUdser.push({ nome: nome, email: email, cpf: cpf });

    //console.log(dadosLista);
    crialista();
    document.getElementById('nomeUser').value = "";
    document.getElementById('emailUser').value = "";
    document.getElementById('CPFuser').value = "";

  } else {
    alert("Favor informar o nome, email e CPF para cadastrado");

  }
}

// Função para criar lista

function crialista() {
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";
  for (let i = 0; i <= (cadUdser.length - 1); i++) {
    tabela += "<tr><td>" + cadUdser[i].nome + "</td><td>" + cadUdser[i].email + "</td><td>" + cadUdser[i].cpf + "</td><td> <button type= 'button' onclick= 'editar(this.parentNode.parentNode.rowIndex)'> Editar </button> <button type= 'button' onclick= 'excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button></td></tr>";
    document.getElementById('tabela').innerHTML = tabela;
  }
}

//Função para editar nomes da lista

function editar(i) {
  document.getElementById('nomeUser').value = cadUdser[(i - i)].nome;
  document.getElementById('emailUser').value = cadUdser[(i - i)].email;
  document.getElementById('CPFuser').value = cadUdser[(i - i)].cpf;
  cadUdser.splice(cadUdser[(i - 1)], 1).nome;
  cadUdser.splice(cadUdser[(i - 1)], 1).email;
  cadUdser.splice(cadUdser[(i - 1)], 1).cpf;



}

//Função para excluir

function excluir(i) {
  cadUdser.splice((i - 1), 1);
  document.getElementById('tabela').deleteRow(i);


}

// VALIDAÇÕES

// CPF

document.getElementById('cpfForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const cpf = document.getElementById('cpf').value;
  const msg = document.getElementById('message');

  if (salvarUser(cpf)) {
    msg.textContent = 'O CPF é válido!';
    msg.style.color = 'green';
  } else {
    msg.textContent = 'O CPF é inválido!';
    msg.style.color = 'red';
  }
}
);

function validaCPF(c) {
  c = c.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  // Estrutura de decisão para verificar quantidade de dígitos e se todos os digitos são iguais
  if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) {
    return false;
  }

  let soma = 0;
  let resto;

  // Validando 10º digito do CPF - o primeiro digito verificador
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(c.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }
  if (resto !== parseInt(c.substring(9, 10))) {
    return false;
  }
  // Validando 11º digito do CPF - o segundo digito verificador
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(c.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  if (resto !== parseInt(c.substring(10, 11))) {
    return false;
  }

  return true;
}

