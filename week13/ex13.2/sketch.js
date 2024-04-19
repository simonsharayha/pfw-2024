let stars = [];
let starIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // Create stars with random colors
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background(0);
  noFill();
  strokeWeight(2);
  // Translate to the center of the canvas
  translate(width / 2, height / 2);
  // Draw rotating stars with changing colors
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    push();
    rotate(sin(frameCount + i) * 50);
    stroke(star.color);
    fill(star.color);
    ellipse(star.x, star.y, star.size * sin(frameCount / 50 + i) * 20);
    pop();
  }
  // Slowly transition to the next color
  starIndex = (starIndex + 1) % stars.length;
}