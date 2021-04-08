class Fire{
  constructor(canvas, positionY, speed, fireImgSrc){
    this.canvas= canvas;
    this.ctx =  this.canvas.getContext("2d");
    this.width = 30;
    this.height= 30;
    this.x = this.canvas.width;
    this.y = positionY;
    this.speed = speed;
    this.image = new Image();
    this.image.src = fireImgSrc;
    this.frames = 8;
    this.framesIndex = 0;
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
    if(framesCounter % 1 === 0) {
      this.framesIndex++

      if(this.framesIndex > 8) this.framesIndex = 0;
    }

  }


  updatePosition(){
    this.x -= this.speed;
  }

  isInsideScreen(){
    const fireRight =  this.x + this.width;
    const screenLeft = 0;
    const isInside = fireRight > screenLeft;

    return isInside;

  }
}
