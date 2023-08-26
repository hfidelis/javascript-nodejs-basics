const exemplo = function() {
    return 'Alô, 0!'
}

const exemplo1 = () => {
    return 'Alô, 1!'
}

const exemplo2 = () => 'Alô, 2!'

const subArrow = (a, b) => a > b ? a - b : b - a

console.log(exemplo())
console.log(exemplo1())
console.log(exemplo2())
console.log(subArrow(100, 90), subArrow(90, 100))