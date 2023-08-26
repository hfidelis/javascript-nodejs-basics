// Filter aplica a função à cada elemento do Array, retirando-o ou não se satisfaz a condição.

const pessoas = [
    {nome: 'Heitor', idade: 19, estudante: true},
    {nome: 'Pedro', idade: 31, estudante: false},
    {nome: 'Maria', idade: 15, estudante: true},
    {nome: 'Jerônimo', idade: 22, estudante: false},
    {nome: 'Ariel', idade: 18, estudante: true},
    {nome: 'João', idade: 16, estudante: false}
]

const deMaior = pessoa => pessoa.idade >= 18

const isStudent = pessoa => pessoa.estudante

const pessoasDeMaior = pessoas.filter(deMaior)
const pessoasEstudantes = pessoas.filter(isStudent)
const pessoasMaioresEstudantes = pessoas.filter(deMaior).filter(isStudent)

console.log(pessoasDeMaior)
console.log(pessoasEstudantes)
console.log(pessoasMaioresEstudantes)