// Construindo o próprio filter

Array.prototype.filter2 = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

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

const pessoasDeMaior = pessoas.filter2(deMaior)
const pessoasEstudantes = pessoas.filter2(isStudent)
const pessoasMaioresEstudantes = pessoas.filter2(deMaior).filter2(isStudent)

console.log(pessoasDeMaior)
console.log(pessoasEstudantes)
console.log(pessoasMaioresEstudantes)