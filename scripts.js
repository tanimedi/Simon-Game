var gameOrder = [];
var playerOrder;
var nextColor;
var color;
var sequencePosition = 0;

let colors = {
    "yellow":1,
    "blue":2,
    "green":3,
    "red":4
}

function lightUp(color) {
    const colorChoice = document.getElementById(color);
    colorChoice.classList.add('glow');
    setTimeout(function(){
        colorChoice.classList.remove('glow');
    }, 200);
}



function randomColor(){
    
    nextColor = Math.floor(Math.random()*4)+1;

    gameOrder.push(nextColor);
    // // for ( i=0; i < gameOrder.length; i++) {
    // //     if (gameOrder[i] === colors[key]) {
    // //         color = Object.keys(colors)[0];
    // //         const color = document.getElementById(color);
    // //         color.classList.add('glow');
    // // }
    // console.log(gameOrder + " game order");
    // }
}

randomColor()



function playerChoice(e) {
    let playerOrder;

    for (var key of Object.keys(colors)) {
  
        if (key === e){
             playerOrder = colors[key];
             console.log(playerOrder + " player order");
        }
    }

    //console.log(playerOrder);
    console.log(gameOrder.length + " gameOrder length");
    console.log(gameOrder + " gameOrder");
    console.log(sequencePosition + " sequence Position");

    if (playerOrder === gameOrder[sequencePosition]) {
        if (sequencePosition === gameOrder.length-1){
        randomColor();
        i=0;
        }

         else  {
        sequencePosition++
        }

    }
    else console.log('game over')
    
}


