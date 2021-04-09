# Water Ninja

## Description

The Water ninja is trying to leave the fantasy world alive with her diamonds. Help her avoid the fire balls to get back home safe!

## MVP (DOM - CANVAS)

DOM-CANVAS, This is a game where the ninja will move the character by avoiding the fire inside a drawn canvas.

## Backlog

Score
lives Level
3 Screens
More ninjas
hit sound effects

## Data structure

**water**

```js
let water;
let introScreen;
let gameScreen;
let gameOverScreen;

function buildDom(htmlString) {
  const tempDiv;
}
function createwaterScreen() {
  waterScreen = buildDom();
  const startButton;
}
function removewaterScreen() {}
function createfWorldScreen() {
  gameScreen = buildDom;
}
function removefWorldScreen() {}
function buildGameOverScreen() {}
function removeGameOverScreen() {}
function startGame() {}
function endGame(score) {}
```

**Fantastic World**

```js
class fWorld{
  constructor() {
    this.canvas
    this.ctx
    this.fire
    this.ninja
    this.gameIsOver
    this.gameScreen
    this.score
    this.livesElement
    this.scoreElement
  }
   start() {
    this.livesElement
    this.scoreElement
    this.canvas
    this.ctx
    this.canvasContainer
    this.containerWidth
    this.containerHeight
    this.canvas.setAttribute()
    this.canvas.setAttribute()
    this.ninja
function handleKeyDown() {
    }
}
   startLoop() {
      }
   checkHurt() {
   }
  gameOver() {
  }
  updateGameStats() {

  }

```

**Ninja**

```js
class Ninja(){
	constructor() {
    this.canvas
    this.ctx
    this.lives
    this.size
    this.x
    this.y
    this.direction
    this.speed

  setDirection(direction) {
 }
  updatePosition() {
  }
  handleScreenCollision() {
    const screenTop
    const screenBottom
    const ninjaTop
    const ninjaBottom

  removeLife() {
    this.lives
  }
  draw() {
  }
  didSteal(fire) {
    const ninjaLeft
    const ninjaRight
    const ninjaTop
    const ninjaBottom
    const fireLeft
    const fireRight
    const fireTop
    const fireBottom


    const crossLeft
    const crossRight
    const crossBottom
    const crossTop

  }
}

```

**fire**

```js
class fire {
  constructor() {
    this.canvas
    this.ctx
    this.size
    this.x
    this.y
    this.speed

function draw() {
};
function updatePosition() {
};
function isInsideScreen() {
};
  }
```

## States y States Transitions

Definition of the different states and their transition (transition functions)

```js
- waterScreen()
  - createIntroScreen()
  - addEventListener(startGame)

- fWorldscreen()
  - game.start()
  - Ninja.updatePosition
  - Ninja.removelives
  - fire.updatePosition
  - fire.hurt
  - fire.updatePosition
  - fire.screenCollide
  - ninja.sreenCollide
  - create new Game()

- gameOver()
  - buildGameOver()
  - addEventListener(startGame)
```

- waterScreen: welcome the ninja and explain the rules, press play
- fWorldScreen: ninja help the Ninja keep his lives pot avoiding that fire take it away
- gameoverScreen: If the ninja fails helping the Ninja he will receive a looser message and the fantastic world will encourage the ninja to play again to accomplish the Ninja journey if ninja wins will receive a winner message from the Ninja thanking the ninja for helping him get home

## Task

//Task definition in order of priority

- water - buildDom
- water - createwaterScreen
- water - removewaterScreen
- water - createfWorldScreen
- water - removefWorldScreen
- water - buildGameOverScreen
- water - removeGameOverScreen
- water - startGame
- water - endGame
- f World - start
- f World - handleKey
- f World - startLoop
- f World - checkCollisions
- f World - gameOver
- f World - updateGameStats
- Ninja - setDirection
- Ninja - updatePosition
- Ninja - handleScreenCollision
- fire - draw
- fire - update position
- fire - In side Screen

## Links

### Trello

[Link url](https://trello.com/b/y8K0qq9y/video-game)

### Git

//URls for the project repo and deploy [Link Repo]() [Link Deploy](https://triheinz.github.io/Water-Ninja/)

### Slides

//URls for the project presentation (slides) [https://prezi.com/p/edit/vfotfsdyvrkb/](
