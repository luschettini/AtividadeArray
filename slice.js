//Método slice.js

//Esse método retorna uma copia do array .slice()


//ex. 01
//irá criar uma variavel dos meses
let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio'];

// vai criar outra variável para pegar o primeiro array e copiar ele começando a partir do index 3 (abril)
let variaveis = meses.slice(4);

// vai exibir o primeiro array no console
console.log(meses);

// vai exibir a cópia do primeiro array começando a partir do índice 4
console.log(variaveis);

//Saida esperada:
//[ 'a', 'b', 'c', 'd', 'e' ]
//[ 'e' ] 

//ex. 02
let numeros = ["1", "2", "3", "4", "5"];
let copia = numeros.slice(1);
console.log(numeros);
console.log(copia);

//Saida esperada:
//[ '1', '2', '3', '4', '5' ]
//[ '2','3', '4', '5' ]