let grid = undefined;
let stroke1 = prompt ("enter basic color name in lower case", "black")
let stroke2 = prompt ("enter another color name in lower case", "black")
function setup() {
    createCanvas(1600,900);
    background("#aff1ff");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    // background(grid);
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20)
    stroke(stroke1);
    // left
    ellipse(350, 650, 150);
    // right
    ellipse(650, 650, 150);
    // body
    ellipse(500,450,350, 400);
    //head 
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400,120,600, 120)
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120)
    //eyes 
    stroke(0);
    strokeWeight(25);
    point(450, 200)
    point(500, 200);
    //mouth
    noFill();
    strokeWeight(10);
    arc(500, 225, 80, 80, 0, HALF_PI);
    //right hand
    stroke(stroke2);
    strokeWeight(20);
    line(800,260,650, 330);
    //left hand
    stroke(stroke2);
    strokeWeight(20);
    line(200,260,350, 330)
    //buttons
    stroke(0);
    strokeWeight(25);
    point(450, 525);
    point(420, 450);
    point(450, 380);
    //snow balls
    stroke(255);
    fill("#ffffff");
    strokeWeight(35);
    point(350, 225);
    point(220, 450);
    point(850, 580);
    point(800, 680);
    point(850, 125);
    point(120, 520);
    point(950, 380);
    point(200, 680);
}




