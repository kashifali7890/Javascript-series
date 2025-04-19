# project realted to DOM

## project link

# solution code

## project 1

``` javascript 
console.log("ali")
// project 1 
const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;    
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        
        
    });
});
// project 2 

const form = document.querySelector('form')

//this use case will give you empty value.
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightGuide = document.querySelector('#weightGuide')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`

    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `plese give a valid weight ${weight}`
    }else {
       const bmi = (weight / ((height * height) / 10000)).toFixed(2) 
        // show the results
        //results.innerHTML = `<span><h3>Your BMI is</h3> ${bmi}</span>`;
        let message = '';

        if(bmi < 18.5){
            message = 'According to BMI You are underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            message = 'According to BMI You are normal weight';
        }else if (bmi >= 25 && bmi <30){
            message = 'According to BMI You are overweight';
        }else {
            message = 'According to BMI You are obese';
        }

        results.innerHTML = `<span>Your BMI is ${bmi}</span><br>
        <strong>${message}</strong>`;

        weightGuide.innerHTML = `
        <h2>BMI Guide:</h2>
        <ul>
        <li>Underweight: Less than 18.5 </li>
        <li>Normal: 18.5 - 24.9 </li>
        <li>Overweight: 25 - 29.9 </li>
        <li>Obese: 30 or more </li>
        </ul> 
        `;
    }
    
        
    
});
//project 3 
const clock = document.getElementById('clock')



setInterval(function(){
 let date = new Date()
//console.log(date.toLocaleTimeString());   
clock.innerHTML = date.toLocaleTimeString();
}, 1000)

// project 4 
let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number');
    }else if (guess < 1){
        alert('Please enter a number more than one');
    }else if (guess > 100){
        alert('Please enter a number between 1 and 100');
    }else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayguess(guess)
            displayMessage(`Game over . Random number was ${randomNumber}`)
            endGame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Your guessed it right`);
        endGame();
    }else if (guess < randomNumber){
        displayMessage(`Too low`)
    }else if (guess > randomNumber){
        displayMessage(`Too high`);
    }
}

function displayguess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id="newGame> start new game </h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();    
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML=''
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
});

}

//project 5 
// generat a random colours

const randomColor = function() {
    const hex =  "0123456789ABCDEF"

    let color =  '#';
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()* 16)]
    }
    return color;
};
let interValId;
const startChangingColor = function (){
    if(!interValId){
        interValId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor () {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(interValId);
    interValId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);

// console.log(Math.floor(Math.random()* 16)); for random value


// project 6 
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'Space': e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    
    
    
    
    </div>
    `;
})
```