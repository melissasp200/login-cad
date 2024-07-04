//Validar acesso em tela de login

function acessar(){

let loginEmail = document.getElementById('loginEmail').value;
let loginSenha = document.getElementById('loginSenha').value;

if(!loginEmail || !loginSenha){
  alert("Favor preencher todos os campos.");

}else{
   //alert("Campos preenchidos com sucesso.");
   window.location.href= 'cadastro.html';

}

}


//Função que armazena, em array, nome na tela de cadastro

var dadosLista = [];

function salvarUser(){
   let nomeUser = document.getElementById('nomeUser').value;

   if(nomeUser){
    dadosLista.push(nomeUser);
    console.log(dadosLista);
    document.getElementById('nomeUser').value = "";


   }else{
    alert("Favor informar o nome cadastrado");


   }
}       