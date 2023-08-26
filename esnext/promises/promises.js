function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

// Após a promise ser feita, o retorno é feito a partir do then(), neste caso, pegamos a frase e concatenamos com uma arrow function, e logo após aninhamos com outro then() que imprimiu a frase já concatenada no console.
falarDepoisDe(3, 'Que legal!').then(frase => frase.concat('??')).then(outraFrase => console.log(outraFrase)).catch(e=>console.log(e))