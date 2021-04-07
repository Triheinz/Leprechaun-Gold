class FWorld {
  constructor(fWorldScreen) {
    this.canvas = null;
    this.ctx = null;
    this.fire = [];
    this.diamond = [];
    this.ninja = null;
    this.gameIsOver = false;
    this.fWorldScreen = fWorldScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  start() {
    this.livesElement = this.fWorldScreen.querySelector('.lives .value');
    this.scoreElement = this.fWorldScreen.querySelector('.score .value');

    this.canvas = this.fWorldScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvasContainer = this.fWorldScreen.querySelector('.canvas-container');
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    this.ninja = new Ninja(this.canvas, 5);

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') this.ninja.setDirection('up');
      else if (event.key === 'ArrowDown') this.ninja.setDirection('down');
      if (event.key === 'ArrowLeft') this.ninja.setDirection('left');
      else if (event.key === 'ArrowRight') this.ninja.setDirection('right');
    });

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      if (Math.random() > 0.96) {
        const randomY = Math.floor((this.canvas.height - 20) * Math.random());
        const newfire = new Fire(this.canvas, randomY, 5);
        this.fire.push(newfire);
      }

      if (Math.random() > 0.98) {
        const randomY = Math.floor((this.canvas.height - 15) * Math.random());
        const newDiamond = new Diamond(this.canvas, randomY, 3);
        this.diamond.push(newDiamond);
      }

      this.checkHurt();
      this.giveDiamond();

      this.ninja.updatePosition();
      this.ninja.handleScreenCollision();

      this.fire = this.fire.filter((fire) => {
        fire.updatePosition();
        return fire.isInsideScreen();
      });

      this.diamond = this.diamond.filter((diamond) => {
        diamond.updatePosition();
        return diamond.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.ninja.draw();
      this.fire.forEach((fire) => {
        fire.draw();
      });

      this.diamond.forEach((diamond) => {
        diamond.draw();
      });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      this.updateGameStats();
    };

    window.requestAnimationFrame(loop);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.ninja.setDirection('right');
    } else if (event.keyCode === 37) {
      this.ninja.setDirection('left');
    } else if (event.keyCode === 38) {
      this.ninja.setDirection('up');
    } else if (event.keyCode === 40) {
      this.ninja.setDirection('down');
    }
  }

  checkHurt() {
    this.fire.forEach((fire) => {
      if (this.ninja.didHurt(fire)) {
        this.ninja.removeLifes();
        console.log('lives', this.ninja.lives);

        fire.x = 0 - fire.size;

        if (this.ninja.lives === 0) {
          this.gameOver();
        }
      }
    });
  }

  giveDiamond() {
    this.diamond.forEach((diamond) => {
      if (this.ninja.beRich(diamond)) {
        this.ninja.addLives();
        console.log('lives', this.ninja.lives);

        diamond.x = 0 - diamond.size;

        if (this.ninja.lives === 0) {
          this.gameOver();
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
    this.livesElement.innerHTML = this.ninja.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
