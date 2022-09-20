var gameOrder = [];
var playerOrder;
var nextColor;
var sequencePosition = 1;

let colors = {
    "yellow":1,
    "blue":2,
    "green":3,
    "red":4
}

function play() {
function randomColor(){
    nextColor = Math.floor(Math.random()*4)+1;
return nextColor
}

randomColor();

gameOrder.push(nextColor);
console.log(gameOrder + " game order");





//console.log(playerOrder);
console.log(gameOrder);

}

play();

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

    if (sequencePosition === gameOrder.length){
        randomColor();
        gameOrder.push(nextColor);
        
    }

    else if (playerOrder === gameOrder[sequencePosition]) {
        sequencePosition++
    }
    
    else console.log('game over')
    
}

// function playerChoice(e) {
//     for (var key of Object.keys(colors)) {
  
//         if (key = e){
//              playerOrder.push(colors[key]);
//              console.log(playerOrder);
//              return playerOrder
//         }
//     } 
// }
