class Diamond {
  constructor(canvas, positionY, speed, diamondImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width;
    this.y = positionY;
    this.speed = speed;
    this.width = 20;
    this.height = 25;
    this.image = new Image();
    this.image.src = diamondImgSrc;


  }

  draw() {
    //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height,
    );

  }

  updatePosition() {
    this.x -= this.speed;
  }

  isInsideScreen() {
    const diamondRight = this.x + this.width;
    const screenLeft = 0;
    const isInside = diamondRight > screenLeft;

    return isInside;
  }
}
