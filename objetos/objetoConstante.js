/*
Um objeto constante, significa que a variável é constante, no caso (pessoa), o objeto para qual ela aponta {nome: 'Heitor} não pode ser alterado posteriormente, apenas os atributos do mesmo. Para congelar um objeto utilizamos o método Object.freeze(), assim o mesmo não pode ser alterado e nem deletado.
*/
const pessoa = {nome: 'Heitor'}
pessoa.nome = 'Heitorzinho'
console.log(pessoa)
// pessoa = {nome: 'Heitor 2'} -> ERRO, aqui estariamos tentando atribuir um objeto de outro endereço para a constante pessoa.
Object.freeze(pessoa)
pessoa.nome = 'Heitor'
console.log(pessoa) // output : {nome: 'Heitorzinho'}

// 2° Modo

const pessoa2 = Object.freeze({nome: 'Fidelis'}) // Atribuindo um objeto imutável para a constante.
pessoa2.nome = 'Heitor'
console.log(pessoa2)