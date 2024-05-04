let particles = [];
let song, analyzer;
let shapeSize = 200;
let shakeOffset = 0;
let waveSpeed = 0.2;
let waveOffset = 0;
let stars = [];
let fileInput, playButton;
let isPlaying = false;
let songs = [];  // Array to hold song objects
let songTitles = ['50 Cent', 'Usher', 'Xzibit'];  // Array of song titles for display
let songFiles = ['assets/music/50 Cent.mp3', 'assets/music/Usher.mp3', 'assets/music/Xzibit.mp3'];
let currentSongIndex = 0; // Index of the currently playing song
let borderSize = 20;
let borderAlpha = 0;
let fadeAmount = 0; // Start with a fade value of 0 (fully transparent)
let fadeDirection = 'in'; // Start fading in
let playlistContainer, uploadContainer;  // Declare containers globally for accessibility


function preload() {
  songFiles.forEach((songFile) => {
    let s = loadSound(songFile);
    songs.push(s);
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  analyzer = new p5.Amplitude();
  analyzer.setInput(songs[currentSongIndex]);

  setupUI();

  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      alpha: random(0.1, 0.5),
      speed: random(1, 3),
      angle: random(TWO_PI)
    });
  }

  songs[currentSongIndex].play();
  isPlaying = true;
}

let topControlsContainer = document.getElementById('top-controls-container');


function setupUI() {
  // Create the main container
  let topControlsContainer = createDiv('').addClass('top-controls-container').position(20, 20);

  // --- PLAYLIST SECTION ---
  let playlistContainer = createDiv('').addClass('playlist-container').parent(topControlsContainer);
  createElement('h2', 'Try our song recommendation').parent(playlistContainer);
  createPlaylistUI(playlistContainer);
  playButton = createButton('▶').parent(playlistContainer).mousePressed(togglePlay).addClass('play-button');


  // --- UPLOAD SECTION ---
  let uploadContainer = createDiv('').addClass('upload-container').parent(topControlsContainer);
  createElement('h2', 'Try your own song (MP3 only)').parent(uploadContainer);
  let uploadLabel = createElement('label', 'Upload your MP3 file:').parent(uploadContainer);
  fileInput = createFileInput(handleFile).parent(uploadContainer).addClass("upload-button");

  // --- FULLSCREEN BUTTON ---
  let fullscreenButtonContainer = createDiv('').addClass('fullscreen-button-container').parent(topControlsContainer);
  createElement('h3', 'Full Screen Experience').addClass('fullscreen-text').parent(fullscreenButtonContainer);
  fullscreenButton = createButton('Click Here').addClass('fullscreen-button').parent(fullscreenButtonContainer).mousePressed(toggleFullscreen);

  // --- SCREENSHOT ELEMENTS ---
  let screenshotButtonContainer = createDiv('').addClass('screenshot-button-container').parent(topControlsContainer);
  createElement('h3', 'Do you like what you see?').addClass('screenshot-text').parent(screenshotButtonContainer);
  let screenshotButton = createButton('Take Screenshot').parent(screenshotButtonContainer);
  screenshotButton.mousePressed(takeScreenshot).addClass('screenshot-button');

  // Delay positioning for reliable layout calculations
  setTimeout(() => {
    positionFullscreenButton();
  }, 100);
}

function takeScreenshot() {
  saveCanvas('myCanvas', 'png');

}



function togglePlay() {
  if (songs[currentSongIndex].isPlaying()) {
      songs[currentSongIndex].pause();
      playButton.html('▶');
  } else {
      songs[currentSongIndex].play();
      playButton.html('⏸︎');
  }
}

function changeSong(index) {
  if (songs[currentSongIndex].isPlaying()) {
    songs[currentSongIndex].stop();
  }
  currentSongIndex = index;
  songs[currentSongIndex].play();
  analyzer.setInput(songs[currentSongIndex]);
  playButton.html('⏸');
  console.log('Attempting to play song:', songs[currentSongIndex]);
}


function createPlaylistUI(parent) {
  songTitles.forEach((title, index) => {
      const songBtn = createButton(title);
      songBtn.mousePressed(() => changeSong(index));
      songBtn.parent(parent);
      songBtn.addClass('song-btn');
  });
}

function changeSong(index) {
  if (songs[currentSongIndex].isPlaying()) {
    songs[currentSongIndex].stop();
  }
  currentSongIndex = index;
  songs[currentSongIndex].play();
  analyzer.setInput(songs[currentSongIndex]);
  playButton.html('⏸');
  highlightCurrentSong();
}

function highlightCurrentSong() {
  songTitles.forEach((title, index) => {
    const songBtn = select('#song-btn-' + index);
    if (index === currentSongIndex) {
      songBtn.addClass('active');
    } else {
      songBtn.removeClass('active');
    }
  });
}



