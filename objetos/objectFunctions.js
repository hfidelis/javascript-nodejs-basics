const pessoa = {
    nome: 'Heitor',
    idade: 19,
    curso: 'ADS'
}

console.log(Object.keys(pessoa)) // retorna chaves
console.log(Object.values(pessoa)) // retorna valores
console.log(Object.entries(pessoa)) // retorna um array, onde cada index é outro array com [valor, chave]

// Duas formas de percorrer com o método forEach e entries, a primeira com o parâmetro do index, a outra com Object Destructuring.

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

/*defineProperty : define um novo atributo, passando -> objeto, chave, {objeto com configurações do atributo}
enumerable: bool -> Define se o atributo irá aparecer em funções que listam o mesmo, como Object.entries
writable: bool -> Define se o atributo pode ser sobrescrito, se false, ele irá permanecer 'congelado', qualquer alteração não terá efeito.
value: any -> Valor do mesmo:
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '07/06/2003'
})

Object.defineProperty(pessoa, 'cpf', {
    enumerable: false,
    writable: false,
    value: '123.456.789-00'
})

console.log(Object.entries(pessoa))
console.log(pessoa.cpf)