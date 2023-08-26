function Carro(maxSpeed=200, delta=5) {
    // atributo privado
    let actualSpeed = 0

    // metodo público
    this.speedUp = function() {
        if (actualSpeed + delta <= maxSpeed) {
            actualSpeed += delta
        } else {
            actualSpeed = maxSpeed
        }
    }

    // metodo público
    this.getActualSpeed = function() {
        return actualSpeed
    }
}

// objeto 1
const gol = new Carro
for(let i=0; i<15; i++) {
    gol.speedUp()
}
console.log(gol.getActualSpeed())

// objeto 2
const lamborghini = new Carro(380, 30)
for(let i=0; i<12; i++) {
    lamborghini.speedUp()
}
console.log(lamborghini.getActualSpeed())