// Construindo o próprio forEach
// 1° - Associando a função forEach2 ao prototype do ARRAY.
Array.prototype.forEach2 = function(callback) { // A função recebe uma função callback, como o forEach.
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // No laço for que roda no range do tamanho do array, ele aplica a função callback, com os parâmetros do valor this[i], índice : i, e o próprio array: this.
    }
}

const aprovados = ['Heitor', 'Tulio', 'Mauricio', 'Peixoto']

// forEach percorre o array, aplicando uma função callback para cada elemento percorrido.
aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})