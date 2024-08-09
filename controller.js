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
    //console.log(dadosLista);
    crialista();
    document.getElementById('nomeUser').value = "";
  
   }else{
    alert("Favor informar o nome cadastrado");


   }
}    

//funçao para criar lista
function crialista(){
 let tabela = document.getElementById('tabela').innerHTML = "<tr><th>nome Usuario</th><th>Açoes</th</tr>";
for(let i = 0; i <= (dadosLista.length-1); i++){
   tabela += "<tr><td>"  +  dadosLista[i] + "</td><td> <button type= 'button' onclick= 'editar(this.parentNode.parentNode.rowIndex)'> Editar </button></td></tr>";
   document.getElementById('tabela').innerHTML = tabela;
}
}

//Função para editar nomes da lista

 function editar(i){
   document.getElementById('nomeUser').value = dadosLista [(i - i)];
   dadosLista.splice(dadosLista [(i - 1)], 1);


 }