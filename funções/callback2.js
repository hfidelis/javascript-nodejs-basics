const notas = [9.5, 8.75, 6.5, 7.8, 3.2, 4.5, 5.2]

let conjunto1 = []

for (let i in notas) {
    if (notas[i] > 7) {
        conjunto1.push(notas[i])
    }
}

const detectarNota = (nota) => {
    if (nota > 7) {
        return true
    } else {
        return false
    }
}

const detectarNota2 = nota => nota > 7

/*
Método filter() nátivo do js para ARRAYS percorre os itens do array e aplica uma função que deve retornar true ou false para definir se os itens irão para o novo array.
*/

const conjunto2 = notas.filter(detectarNota)
const conjunto3 = notas.filter(nota => nota > 7)
const conjunto4 = notas.filter(detectarNota2)

console.log(conjunto1)
console.log(conjunto2)
console.log(conjunto3)
console.log(conjunto4)
