const filterElement = document.querySelector('header input') // ou #filter

const cards = document.querySelectorAll('.cards li') // usando o querySelectorAll para buscar TODOS os elementos, buscamos todos os elementos 'li' dentro da classe .cards, que é um elemento 'ul'

filterElement.addEventListener('input', filterCards) // O evento input faz a execução da função sempre que algo for realizado no input, nesse caso a digitação do usuário.


function filterCards() {
    if (filterElement.value != '') { // Executar a função se o input não estiver vazio.
        for (let card of cards) {
            let cardTitle = card.querySelector('h2') // Pegando o título do card.
            cardTitle = cardTitle.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!cardTitle.includes(filterText)) { // Se o título NÃO (!) incluir o valor do texto no input de filtragem...
                card.style.display = 'none'
            } else {
                card.style.display = 'block'
            }
        }
    } else { // Deixar os cards à amostra quando estiver vazio o input.
        for (let card of cards) {
            card.style.display = 'block'
        }
    }
}