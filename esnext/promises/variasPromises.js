function generateRandom(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const factor = max - min + 1
        const randomNum = parseInt(Math.random() * factor) + min
        resolve(randomNum)
    })
}

function generateNumbers() {
    return Promise.all([
        generateRandom(2, 70),
        generateRandom(11, 660),
        generateRandom(900, 12999),
        generateRandom(905, 1450),
        generateRandom(1, 2),
        generateRandom(1, 5),
        generateRandom(1, 1)]
    )
}

console.time('promise')

generateNumbers().then(console.log).then(() => console.timeEnd('promise'))