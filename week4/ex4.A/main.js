// Constants for circle size and arrangement
const circleDiameter = 100;

// Variables for circle positions and tracking
let startingX = 200;
let startingY = 100;
let myCircles = [];
let startingId = 0;

function setup() {
    createCanvas(1000, 500);
    background(0);
  
    // Create a grid of circles
    for (let k = 0; k < 2; k++) {
      for (let i = 0; i < 4; i++) {
        ellipse(startingX, startingY, circleDiameter);
        myCircles.push({ x: startingX, y: startingY, id: startingId });
        startingX += 150; // Adjust spacing as needed
        startingId++;
      }
      startingY += 150; // Adjust spacing as needed
      startingX = 200;
    }
  
    console.log(myCircles);
  }
  
  function mousePressed() {
    // Check for circle clicks
    for (let j = 0; j < myCircles.length; j++) {
      let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
      if (distance < circleDiameter / 2) {
        console.log('You hit circle', myCircles[j].id);
      }
    }
  }