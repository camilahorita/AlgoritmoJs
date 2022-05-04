/* Jogo da adivinhação
Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando?  Está entre 0 e 10"

Crie uma lógica para gerar um numero aleatório
e verificar se o número digitado é o mesmo que o aleatorio gerado pelo sistema

Enquanto o usuário não adivinha o número, mostrar a mensagem:
"Errou, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"
*/

let guessNumber = prompt("Advinhe o número que estou pensando?  Está entre 0 e 10");

const match = Math.round(Math.random()*10);
let n = 1;

while( Number(guessNumber) != match){
  guessNumber = prompt("Errou, tente novamente");
  n++;
}

alert(`Parabéns! O número era ${match}. Você advinhou o número em ${n} tentativas`);
