function generateRandom(min, max) {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const factor = max - min + 1
        const randomNum = parseInt(Math.random() * factor) + min
        resolve(randomNum)
    })
}

generateRandom(1, 10).then(n => n+1)
                     .then(nPlus1 => `Your number + 1 is: ${nPlus1}`)
                     .then(console.log)