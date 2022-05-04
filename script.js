/* Faça um programa que tenha um menu e apresente a seguinte mensagem:
Olá usuário, Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso 1: Ele poderá cadastrar um item em uma lista
Caso 2: o usu®ario poderá ver os itens cadastrados
  se não houver nenhum item cadastrado, mostrar a mensagem:
  "Não existe itens cadastrados"
Caso 3 , a aplicação será encerrada

*/

/* 
Dados de entrada 
1 : numero desejado
2: item cadastrado

Variaveis
1: numero desejado
2: lista de itens

*/

let option;
let items = [];
let n = 0;

while (option != 3) {
option = Number(prompt(`Olá usuário, Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`));

if (option == 1) {
  // items[n] =  prompt("Digite o nome do item");
  // n++;
  let item = prompt("Digite o nome do item");
  items.push(item);
}
else if (option == 2) {
  if(items.length==0){
    alert("Não existe itens cadastrados");
  }else {
    alert(items);
  }
}}

alert("Tchau")

