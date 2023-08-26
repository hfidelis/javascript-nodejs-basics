const animais = ['Gato', 'Cachorro', 'Pato', 'Gavião']
const animaisPreHistoricos = ['T-rex', 'Pterodatilo', 'Jacaré', 'Megalodon']
const seresVivos = animais.concat(animaisPreHistoricos)

console.table(seresVivos)

const pessoas = ['Homem', 'Mulher']
const todosSeres = seresVivos.concat(pessoas, 'Alienigena')

console.table(todosSeres)