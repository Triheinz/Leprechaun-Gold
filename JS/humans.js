class Humans{
  constructor(canvas, positionY, speed){
    this.canvas= canvas;
    this.ctx =  this.canvas.getContext("2d");
    this.size = 20;
    this.x = this.canvas.width;
    this.y = positionY;
    this.speed = speed;

  }

  draw(){
    this.ctx.fillStyle = "#FF6F27";
    this.ctx.fillRect (this.x, this.y, this.size, this.size);
  }

  updatePosition(){
    this.x -= this.speed;
  }

  isInsideScreen(){
    const humanRight =  this.x + this.size;
    const sreenLeft = 0;
    const isInside = humanRight > screenLeft;

    return isInside;

  }
}
