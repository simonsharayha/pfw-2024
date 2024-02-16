// Initial positions and settings
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
let speed = 10;
const distance = 2;

function setup() {
    createCanvas(500, 500);
    background(0);
}

// Function to draw a block at a specific location with a specified color
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

// Function to handle key presses and change block color
function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

// Setting a timeout to start drawing after 2.5 seconds
window.setTimeout(() => {
    // Setting an interval to draw the block and move it
    drawTimer = window.setInterval(() => {
        // Check if block is still within canvas bounds
        if (blockY - 50 <= height) {
            // Draw the block at current position
            drawBlock(blockX, blockY, blockColor);
            // Move the block down by 'distance'
            blockY += distance;
        } else {
            // Reset Y position to 0
            blockY = 0;
            // Move to the next column by adding block width to X position
            blockX += 50;
        }
        // Check if block is beyond canvas bounds on both axes
        if (blockY - 50 > height && blockX - 50 > width) {
            // Stop the interval
            window.clearInterval(drawTimer);
            // Alert when drawing is done
            alert('done');
        }
    }, speed);
}, 2500);
