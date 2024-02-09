let rectX = 0; 
let rectWidth = 75;
let clickCount = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0, 97, 255);
    drawShape();
    rectX++;
    if(rectX > width) {
        noLoop();
        textSize(32);
        fill(255);
        textAlign(CENTER);
        text('Your score was ' + clickCount, width / 2, height / 2);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY <= 75)) {
        clickCount++;
        console.log('hit')
    }
}

function drawShape () {
    fill(96, 239, 255)
    rect(rectX, 0, 75, 75)
}