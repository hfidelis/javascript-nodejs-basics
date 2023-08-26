const bubbleSort = function (lista) {
    while (true) {
        let ordenada = false
        for (let i = 0; i < lista.length - 1; i++) {
            if (lista[i] > lista[i+1]) {
                [lista[i], lista[i+1]] = [lista[i+1], lista[i]]
                ordenada = true
            }
        }
        if (!ordenada) break
    }
    return lista
}
const lst = [10, 8, 6, 1, 2, 5, 4, 3, 7, 9]

console.log(bubbleSort(lst))