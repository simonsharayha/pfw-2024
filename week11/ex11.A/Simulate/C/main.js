let vehicles = [];

function setup() {
  createCanvas(1000, 800);
  for (let i = 0; i < 10; i++) {
    let v = new Vehicle(random(width), random(height));
    vehicles.push(v);
  }
}

function draw() {
  background(220);

  for (let vehicle of vehicles) {
    vehicle.update();
    vehicle.display();
  }
}

class Vehicle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D().mult(random(1, 3));
    this.size = 10;
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.position.add(this.velocity);

    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  display() {
    let angle = this.velocity.heading() + PI / 2;
    push();
    translate(this.position.x, this.position.y);
    rotate(angle);
    fill(this.color);
    triangle(0, -this.size * 2, -this.size, this.size * 2, this.size, this.size * 2);
    pop();
  }
}
