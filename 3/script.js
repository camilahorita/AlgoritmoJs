/*

Capturar 2 números
e fazer as operações matemáticas
de soma, subtração, multiplicaçãom
divisão e resto da divisão.

E para cada opetação, mostrar um alerta com o resultado

*/

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número");
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div =numberOne / numberTwo;
let restDiv =numberOne % numberTwo;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " +mult);
alert("Divisão: "+ div);
alert("Resto da divisão: " +restDiv);