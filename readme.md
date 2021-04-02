# LEPRECHAUN GOLD

## Description

The leprechaun is trying to get back home, but the greedy humans wont let him! You need to help him get home without loosing his god on the way. Each time the human reaches the gold pot our beloved leprechaun will be loosing it.

## MVP (DOM - CANVAS)

DOM-CANVAS, This is a game where the player will move the character by avoiding the enemies inside a drawn canvas.

## Backlog

Score

Gold Level

## Data structure

**Rainbow**

```js
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

function buildDom(htmlString) {
  const tempDiv;
}
function createRainbowScreen() {
  rainbowScreen = buildDom();
  const startButton;
}
function removeRainbowScreen() {}
function createFantasticWorldScreen() {
  gameScreen = buildDom;
}
function removeFantasticWorldScreen() {}
function buildGameOverScreen() {}
function removeGameOverScreen() {}
function startGame() {}
function endGame(score) {}
```

**Fantastic World**

```js
class fantasticWorld{
  constructor() {
    this.canvas
    this.ctx
    this.enemies
    this.player
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
    this.player
function handleKeyDown() {
    }
}
   startLoop() {
      }
   checkCollisions() {
   }
  gameOver() {
  }
  updateGameStats() {

  }

```

**Leprechaun**

```js
class leprechaun(){
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
    const playerTop
    const playerBottom

  removeLife() {
    this.lives
  }
  draw() {
  }
  didSteal(enemy) {
    const playerLeft
    const playerRight
    const playerTop
    const playerBottom
    const enemyLeft
    const enemyRight
    const enemyTop
    const enemyBottom


    const crossLeft
    const crossRight
    const crossBottom
    const crossTop

  }
}

```

**Humans**

```js
class Enemy {
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
- RainbowScreen()
  - buildRainbow()
  - addEventListener(startGame)

- FantasticWorldscreen()
  - game.start()
  - leprechaun.updatePosition
  - leprechaun.removeGold
  - humans.updatePosition
  - humans.steals
  - humans.updatePosition
  - humans.screenCollide
  - lepreachun.sreenCollide
  - create new Game()

- gameOver()
  - buildGameOver()
  - buildWinGame
  - addEventListener(startGame)
```

- rainbowScreen: welcome the player and explain the rules, press play
- fantasticWorldScreen: player help the leprechaun keep his gold pot avoiding that humans take it away
- gameoverScreen: If the player fails helping the leprechaun he will receive a looser message and the fantastic world will encourage the player to play again to accomplish the leprechaun journey if player wins will receive a winner message from the leprechaun thanking the player for helping him get home

## Task

//Task definition in order of priority

- Rainbow - buildDom
- Rainbow - createRainbowScreen
- Rainbow - removeRainbowScreen
- Rainbow - createFantasticWorldScreen
- Rainbow - removeFantasticWorldScreen
- Rainbow - buildGameOverScreen
- Rainbow - removeGameOverScreen
- Rainbow - startGame
- Rainbow - endGame
- Fantastic World - start
- Fantastic World - handleKey
- Fantastic World - startLoop
- Fantastic World - checkCollisions
- Fantastic World - gameOver
- Fantastic World - updateGameStats
- Leprechaun - setDirection
- Leprechaun - updatePosition
- Leprechaun - handleScreenCollision
- Humans - draw
- Humans - update position
- Humans - In side Screen

## Links

### Trello

[Link url](https://trello.com/b/y8K0qq9y/video-game)

### Git

//URls for the project repo and deploy [Link Repo](https://github.com/Triheinz/collision-game.git) [Link Deploy](http://github.com/)

### Slides

//URls for the project presentation (slides) [Link Slides.com](
