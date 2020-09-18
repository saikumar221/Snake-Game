const cvs = document.getElementById('gamescreen');
const ctx = cvs.getContext('2d');
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();
const box = 32;

const background = new Image();
background.src = "images/ground.png";

const foodImg = new Image();
foodImg.src = "images/food.png";
let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let score =0;

function draw(){
    ctx.drawImage(background,0,0);

    for( let i= 0 ; i < snake.length ; i ++){
        ctx.fillStyle = (i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }

    ctx.drawImage(foodImg,food.x,food.y);

    ctx.fillStyle = "black";
    ctx.font = "40px Change one"
    ctx.fillText(score,2*box,1.6*box);
}

let game = setInterval(draw,100);