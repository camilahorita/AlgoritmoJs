/* 
Solicitar o nome do aluno e as 3 notas do bimestre
calcular a media daquele aluno 
A média deverá ser maior que 6
Se o aluno passou de bimestre, dar os parabéns
Se o aluno não passou de bimestre, motivar oaluno a dar o seu melhor na prova de recuperação
Em ambos os casos, mostrar o nome do aluno e a nota
*/


let name = prompt("Digite seu nome: ");
let gradeOne = Number(prompt("Digite sua primeira nota: "));
let gradeTwo = Number(prompt("Digite sua segunda nota: "));
let gradeThree = Number(prompt("Digite sua terceira nota: "));

let finalGrade = (gradeOne + gradeTwo + gradeThree)/3;

if (finalGrade >= 6) {
  alert("Parabéns, " + name + " sua média é " + finalGrade + ". Você foi aprovado!");
} else {
  alert( name + ", sua média é " + finalGrade + ". Se prepare para dar o seu melhor na recuperação, você consegue!")
}