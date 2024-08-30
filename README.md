> # **LOGIN-CAD** 

### Neste projeto, com a ajuda do professor, fizemos em sala de aula duas telas. Uma de cadastro e a outra de login usando as linguagens de HTML e JAVASCRIPT.

-------------------------------------------------------------------------------


* ### **Tela de login:** 

![LOGIN-CAD](img/login2.png)


* ### **Tela de cadastro:**  

![LOGIN-CAD](img/cad3.png)

> # **EXPLICAÇÃO DO CÓDIGO JS**

### O código gerencia um processo de login e um sistema simples de cadastro de usuários, permitindo adicionar e editar nomes em uma lista exibida em uma tabela HTML.

---------------------------------------------------------------------

 ## **ARRAYS**


   * ## **cadUdser**

       ### Armazena todos os dados do usuário (nome, email e CPF).

      ![LOGIN-CAD](img/array1.png)



 ## **FUNÇÕES**

* ## **acessar():**  

    ### *Objetivo*: Verifica se os campos de email e senha foram preenchidos na tela de login.
    ### *Ação*: Se ambos os campos estiverem preenchidos, redireciona o usuário para cadastro.html. Caso contrário, exibe um alerta pedindo para preencher todos os campos.

   ![LOGIN-CAD](img/funcaoacessar.png)





* ## **salvarUser():**  
  
   ### *Objetivo*: Adiciona o nome do usuário digitado na tela de cadastro a uma lista.
   ### *Ação*: Se o nome estiver preenchido, adiciona à lista dadosLista, atualiza a tabela exibida na tela e limpa o campo de entrada. Se o nome não estiver preenchido, exibe um alerta.  

   ![LOGIN-CAD](img/salvauser2.png)




* ## **crialista():**

   ### *Objetivo*: Atualiza a tabela na tela de cadastro para exibir a lista de nomes de usuários.
   ### *Ação*: Gera o HTML da tabela com base nos nomes armazenados em dadosLista, incluindo um botão "Editar" para cada nome.  

   ![LOGIN-CAD](img/crialista2.png)



* ## **editar(index):**

   ### *Objetivo*: Permite editar um nome da lista.
   ### *Ação*: Preenche o campo de entrada com o nome selecionado para edição e remove esse nome da lista. Depois, atualiza a tabela para refletir a mudança.  

   ![LOGIN-CAD](img/editanome2.png)




* ## **excluir(i):**  

   ### *Objetivo*: Remover um item da lista e atualizar a tabela.
   ### *Ação*: Remove o item do array dadosLista no índice i. Atualiza a tabela chamando a função crialista() para refletir a lista atualizada.  

   ![LOGIN-CAD](img/excluir.png)

   ### Essas funções trabalham juntas para manter a tabela de usuários atualizada e sincronizada com os dados.

## **VALIDAÇÕES**


 * ## **Validação do e-mail:**

  ### *Objetivo*: Garantir que o campo de email contenha um valor válido.
  ### *Ação*: Verifica se o campo de email está vazio ou não contém '@' e '.' . Se qualquer uma dessas condições for verdadeira, exibe um alerta pedindo um e-mail válido.

![LOGIN-CAD](img/validacaoemail.png)



* ## **Validação do CPF:**

### *Objetivo*: Validar o CPF fornecido para garantir que ele siga o formato correto.
### *Ação*: Remove caracteres não numéricos do CPF, vereficando se o CPF tem 11 dígitos e se não é uma sequência repetitiva de números. Ele também calcula e verifica os dois dígitos verificadores do CPF.

![LOGIN-CAD](img/validacaocpf1.png)
![LOGIN-CAD](img/validacaocpf2.png)

----------------------------------------------------------------------





> ## **Informações adicionais:**    

-------------------------------------------------------------------

   ### splice() : altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. *(developer.mozilla.org)*

   ### deleteRow() : remove a linha no índice especificado de uma tabela. *(www.w3schools.com)*

-----------------------------------------------------------------------

> ## **Resumo:**
---------------------------------------------------------------------------

  ### O código implementa um sistema básico de cadastro de usuários. Inclui funcionalidades para login, cadastro, exibição e edição de usuários, e validação do CPF. Utiliza um array para armazenar os dados dos usuários e manipula a interface HTML para exibir e atualizar essas informações.

----------------------------------------------------------------------
#### *As informações foram obtidas com a ajuda do chatGPT*
  










