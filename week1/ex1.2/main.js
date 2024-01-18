function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(125, 70, 125);
    } else {
      noStroke();
      noFill();
    }
    ellipse(mouseX, mouseY, 80, 80);
  }