class Diamond {
  constructor(canvas, positionY, speed, diamondImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width;
    this.y = positionY;
    this.speed = speed;
    this.width = 30;
    this.height = 30;
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
    const diamondRight = this.x + this.size;
    const screenLeft = 0;
    const isInside = diamondRight > screenLeft;

    return isInside;
  }
}
