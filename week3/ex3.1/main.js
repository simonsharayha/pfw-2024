// Set up the canvas with a size of 200x200 pixels
function setup() {
    createCanvas(200, 200);
    noLoop();
}

// Function to create a tile
function createTile() {
    translate(0, 0);

    fill('teal');
    rect(0, 0, 200, 200);

    fill('orange');
    circle(100, 100, 200);

    stroke('white');
    strokeWeight(4);
    line(200, 200, 0, 0);

    circle(100, 100, 100);

    fill('teal');
    circle(100, 100, 80);
    fill('green');
    circle(100, 100, 60);

    noFill();
    rect(20, 20, 160, 160);

    stroke('purple');
    rect(10, 30, 180, 140);
    rect(30, 10, 140, 180);

    fill('black');
    noStroke();
    circle(20, 20, 20);
    circle(180, 20, 20);
    circle(20, 180, 20);
    circle(180, 180, 20);

    rect(90, 90, 20, 20);
}

function draw() {
    createTile();
}