//Método Splice 
//É utilizado para adicionar, remover e substituir elementos de um array.

//exemplos:

//01. Adição de elementos
//let cores(array)
let cores = ['rosa', 'azul', 'amarelo'];

//O elemento 'vermelho' será adicionado  ao array a partir do index 3, para adicionar 1 elemento.
cores.splice(3, 1, 'vermelho');

console.log(cores);
//Saída esperada:[ 'rosa', 'azul', 'amarelo', 'vermelho' ]

//02. Remoção de elementos
//let bebidas(array)
let bebidas = ['agua', 'suco', 'coca cola', 'chá'];

//A partir do index 1  serão removidos 2 elementos.
bebidas.splice(1, 2);

console.log(bebidas);
//Saída esperada:[ 'agua', 'chá' ]

//03.Substituição de elementos
//let paises(array)
let paises = ['Japão', 'Nova Zelandia', 'Africa']

//A partir do index 2, 1 elemento vai ser substituído por 'Dubai'
paises.splice(2, 1, 'Dubai');

console.log(paises);
//Saída esperada:[ 'Japão', 'Nova Zelandia', 'Dubai' ]

