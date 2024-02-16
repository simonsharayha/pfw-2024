// variables
let bubbles = [];
let numBubbles = 50;

function setup() {
    createCanvas(600, 600);
    for(let i = 0; i<numBubbles; i++) {
        bubbles[i] = new Bubble();
    }
}

function draw() {
    background('#112063');
    for(let i = 0; i<bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(10, 40);
        this.colors = ['#fcfbe6', '#fffdd6', '#fffba1'];
        this.color = random(this.colors);
        this.speed = random(1, 3);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        if (this.x < 0) {
            this.x = width;
        }
        if (this.x > width) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = height;
        }
        if (this.y > height) {
            this.y = 0;
        }
    }

    show() {
        stroke(this.color);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.size);
    }
}
