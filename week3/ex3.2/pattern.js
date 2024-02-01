// Set up the canvas with a size of 200x200 pixels
function setup() {
    createCanvas(600, 600);
    noLoop();
}

// Function to create a tile
function createTile(originX, originY, backgroundColor, primaryColor, secondaryColor, crossingRectColor,blackCircleDiameter, bigCircleDiameter) {
    translate(originX, originY);

    fill(backgroundColor);
    rect(0, 0, 200, 200);

    fill(primaryColor);
    circle(100, 100, bigCircleDiameter);

    stroke('white');
    strokeWeight(4);
    line(200, 200, 0, 0);

    circle(100, 100, 100);

    fill('teal');
    circle(100, 100, 80);
    fill(secondaryColor);
    circle(100, 100, 60);

    noFill();
    rect(20, 20, 160, 160);

    stroke(crossingRectColor);
    rect(10, 30, 180, 140);
    rect(30, 10, 140, 180);

    fill('black');
    noStroke();
    circle(20, 20, blackCircleDiameter);
    circle(180, 20, blackCircleDiameter);
    circle(20, 180, blackCircleDiameter);
    circle(180, 180, blackCircleDiameter);

    rect(90, 90, 20, 20);
}

function draw() {
    createTile(0,0, 'Aquamarine','red', 'yellow', 'green',30, 180);
    createTile(0, 200, 'SandyBrown','blue', 'green', 'black',10, 145);
    createTile(0, 200, 'Magenta','purple', 'teal', 'red',40, 120);
    createTile(200, -400, 'Violet','cyan', 'pink', 'grey',19, 110);
    createTile(0, 200, 'Khaki','DarkRed', 'PeachPuff', 'lime',18, 200);
    createTile(0, 200, 'Salmon','purple', 'Lime', 'yellow',20, 100);
    createTile(200, -400, 'Gold','magenta', 'pink', 'teal',14, 160);
    createTile(0, 200, 'green','yellow', 'pink', 'red',25, 180);
    createTile(0, 200, 'PeachPuff','grey', 'teal', 'Aquamarine',18, 150);
    
}