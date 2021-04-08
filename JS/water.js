let water;
let introScreen;
let fWorldScreen;
let gameOverScreen;

function buildDom(htmlString) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;
  return tempDiv.children[0];
}

function createIntroScreen() {
  introScreen = buildDom(`<main>

      <h1>Water Ninja</h1>
      <p>Keep Tomoe Gozen alive by capturing the ambar gems that add power to her life.<br />
      Avoid at all cost the blue fire balls that this Magic World trows to those who daire enter in it </p>
      <button> Start </button>

    </main>
    `);

  document.body.appendChild(introScreen);

  document.body.classList.add('intro-background');
  const startButton = introScreen.querySelector('button');

  startButton.addEventListener('click', startGame);
}

function removeIntroScreen() {
  introScreen.remove();
  document.body.classList.remove('intro-background');

}

function createfWorldScreen() {
  fWorldScreen = buildDom(`
  <div class ="water-container">
    <header>
      <div class="lives">
        <span class ="label"> Lives: </span>
        <span class ="value"></span>
      </div>

      <div class="score">
        <span class= "label"> Score: </span>
        <span class= "value"></span>
      </div>
    </header>

    <div class="canvas-container">
      <canvas></canvas>
    </div>
  </div>
    `);
  document.body.appendChild(fWorldScreen);
  document.body.classList.add('fWorld-background');

  return fWorldScreen;
}

function removefWorldScreen() {
  fWorldScreen.remove();
  document.body.classList.remove('fWorld-background');
}

function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
    <main>

    <h1>Game over</h1>
    <p>Your score:<span>${score}</span></p>
    <button>Restart</button>

    </main>
  `);
  const button = gameOverScreen.querySelector('button');
  button.addEventListener('click', startGame);

  document.body.appendChild(gameOverScreen);
  document.body.classList.add('gameOver-background');

}

function removeGameOverScreen() {
  gameOverScreen.remove();
  document.body.classList.remove('gameOver-background');
  
}

function startGame() {
  removeIntroScreen();
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  createfWorldScreen();

  fWorld = new FWorld(fWorldScreen);
  //fWorld.fWorldScreen = fWorldScreen;
  fWorld.start();
}

function endGame(score) {
  removefWorldScreen();
  createGameOverScreen(score);
}

window.addEventListener('load', createIntroScreen);
