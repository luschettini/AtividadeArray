//Método unshift.js

//ex. 01
//let frutas (array);
let legumes = ['abobrinha', 'chuchu', 'cenoura'];

//O método unshift é usado para adicionar os elementos no início.
legumes.unshift('pepino', 'batata');

console.log(legumes);
//Saída esperada:[ 'pepino', 'batata', 'abobrinha', 'chuchu', 'cenoura' ]

//ex. 02
//let numeros (array)
let numeros = [1, 2, 3, 4, 5];

//Usei o unshift para adicionar o número 0 no início do array.
numeros.unshift(0);

console.log(numeros);
//Saída esperada: [ 0, 1, 2, 3, 4, 5 ]
