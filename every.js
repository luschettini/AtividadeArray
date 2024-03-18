//Método every.js

//ex. 01

// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. 
// eu estabeleci a regra de que os números devem ser menores que 35
//true = certo
//false = errado

let estavel = (valorMinimo) => valorMinimo< 35;
let numeros = [15, 25, 10, 5, 20];
//ele deve dizer se é true or false
console.log(numeros.every(estavel));
//Saída esperada: true
//ex. 02

let valorMaior = (valorMaximo) => valorMaximo >40;
let numbers = [50, 45, 40, 20, 60];
//ele deve dizer que é falso pois tem numeros menores dentro dos colchetes.
console.log(numbers.every(valorMaior));
//Saída esperada: false

