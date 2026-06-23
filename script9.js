let peso // entrada - input
let altura // entrada - input
let imc // processamento - calculo

peso = prompt("Informe o peso dos seus alunos");
altura = prompt("Informe a altura de seus alunos");

peso = parseFloat(peso);
altura = parseFloat(altura);

imc = parseFloat(peso / (altura * altura));

alert(" O valor do imc do aluno é de" + imc);