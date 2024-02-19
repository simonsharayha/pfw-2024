const DOWN = 'down';
const UP = 'up';
let startingX = 60;
let startingY = 140;
let cards = [];
const gameState= {
    totalPairs:5,
    flippedCards: [],
    numMatched:0,
    attempts: 0,
    waiting: false
};

let cardFaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/card-back.jpg');
    cardFaceArray = [ 
        loadImage('images/spiderman.jpg'),
        loadImage('images/hulk.jpg'),
        loadImage('images/blackpanther.jpg'),
        loadImage('images/ironman.jpg'),
        loadImage('images/antman.jpg')
    ]
}


function setup () {
    createCanvas(1000, 600);
    background(0,0,0,0);
    let selectedFaces=[];
    for (let z=0; z<5; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j=0; j<2; j++) {
        for (let i = 0; i < 5; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 180;
        }
        startingY += 180;
        startingX = 60;

    }
    
}

function draw() {
    background(0,0,0,0);
    if (gameState.numMatched === gameState.totalPairs) {
        fill ('red')
        textSize(50);
        text('You won!!!!', 350,40)
        noLoop();
    }

    for (let k = 0; k< cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face=DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length=0;
    gameState.waiting= false;
    rect(240, 60, 480, 60);
    fill(255);
    noStroke();
    textSize(30);
    text('attempts: ' + gameState.attempts, 520, 100);
    text('matches: ' + gameState.numMatched, 280, 100);
    
}
    
function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, and then we can trigger the flip
        if (gameState.flippedCards.length<2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length===2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // mark cards as matched so they dont flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }

}
class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.circleDiameter = 0;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            fill('#aaa')
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y)
        } else {
            fill('rgb(57.7%, 9.9%, 9.9%)');
            rect(this.x, this.y, this.width, this.height);
            image(cardback, this.x, this.y)
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip ();
                return true;
            } else { 
                return false;
            }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray(array) {
    let counter = array.length;
    while (counter>0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
    
}