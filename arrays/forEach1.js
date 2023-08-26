const aprovados = ['Heitor', 'Tulio', 'Mauricio', 'Peixoto']

// forEach percorre o array, aplicando uma função callback para cada elemento percorrido.
aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

// arrow function inline como param. para o forEach
aprovados.forEach(nome => console.log(nome))

// constante como função como param. para o forEach
const mostrarAprovados = (aprovado, indice) => console.log(`${indice+1}) ${aprovado}`)

aprovados.forEach(mostrarAprovados)