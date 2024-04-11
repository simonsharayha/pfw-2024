let sound1, sound2, sound3, sound4, sound5;
let keys = [];

function preload() {
  soundFormats('wav');
  sound1 = loadSound('./sounds/C_major.wav');
  sound2 = loadSound('./sounds/D_major.wav');
  sound3 = loadSound('./sounds/E_major.wav');
  sound4 = loadSound('./sounds/F_major.wav');
  sound5 = loadSound('./sounds/A_major.wav');
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('canvas-container');

  let keyWidth = width / 5;
  let keyHeight = height;

  // Create keys for each note
  let keyNames = ['C', 'D', 'E', 'F', 'A'];
  for (let i = 0; i < 5; i++) {
    let x = i * keyWidth;
    let y = 0;
    let key = new Key(x, y, keyWidth, keyHeight, i, keyNames[i]);
    keys.push(key);
  }

  // Start the p5.js sound context on user interaction
  userStartAudio().then(function() {
    console.log('Audio context started');
  });
}

function draw() {
  background(220);

  // Draw keys
  for (let key of keys) {
    key.display();
  }
}

function mouseClicked() {
  for (let key of keys) {
    if (key.isClicked(mouseX, mouseY)) {
      key.playSound();
      break;
    }
  }
}

class Key {
  constructor(x, y, width, height, note, name) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.note = note;
    this.name = name;
    this.active = false;
  }

  display() {
    fill(this.active ? '#f0f0f0' : '#fff'); // Use active color if key is active
    rect(this.x, this.y, this.width, this.height);

    fill(0); // Text color
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.name, this.x + this.width / 2, this.y + this.height / 2);
  }

  isClicked(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }

  playSound() {
    switch (this.note) {
      case 0:
        sound1.play();
        break;
      case 1:
        sound2.play();
        break;
      case 2:
        sound3.play();
        break;
      case 3:
        sound4.play();
        break;
      case 4:
        sound5.play();
        break;
      default:
        break;
    }
    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 100); // Reset active state after a short delay
  }
}



