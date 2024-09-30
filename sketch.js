let score = 0;
let startTime;
let gameTime = 15; //Game lasts for 15 seconds
let circles = [];

function setup()
{
    createCanvas(400,400);
    startTime = millis(); //Records the time when the game starts
    for (let i = 0; i < 5; i++) {
        circles.push(createCircle());
    }
}

function draw()
{
    background(255);

    //display score
    textSize(24);
    fill(0);
    text('Score: ' + score, 10, 30); //10 and 30 are x and y coordinates. + is used to combine the string while score is the variable

    //timer
    let timeLeft = gameTime - int((millis() - startTime) / 1000); //millis - starttime calculates the total time that has elasped since the game started. /1000 converts milliseconds to seconds. int is integer
    text('Time: ' + timeLeft, 300, 30);

    //if time has run out
    if (timeLeft <= 0) {
        endGame();
        return;
    }
    //circles
for (let circle of circles){
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size); //draws each circle
    }
}

function createCircle(){
    return {
        x: random(width),
        y: random(height),
        size: 50,
        color: color(random(255), random(255), random(255)),
    }
}

function mousePressed() {
    //check if clicked
    for (let i = circles.length - 1; i >= 0; i--) {
        let d = dist(mouseX, mouseY, circles[i].x, circles[i].y);
        if (d < circles[i].size/2) {
            score++; //incremet score
            circles.splice(i, 1); //remove the clicked circle
            circles.push(createCircle()); //creates a new circle
            break; //exit the loop after clicking a circle
        }
    }
}
function endGame() {
    background(255);
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text('Game Over', width/2, height/2 - 20);
    text('Final Score: ' + score, width/2, height/2 + 20);
    noLoop(); //stops the game loop
}