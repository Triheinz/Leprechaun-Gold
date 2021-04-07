class Ninja {
  constructor(canvas, lives, ninjaImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.lives = lives;
    this.width = 50;
    this.height = 100;
    this.x = 50;
    this.y = this.canvas.height / 2 - this.width / 2;

    this.directionx = 0;
    this.directiony = 0;
    this.speed = 3;

    this.image = new Image();
    this.image.src = ninjaImgSrc;
    this.frames = 7;
    this.framesIndex = 0;
  }

  setDirection(direction) {
    //+1down -1up
    if (direction === 'up') {
      this.directiony = -1;
    } else if (direction === 'down') {
      this.directiony = 1;
    } else if (direction === 'left') {
      this.directionx = -1;
    } else if (direction === 'right') {
      this.directionx = 1;
    }
  }

  updatePosition() {
    this.y += this.directiony * this.speed;
    this.x += this.directionx * this.speed;
  }

  handleScreenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;

    const ninjaTop = this.y;
    const ninjaBottom = this.y + this.height;

    const screenLeft = 0;
    const screenRight = this.canvas.width;

    const ninjaLeft = this.x;
    const ninjaRight = this.x + this.width;

    if (ninjaBottom >= screenBottom) this.setDirection('up');
    else if (ninjaTop <= screenTop) this.setDirection('down');

    if (ninjaLeft <= screenLeft) this.setDirection('right');
    else if (ninjaRight >= screenRight) this.setDirection('left');
  }

  removeLifes() {
    this.lives -= 1;
  }

  addLives() {
    this.lives += 1;
  }

  draw(framesCounter) {
    //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.x,
      this.y,
      this.width,
      this.height
    )
    this.animate(framesCounter);

  }

  animate(framesCounter){
    if(framesCounter % 2 === 0) {
      this.framesIndex++

      if(this.framesIndex > 7) this.framesIndex = 0;
    }

  }

  didHurt(fire) {
    const ninjaLeft = this.x;
    const ninjaRight = this.x + this.width;
    const ninjaTop = this.y;
    const ninjaBottom = this.y + this.height;

    const fireLeft = fire.x;
    const fireRight = fire.x + this.width;
    const fireTop = fire.y;
    const fireBottom = fire.y + this.width;

    const crossLeft =
      fireLeft <= ninjaRight && fireLeft >= ninjaLeft;
    const crossRight =
      fireRight >= ninjaLeft && fireRight <= ninjaRight;
    const crossBottom =
      fireBottom >= ninjaTop && fireBottom <= ninjaBottom;
    const crossTop = fireTop >= ninjaBottom && fireTop <= ninjaTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  beRich(diamonds) {
    const ninjaLeft = this.x;
    const ninjaRight = this.x + this.width;
    const ninjaTop = this.y;
    const ninjaBottom = this.y + this.height;

    const diamondLeft = diamonds.x;
    const diamondRight = diamonds.x + this.width;
    const diamondTop = diamonds.y;
    const diamondBottom = diamonds.y + this.height;

    const crossLeft =
      diamondLeft <= ninjaRight && diamondLeft >= ninjaLeft;
    const crossRight =
      diamondRight >= ninjaLeft && diamondRight <= ninjaRight;
    const crossBottom =
      diamondBottom >= ninjaTop && diamondBottom <= ninjaBottom;
    const crossTop = diamondTop >= ninjaBottom && diamondTop <= ninjaTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
