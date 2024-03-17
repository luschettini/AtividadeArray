//Método concat

//ex. 01

//Declarei dois arrays. O array nomes e o array letras
let nomes = ["Luiza", "Felipe"];
let letras = ['l', 'f'];

//O método concat é usado para combinar as duas listas.
let chamada = nomes.concat(letras);

console.log(chamada);
//Saída esperada: ['Luiza', 'Felipe', 'l', 'f' ]

//ex. 02

//Declarei dois arrays. O array pares e o array impares.
let pares = [(2, 4, 6)];
let impares = [(1, 3, 5)];

//O método concat é usado para combinar as duas listas.
let numeros = pares.concat(impares);

console.log(numeros);
// //Saída esperada:[1, 2, 3, 4, 5, 6]

//O método concat é utilizado para mesclar dois ou mais arrays. Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.

