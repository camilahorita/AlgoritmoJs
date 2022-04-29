/*

Capturar 2 números
e fazer as operações matemáticas
de soma, subtração, multiplicaçãom
divisão e resto da divisão.

E para cada opetação, mostrar um alerta com o resultado

*/

let firstNumber = prompt("Digite o primeiro número");
let secondNumber = prompt('Digite o segundo número');
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
let restDiv = firstNumber % secondNumber;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + mult);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);