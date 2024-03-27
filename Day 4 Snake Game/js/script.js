const playBoard = document.querySelector(".play_board");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;

const changeFoodPosition = () =>{
    // passing a random 0 - 30 value as a food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () =>{
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game over! Press Ok to replay.....");
    location.reload();
}

const changeDirection = (e) =>{
    // changing velocity value based on key press
    if(e.key === "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
}else if(e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1; 
    }else if(e.key === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;    
    } else if(e.key === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;     
    }

    
};

const initGame = () =>{
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class = "food" style = "grid-area: ${foodY} / ${foodX}"></div>`;

    // Checking if the snake hit the food
    if(snakeX ===  foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); //pushing food position to snake body array
    }
    for (let i = snakeBody.length - i; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];   //shifting positions of elements in the snake's body
        
    }

    snakeBody[0] = [snakeX, snakeY]; // setting first element of snake body to current snake position

    // updating the snake's head position base on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // 
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY >30){
        gameOver = true; //if snake hits the wall then game over
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        htmlMarkup += `div class="head" style="grid-area: ${snakeY[i][1]} / ${snakeX[i][1]}"></div>`;        
    }    
    playBoard.innerHTML = htmlMarkup;
};
changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);