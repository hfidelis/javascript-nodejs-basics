const alunos = [
    {nome: 'Heitor', nota: 9, bolsista: true},
    {nome: 'João', nota: 7.5, bolsista: false},
    {nome: 'Maria', nota: 10, bolsista: true},
    {nome: 'Laís', nota: 8.5, bolsista: false},
    {nome: 'Fernando', nota: 6, bolsista: false}
]

// Forma separada
// Aplicando o map para retornar um Array somente com as notas.
const notas = alunos.map(a => a.nota)
// Aplicando o Reduce em cima do Array de notas para retornar um inteiro com a soma das notas.
const total = notas.reduce((nota0, nota1) => {
    return nota0 + nota1
})
// Divisão do total pela quantidade de alunos.
const mediaGeral = total/alunos.length

// Forma rápida
// Aplicando o map para as notas, ao mesmo tempo somando o array inteiro e dividindo-o pelo total de alunos.
const mediaGeral2 = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    return acumulador + atual
})/alunos.length


console.log(mediaGeral)
console.log(mediaGeral2)
