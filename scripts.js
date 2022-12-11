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
const message = document.getElementById('game-message');
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

function lightUpGame(gameColors) {
    gameOrder.forEach(function(currentColor, i){
       
       setTimeout(function(){
        lightUp(currentColor);
        
       }, i * 1500);
    });
    
}

function playAudio () {
    yellowBeep.play();
    blueBeep.play();
    greenBeep.play();
    redBeep.play();
}


 
function playAudioTimeout () {
    yellowBeep.play();
    setTimeout(function(){
        blueBeep.play();
    }, 1500);
    setTimeout(function(){
        greenBeep.play();
    }, 3000);
    setTimeout(function(){
        redBeep.play();
    }, 4500);
    
}
//playAudioTimeout()

function randomColor(){
    
    nextColorNumber = Math.floor(Math.random()*4);
    nextColor = colors[nextColorNumber];
    gameOrder.push(nextColor);
    //redBeep.play();
    lightUpGame()
    
    
    console.log("game order= " + gameOrder );
    
    // }
}

randomColor()



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
                sessionStorage.setItem("highestScore", highestScore);
            }
            console.log('score ' + score);
            console.log('higestScore ' + highestScore);
                
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
   
    message.textContent = 'Game Over';
    }
}


