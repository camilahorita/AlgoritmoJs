/* 
Solicitar o nome do aluno e as 3 notas do bimestre
calcular a media daquele aluno 
A média deverá ser maior ou igual a 6
Se o aluno passou de bimestre, dar os parabéns
Se o aluno não passou de bimestre, motivar oaluno a dar o seu melhor na prova de recuperação
Em ambos os casos, mostrar o nome do aluno e a nota
*/

let student = prompt("Digite seu nome: ");
let gradeOne = Number(prompt("Digite sua primeira nota: "));
let gradeTwo = Number(prompt("Digite sua segunda nota: "));
let gradeThree = Number(prompt("Digite sua terceira nota: "));

let finalGrade = (gradeOne + gradeTwo + gradeThree) / 3 ;
finalGrade = finalGrade.toFixed(1);

if (finalGrade >= 6) {
  alert("Parabéns, " + student + " sua nota final é " + finalGrade + ". Você foi aprovado." );
} else if (finalGrade < 3) {
  alert("Reprovado");
} else {
  alert(student + ", sua nota foi " + finalGrade + ". Estude mais para o exame.");
}
