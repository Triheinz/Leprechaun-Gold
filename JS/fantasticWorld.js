class FWorld {
  constructor(fWorldScreen) {
    this.canvas = null;
    this.ctx = null;
    this.humans = [];
    this.leprechaun = null;
    this.gameIsOver = false;
    this.fWorldScreen = fWorldScreen;
    this.score = 0;
    this.goldElement = undefined;
    this.scoreElement = undefined;
  }

  start() {
    this.goldElement = this.fWorldScreen.querySelector('.gold .value');
    this.scoreElement = this.fWorldScreen.querySelector('.score .value');

    this.canvas = this.fWorldScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvasContainer = this.fWorldScreen.querySelector('.canvas-container');
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    this.leprechaun = new Leprechaun(this.canvas, 5);

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') this.leprechaun.setDirection('up');
      else if (event.key === 'ArrowDown') this.leprechaun.setDirection('down');
      if (event.key === 'ArrowLeft') this.leprechaun.setDirection('left');
      else if (event.key === 'ArrowRight')
        this.leprechaun.setDirection('right');
    });

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      if (Math.random() > 0.95) {
        const randomY = Math.floor((this.canvas.height - 20) * Math.random());
        const newHumans = new Humans(this.canvas, randomY, 5);
        this.humans.push(newHumans);
      }

      this.checkSteal();

      this.leprechaun.updatePosition();
      this.leprechaun.handleScreenCollision();

      this.humans = this.humans.filter((humans) => {
        humans.updatePosition();
        return humans.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.leprechaun.draw();
      this.humans.forEach((humans) => {
        humans.draw();
      });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      this.updateGameStats();
    };

    window.requestAnimationFrame(loop);
  }

  checkSteal() {
    this.humans.forEach((humans) => {
      if (this.leprechaun.didSteal(humans)) {
        this.leprechaun.removeGold();
        console.log('gold', this.leprechaun.gold);

        humans.x = 0 - humans.size;

        if (this.leprechaun.gold === 0) {
          this.gameIsOver();
        }
      }
    });
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  updateGameStats() {
    this.score += 10;
    this.goldElement.innerHTML = this.leprechaun.gold;
    this.scoreElement.innerHTML = this.score;
  }
}
