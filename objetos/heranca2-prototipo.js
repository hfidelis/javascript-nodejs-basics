const carro = {
    actualSpeed: 0,
    maxSpeed: 200,
    speedUp(delta) {
        if (this.actualSpeed + delta <= this.maxSpeed) {
            this.actualSpeed += delta
        } else {
            this.actualSpeed = this.maxSpeed
        }
    },
    status() {
        return `Actual Speed: ${this.actualSpeed} KM/h | Max Speed: ${this.maxSpeed}`
    }
}

const ferrari = {
    model: 'F40',
    maxSpeed: 324 // shadowing (sombreamento), a variável vai sombrear a variável do escopo CARRO mais abrangente, assim que a variável ferrari for prototipada para carro.
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}` // shadowing da função herdada de carro, por isso utilizado o SUPER para chamar o método do protótipo.
    }
}

Object.setPrototypeOf(ferrari, carro) // (objeto, protótipo), assim, ferrari vira um objeto prototipado de carro, herdando suas características.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.speedUp(120)
console.log(volvo.status())

ferrari.speedUp(230)
console.log(ferrari.status())