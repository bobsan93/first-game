let story = {
    attack: {
        titel: "chapter 1",
        story: "find it's self in a dark cave and cant see very much. what should do",
        choices: [
            
        ]
    }
}



document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#start-button')
    let input = document.querySelector('#name-input')
    let content = document.querySelector('#content')
    button.addEventListener('click', function() {
        content.innerHTML = `
        <h1>Dark cave</h1>
        <p>${input.value} find it's self in a dark cave and cant see very much. what should
        ${input.value} do?</p>
        <div>
        <input id ="radio1" type = "radio" name = "choices" />
        <label for "radio1">Go Right</label>
        </div>
        <div>
        <input id ="radio1" type = "radio" name = "choices"/>
        <label for "radio1">Go Left</label>
        </div>
        <div>
        <input id ="radio1" type = "radio" name = "choices" />
        <label for "radio1">Go staright</label>
        </div>
        <div>
        <input id ="radio1" type = "radio" name = choices />
        <label for "radio1">look around</label>
        </div>
        <button>Confirme</button>
         `
        
    })
})

   