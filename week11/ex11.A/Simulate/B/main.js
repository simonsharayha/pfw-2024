let particles = [];

function setup() {
  createCanvas(1000, 800);
  for (let i = 0; i < 100; i++) {
    let p = new Particle(random(width), random(height));
    particles.push(p);
  }
}

function draw() {
  background(220);

  for (let particle of particles) {
    let gravity = createVector(0, 0.1);
    let wind = createVector(0.1, 0);
    
    particle.applyForce(gravity);
    if (mouseIsPressed) {
      particle.applyForce(wind);
    }
    
    particle.update();
    particle.edges();
    particle.display();
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-2, 0));
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 4;
    this.color = color(random(255), random(255), random(255));
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, 5, 5);
  }
}
