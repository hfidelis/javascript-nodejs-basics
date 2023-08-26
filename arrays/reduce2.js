const alunos = [
    {nome: 'Heitor', nota: 9, bolsista: true},
    {nome: 'João', nota: 7.5, bolsista: true},
    {nome: 'Maria', nota: 10, bolsista: false},
    {nome: 'Laís', nota: 8.5, bolsista: false},
    {nome: 'Fernando', nota: 6, bolsista: true}
]

const todosBolsitas = (resultado, bolsista) => resultado && bolsista

const algumBolsitas = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas))
console.log(alunos.map(a => a.bolsista).reduce(algumBolsitas))