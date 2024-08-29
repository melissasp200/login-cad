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

}


 if (nome && email && cpf) {
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

