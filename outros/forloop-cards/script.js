(function runner() {

    const grid = document.querySelector('#grid-display')

    const lightblue = '#0091CC'
    const blue = '#4A06CC'
    const purple = '#7B08C9'
    const pink = '##C909C9'

    const colors = [lightblue, blue, purple, pink]

    for(let i=0;i<100;i++) {

        let card = document.createElement('li')
        card.classList.add('card')
        card.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

        let cardTitle = document.createElement('h1')
        cardTitle.innerText = `Card #${i+1}`
        cardTitle.classList.add('card-title')

        let cardImg = document.createElement('img')
        cardImg.src = 'card-img.jpg'

        let cardText = document.createElement('p')
        cardText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officiis veritatis blanditiis magni mollitia voluptate culpa quibusdam ea a fugit odio qui deleniti.'

        card.appendChild(cardTitle)
        card.appendChild(cardImg)
        card.appendChild(cardText)
        
        grid.appendChild(card)
    }

})();