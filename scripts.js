var gameOrder = [];
var playerOrder;
var nextColor;
var nextColorNumber;
var color;
var colors = ['yellow', 'blue', 'green', 'red'];
var newOrder;
var sequencePosition = 0;
var yellowBeep = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var blueBeep = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var greenBeep = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var redBeep = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
const gameMessage = document.getElementById('game-message');
const scoreDisplay = document.getElementById('high-score');
var score = 0;
var highestScore =0;



function lightUp(color) {
    const colorChoice = document.getElementById(color);
    const beep = document.getElementById(color+'Beep')

    colorChoice.classList.add('glow');
    setTimeout(function(){
        colorChoice.classList.remove('glow');
    }, 500);
    beep.play();
}

function lightsOnly(color){
    const colorChoice = document.getElementById(color);
   

    colorChoice.classList.add('glow');
    setTimeout(function(){
        colorChoice.classList.remove('glow');
    }, 500);
}

function lightUpGame(gameColors) {
    gameOrder.forEach(function(currentColor, i){
       
       setTimeout(function(){
        lightUp(currentColor);
        
       }, i * 1500);
    });
    
}

function endGameLights(lightsOnly, delay, repeat) {
    var n = 0;
    var nIntervId  = window.setInterval(function () {

        lightsOnly();

       if (++n === repeat) {
           window.clearInterval(nIntervId );
       }
    }, delay);
}

function randomColor(){
    
    nextColorNumber = Math.floor(Math.random()*4);
    nextColor = colors[nextColorNumber];
    gameOrder.push(nextColor);
    //redBeep.play();
    lightUpGame()
    scoreDisplay.textContent = localStorage.getItem('highScore');
    
    console.log("game order= " + gameOrder );
    
    // }
}

function playButton() {
    gameOrder = [];
    randomColor();
}





function playerChoice(chosenColor) {
    

   

    //console.log(playerOrder);
    //console.log(gameOrder.length + " gameOrder length");
    //console.log(gameOrder + " gameOrder");
    //console.log(sequencePosition + " sequence Position");

    if (chosenColor === gameOrder[sequencePosition]) {
        if (sequencePosition === gameOrder.length-1){
            score = score + 1;
            if (score > highestScore) {
                highestScore = score;
                localStorage.setItem('highScore', highestScore);
                
            }
            console.log('score ' + score);
            console.log('highestScore ' + highestScore);
                
            setTimeout(function(){
                randomColor();
                sequencePosition = 0;
               }, 700);
        }

         else  {
        sequencePosition++
        }

    }
    else {
    //console.log('game over')
    colors.forEach(function(currentColor){
        lightsOnly(currentColor);
    });
    gameMessage.textContent = 'Game Over';
    }
}


