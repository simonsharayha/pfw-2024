let snowflakes = [];
let windStrength = 0;
let windTarget = 0;
let windChangeSpeed = 0.05;
let backgroundImage;

function preload() {
  // Load the background image
  backgroundImage = loadImage('https://images.unsplash.com/photo-1613215782952-cc6c5d320af2?q=80&w=3898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let numSnowflakes = 500;
  let snowflakeHeight = height + 10;
  for (let i = 0; i < numSnowflakes; i++) {
    snowflakes.push(new Snowflake());
    if (i < numSnowflakes / 2) {
      snowflakes[i].y = random(-snowflakeHeight, -10);
    } else {
      snowflakes[i].y = random(-100, -10);
    }
    snowflakes[i].x = random(width);
  }
}

function draw() {
  // Draw the background image
  image(backgroundImage, 0, 0, width, height);

  // Gradually change the wind strength towards the target value
  windStrength = lerp(windStrength, windTarget, windChangeSpeed);

  for (let flake of snowflakes) {
    flake.applyWind(windStrength);
    flake.applyGravity();
    flake.update();
    flake.display();
  }

  // Reset snowflakes that have gone off-screen
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    if (snowflakes[i].y > height + 10) {
      snowflakes[i].x = random(width);
      snowflakes[i].y = random(-height - 10, -10);
      snowflakes[i].speed = random(1, 3);
    }
  }

  // Change the wind target based on a sine function to create a smooth, oscillating effect
  windTarget = sin(frameCount / 60.0) * 2;
}

class Snowflake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = random(5, 10);
    this.speed = random(1, 3);
    this.wind = 0;
    this.gravity = 0.05;
    this.airResistance = 0.02;
    this.rotationSpeed = random(-0.02, 0.02);
  }

  applyWind(wind) {
    this.wind = wind;
  }

  applyGravity() {
    this.speed += this.gravity;
  }

  update() {
    this.y += this.speed;
    this.x += this.wind * sin(frameCount / 60.0); // Add sinusoidal movement to simulate wind
    this.speed -= this.airResistance;
    this.x += random(-0.5, 0.5); // Add some random horizontal movement
    this.y += random(-0.5, 0.5); // Add some random vertical movement
    this.angle += this.rotationSpeed; // Rotate the snowflake
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255);
    noStroke();
    ellipse(0, 0, this.size);
    pop();
  }
}