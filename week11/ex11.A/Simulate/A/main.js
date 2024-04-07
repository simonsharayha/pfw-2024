let x, y;
let dx = 0;
let dy = 0;
let gravity = 0.2;
let damping = 0.8;
let radius = 40;
let isDragging = false;

function setup() {
  createCanvas(1000, 800);
  x = width / 2;
  y = height / 2;
}

function draw() {
    background(220);
    
    // Apply gravity
    dy += gravity;
    
    // Update position if not dragging
    if (!isDragging) {
      x += dx;
      y += dy;
    }
    
    // Check boundaries for bouncing
    if (x + radius >= width || x - radius <= 0) {
      dx *= -damping;
    }
    if (y + radius >= height) {
      dy *= -damping;
      y = height - radius; // Prevent the ball from going below the canvas
    } else if (y - radius <= 0) {
      dy *= -damping;
      y = radius; // Prevent the ball from going above the canvas
    }
    
    // Draw ball
    fill(0);
    ellipse(x, y, radius * 2);
  }
  
  function mousePressed() {
    if (dist(mouseX, mouseY, x, y) < radius) {
      isDragging = true;
      dx = 0;
      dy = 0;
    } else {
      let angle = atan2(mouseY - y, mouseX - x);
      dx = cos(angle) * 5;
      dy = sin(angle) * 5;
    }
  }
  
  function mouseReleased() {
    isDragging = false;
  }
  