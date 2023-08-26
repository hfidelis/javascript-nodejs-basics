const user = {
    nome: 'Heitor',
    _id : 10, // convenção para identificar que o atributo será acessado atráves de get/set.
    get id() {
        return this._id
    },
    set id(id) {
        if (isNaN(id)) {
            console.error('Invalid id! Try again with a number');
        } else {
            this._id = id
        }
    }
}

console.log(user.id)
user.id = 'aaa'
console.log(user.id)
user.id = 20
console.log(user.id)