function draw() {
  background(0);
  let volume = analyzer.getLevel();
  displayVisualEffects(volume); // Function to display visual effects based on volume

  let circleSize = map(volume, 0, 1, 10, 300);
  fill(255);
  ellipse(width / 2, height / 2, circleSize, circleSize);

  updateAndDisplayStars(volume);
  drawFloatingElements(volume);
  drawWaves(volume);
  drawPulsatingBorder();
  drawBackgroundWave(volume);
  
  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].finished()) {
      particles.splice(i, 1); // Remove particles that have finished their lifespan
    }
  }
}



function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function displayVisualEffects(volume) {
  let circleSize = map(volume, 0, 1, 10, 300);
  fill(255);
  ellipse(width / 2, height / 2, circleSize, circleSize);
  updateAndDisplayStars(volume);
}


function updateAndDisplayStars(volume) {
  stars.forEach(star => {
    let alpha = map(star.alpha, 0, 1, 0, 255);
    let starSize = star.size + volume * 5; // More significant size change with volume
    
    // Change star color with a glow effect
    let starColor = color(255, 255, 255, alpha); // White color with transparency
    let glowColor = color(255, 255, 255, alpha * 0.5); // Glow color with lower transparency
    fill(starColor);
    ellipse(star.x, star.y, starSize * 2, starSize * 2);
    
    // Draw a glow around the star
    for (let i = 0; i < 5; i++) { // Change the number of iterations for a stronger or weaker glow
      let glowSize = starSize + i * 0.4; // Increase glow size with each iteration
      glowColor.setAlpha(alpha * 0.2); // Reduce glow transparency with each iteration
      fill(glowColor);
      ellipse(star.x, star.y, glowSize * 1, glowSize * 1);
    }

    let speedMultiplier = 0.1 + volume * 5; // Increase speed multiplier
    star.x += cos(star.angle) * star.speed * speedMultiplier;
    star.y += sin(star.angle) * star.speed * speedMultiplier;

    if (star.x < 0) star.x = width;
    if (star.x > width) star.x = 0;
    if (star.y < 0) star.y = height;
    if (star.y > height) star.y = 0;
  });
}



function drawFloatingElements(volume) {
  let elementsCount = 12;
  let angleStep = TWO_PI / elementsCount;
  for (let i = 0; i < elementsCount; i++) {
    let x = width / 2 + cos(angleStep * i + frameCount * 0.05) * (200 + volume * 100);
    let y = height / 2 + sin(angleStep * i + frameCount * 0.08) * (200 + volume * 100);
    fill(map(i, 0, elementsCount, 0, 360), 100, 100);
    ellipse(x, y, 10, 10);
  }
}

function drawWaves(volume) {
  let waveHeight = map(volume, 0, 1, 0, 100);
  let waveSpeeds = [1.2, 0.4, 1.6];
  let waveFrequencies = [0.01, 0.02, 0.03];
  for (let j = 0; j < waveSpeeds.length; j++) {
    waveOffset += waveSpeeds[j];
    for (let x = 0; x < width; x += 20) {
      let y = height / 2 + sin(x * waveFrequencies[j] + waveOffset) * waveHeight;
      let waveColor = color(map(sin(x * waveFrequencies[j] + waveOffset), -1, 1, 0, 360), 80, 80);
      waveColor.setAlpha(map(x, 0, width, 0, 255));
      fill(waveColor);
      ellipse(x, y, 10, 10);
    }
  }
}

function drawPulsatingBorder() {
  fill(255, 255, 255, borderAlpha);
  rect(0, 0, width, borderSize);
  rect(0, height - borderSize, width, borderSize);
  rect(0, 0, borderSize, height);
  rect(width - borderSize, 0, borderSize, height);
}

function drawBackgroundWave(volume) {
  let bgWaveHeight = map(volume, 0, 1, 0, 300);
  let bgWaveColor = color(255, 255, 255, 50);
  for (let x = 0; x < width; x += 40) {
    let y = height / 2 + sin(x * 0.005 + waveOffset) * bgWaveHeight;
    fill(bgWaveColor);
    ellipse(x, y, 20, 20);
  }
}


function changeSong(index) {
  if (songs[currentSongIndex].isPlaying()) {
    songs[currentSongIndex].stop();
  }
  currentSongIndex = index;
  songs[currentSongIndex].play();
  analyzer.setInput(songs[currentSongIndex]);
  playButton.html('⏸');
}

function handleFile(file) {
  if (file.type.startsWith('audio')) {
    let newSong = loadSound(file.data, () => {
      console.log('Song loaded successfully');
      analyzer.setInput(newSong);
      songs.push(newSong);
      songTitles.push(file.name);
      createPlaylistUI(); // Refresh the playlist UI
      changeSong(songs.length - 1); // Automatically play the new song
    }, (e) => {
      console.error('Failed to load the song:', e);
    });
  } else {
    console.log('Invalid file type. Please upload an audio file.');
  }
}


function togglePlay() {
  if (isPlaying) {
    songs[currentSongIndex].pause();
    playButton.html('▶');
  } else {
    songs[currentSongIndex].play();
    playButton.html('⏸');
  }
  isPlaying = !isPlaying;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  positionElementsBasedOnWindowSize();
}
