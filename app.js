document.addEventListener('DDMContentLoaded', () => {
    //Card Options
    const _cardArray = [{
        name:'horse', img:'imgs/horse.png'
    },{
        name:'horse', img:'imgs/horse.png'
    },{
        name:'empty', img:'imgs/empty.png'
    },{
        name:'empty', img:'imgs/empty.png'
    },{
        name:'alien', img:'imgs/alien.png'
    },{
        name:'alien', img:'imgs/alien.png'
    },{
        name:'cat', img:'imgs/cat.png'
    },{
        name:'cat', img:'imgs/cat.png'
    },{
        name:'cow', img:'imgs/cow.png'
    },{
        name:'cow', img:'imgs/cow.png'
    },{
        name:'dog', img:'imgs/dog.png'
    },{
        name:'dog', img:'imgs/dog.png'
    },{
        name:'frog', img:'imgs/frog.png'
    },{
        name:'frog', img:'imgs/frog.png'
    },{
        name:'postal', img:'imgs/postal.png'
    },{
        name:'postal', img:'imgs/postal.png'
    }]
})

const grid = document.querySelector('.grid')
    //Game Board
function createBoard() {
    for (let i = 0; _cardArray.length; i++) {
        var card = document.createAttribute('img')
        card.setAttribute('src','imgs/postal.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard();