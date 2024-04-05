let step = 20;
let angleOffset = 0;

function setup() {
  createCanvas(1920, 900);
  noStroke();
}

function draw() {
  background(0);
  let maxDistance = dist(0, 0, width, height);
  
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      let angle = atan2(mouseY - y, mouseX - x) + angleOffset;
      let distance = dist(mouseX, mouseY, x, y);
      let size = map(distance, 0, maxDistance, 2, 20);
      fill(255, 255, 255, 100);
      ellipse(x, y, size, size);
      fill(255, 0, 0, 50);
      ellipse(x + cos(angle) * size * 2, y + sin(angle) * size * 2, size, size);
    }
  }
  
  angleOffset += 0.01; // Slowly rotate the pattern
}
