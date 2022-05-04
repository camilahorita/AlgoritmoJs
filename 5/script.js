/* Capture 1- items para compor a lista de um supermercado.

Após capturar os 10 items, imprima-os separando por virgula

*/


let items = [];

for(i=0; i<10; i++){
  let item = prompt("Digite o item " + (i+1));
  items[i] = item;
}

alert(items)