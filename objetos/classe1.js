class Car {
    constructor(model, actualSpeed, maxSpeed) {
        this.model = model
        this.actualSpeed = actualSpeed
        this.maxSpeed = maxSpeed
    }

    speedUp(delta) {
        if (this.actualSpeed + delta <= this.maxSpeed) {
            this.actualSpeed += delta
        } else {
            this.actualSpeed = this.maxSpeed
        }
    }

    getStatus() {
        return `System stats: ${this.model} | Running at ${this.actualSpeed}KM/h (max speed ${this.maxSpeed}KM/h)`
    }

}

const ferrari = new Car('Ferrari F40', 0, 324)
console.log(ferrari)

for (let i=0;i < 10; i++) {
    ferrari.speedUp(10+i)
}

console.log(ferrari.getStatus())