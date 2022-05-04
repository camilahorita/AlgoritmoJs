/*
Crie uma lista de pacientes 
Cada paciente deverá conter
Nome
idade
peso
altura

Escreva uma lista contendo o nome dos pacientes
imc = peso/ (altura*altura)

Descubra ao IMC do paciente e imprima:
"Paciente X Possui o IMC de: Y "
*/

let patients = [
  {name: "Jose",
  age: 20,
  weight: 70,
  height: 180},
  {name: "Clara",
  age: 25,
  weight: 60,
  height: 160},
  {name: "Paulo",
  age: 34,
  weight: 80,
  height: 170}
]

function Imc (height, weight) {
  let imc = (weight/((height/100)** 2)).toFixed(1);
  return imc;
}

function messageImc (name, imc) {
  let message = alert(`O paciente ${name} possui um IMC de ${imc}`)
  return message;
}

for (let patient of patients) {
  let imcPatient = Imc(patient.height, patient.weight);
  messageImc(patient.name, imcPatient);
}

// let listNames= [];

// for (let patient of patients) {
//   listNames.push(patient.name);
// }
// alert(listNames);

// for(let n =0 ; n< patients.length; n++){
//   listNames.push(patients[n].name)
// }
// alert(listNames)

// for (let patient of patients) {
//   alert (`O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} e tem ${patient.height} de altura`)
// }

