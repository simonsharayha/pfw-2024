let sound1, sound2, sound3;

function preload() {
  soundFormats('wav');
  sound1 = loadSound('./sounds/A_major.wav');
  sound2 = loadSound('./sounds/C_major.wav');
  sound3 = loadSound('./sounds/E_major.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  
  let key1 = document.getElementById('key1');
  let key2 = document.getElementById('key2');
  let key3 = document.getElementById('key3');

  key1.addEventListener('click', () => playSound(sound1));
  key2.addEventListener('click', () => playSound(sound2));
  key3.addEventListener('click', () => playSound(sound3));
}

function playSound(sound) {
  if (sound.isPlaying()) {
    sound.stop();
    sound.play();
  } else {
    sound.play();
  }
}

