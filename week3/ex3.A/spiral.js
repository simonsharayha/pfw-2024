let rotateBy = 10;

function setup () {
    createCanvas(600,600);
    background(10,10,10);
    angleMode(DEGREES)
}

function makeArm (rotateBy) {
    let alt = Math.round(rotateBy / 360)
    console.log (alt);
    noFill();
    stroke(255, 150, 200);
    strokeWeight(0.05);
    bezier(alt - 10, alt + 10, 10, 10, 10, 10, 10, 150);
    stroke(155, 150, 400);
    ellipse(alt + 50, alt - 100, 300);
    stroke(255, 215, 0);
    ellipse(alt + 200, alt - 70, 100);
    line(alt + 10, alt - 10, 50, 100);
    stroke(55, 150, 400);
    strokeWeight(0.1);
    bezier(alt - 100, alt + 100, 50, 160, 60, 100, 100, 350);
    ellipse(alt + 100, alt - 170, 200);
    ellipse(alt + 10, alt - 10, 30);
   
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
    alert ("rotation stopped")
}