let story = {
    correntScene: "attack",
    attack: {
        titel: "chapter 1",
        story: "find it's self in a dark cave and cant see very much. what should do",
        choices: [
            {
                choice:"I go right",
                destination:'battle'
            },
            {
                choice:"I go left",
                destination:'New cave'
            },
            
        ]
    }
}



document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#start-button')
    let input = document.querySelector('#name-input')
    let content = document.querySelector('#content')
    button.addEventListener('click', renderScene) 
    })

function renderScene() {
    content.innerHTML = `
    <h1>${story[story.correntScene].titel}</h1>
    <p>${story[story.correntScene].story}</p> 
    ${getInputs()}
    <button id = "submit-button">Next</button>
    `
    let button = document.querySelector("#submit-button")
    button.addEventListener('click', function(){
        getInputValue()
    }) 
}

function getInputValue() {
    let inputs = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            console.log(inputs[i])
        }
    }
}



function getInputs() {
    let input = "";
    for (let i = 0; i < story[story.correntScene].choices.length; i++) {
        input += `
        <div>
            <input data-destination =${story[story.correntScene].choices[i].destination} id ="radio${i}" type = "radio" name = "choices" />
            <label for "radio${i}">${story[story.correntScene].choices[i].choice}</label>
        </div>`  
        
    }
    return input;
}
   