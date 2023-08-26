// Um array é um OBJETO em JS.
console.log(typeof Array, typeof new Array, typeof [])

// Forma de criar, mas não é a mais apropriada, o melhor é criar da forma literal...
let aprovados = new Array('Bia', 'Carlos', 'Ana')

aprovados = ['Bia', 'Carlos', 'Ana', 'Fulano', 'Edilson']
console.log(aprovados[0])

aprovados.sort() // Ordena o array

delete aprovados[0] // o elemento de índice 0 fica como undefined, no caso o elemento 'Ana', que foi para o 0 após o array ser ordenado, porém continua existindo...

console.log(aprovados)

aprovados.splice(1, 0, 'Heitor') // splice (index inicial, quantos elementos vão ser excluidos, elementos para serem adicionados...)
aprovados[0] = 'Ana'
console.log(aprovados)