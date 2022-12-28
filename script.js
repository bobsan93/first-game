function game(){
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.querySelector('#start-button')
        let input = document.querySelector('#name-input')
        let content = document.querySelector('#content')
        button.addEventListener('click', function() {
            content.innerHTML = `
            <h1>Dark cave</h1>
            <p>${input.value} find it's self in a dark cave and cant see very much. what should
            ${input.value} do?</p>`
        })
    })
}
game()   