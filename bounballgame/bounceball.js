var canvas = document.getElementById("my_canvas");;
var ctx = canvas.getContext("2d");;

var ballX = 10;
var ballY = 10;
var ballXSpeed = 2 + parseInt(Math.random() * 5);
var ballYSpeed = ballXSpeed;

const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const PADDLE_FROM_EDGE = 50;

var paddleX = (canvas.width - PADDLE_WIDTH)/2;
var paddleY = 460;

var rightPressed = false;
var leftPressed = false;

var score = 0;
var scorenum = document.getElementById("scorenum");

window.onload = function(){
    this.setInterval(update, 10);
}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw();
    move();
}

function draw(){
    drawBall();
    drawPaddle();
}

function drawBall(){
    ctx.beginPath();    
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
}

function move(){
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    if(ballX > canvas.width)
        ballXSpeed *= -1;
    if(ballX < 0)
        ballXSpeed *= -1;
    if(ballY > canvas.height){
        alert("Game Over\nScore : " + score);
        location.reload();
    }
    if(ballY < 0)
        ballYSpeed *= -1;

    if(rightPressed && paddleX < canvas.width-PADDLE_WIDTH) {
        paddleX += 8;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 8;
    }

    var paddleTopY = canvas.height - PADDLE_FROM_EDGE;
    var paddleBottomY = paddleTopY + PADDLE_HEIGHT;
    var paddleLeftX = paddleX;
    var paddleRightX = paddleLeftX + PADDLE_WIDTH;

    if(ballY > paddleTopY && ballY < paddleBottomY && ballX > paddleLeftX && ballX < paddleRightX){
        ballYSpeed *= -1;
        score++;
        scorenum.innerHTML = score;
    }
}

document.addEventListener("keydown", function(e){
    if(e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 83) {
        leftPressed = true;
    }
}, false);

document.addEventListener("keyup", function(e){
    if(e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 83) {
        leftPressed = false;
    }
}, false);