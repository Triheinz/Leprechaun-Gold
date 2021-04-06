class Clovers {
  constructor(canvas, positionY, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 15;
    this.x = this.canvas.width;
    this.y = positionY;
    this.speed = speed;
  }

  draw() {
    this.ctx.fillStyle = '#008000';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    this.x -= this.speed;
  }

  isInsideScreen() {
    const cloversRight = this.x + this.size;
    const screenLeft = 0;
    const isInside = cloversRight > screenLeft;

    return isInside;
  }
}
