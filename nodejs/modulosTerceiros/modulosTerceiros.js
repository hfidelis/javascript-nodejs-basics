// lib baixada pelo npm i lodash
const _ = require('lodash')

setInterval(() => {
    console.log(_.random(500, 5001))
}, 500)