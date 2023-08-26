const defSituation = function(nota) {
    switch(nota) {
        case 10:
        case 9:
        case 8:
        case 7:
            console.log('APROVADO')
            break
        case 6:
        case 5:
            console.log('RECUPERADO')
            break
        case 4: case 3: case 2: case 1:
            console.log('REPROVADO')
            break
    }
}

defSituation(1)
defSituation(8)
defSituation(5)