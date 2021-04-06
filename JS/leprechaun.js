class Leprechaun {
  constructor(canvas, gold){
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d");

    this.gold= gold;
    this.size= 80;
    this.x = 50;
    this.y = (this.canvas.height/2)- this.size/2;

    this.directionx = 0;
    this.directiony = 0;
    this.speed = 3;

  }

  setDirection(direction) {
    //+1down -1up
    if (direction ==="up") {
      this.directiony = -1;
    }
    else if (direction === "down") {
      this.directiony = 1;
    }
    else if (direction ==="left") {
      this.directionx = -1;
    }
    else if (direction === "right") {
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

  const leprechaunTop = this.y;
  const leprechaunBottom = this.y + this.size;

  const screenLeft = 0;
  const screenRight = this.canvas.width;

  const leprechaunLeft = this.x;
  const leprechaunRight = this.x + this.size;

  if (leprechaunBottom >= screenBottom) this.setDirection("up");
  else if (leprechaunTop<= screenTop) this.setDirection("down");

  if (leprechaunLeft <= screenLeft) this.setDirection("right");
  else if (leprechaunRight >= screenRight) this.setDirection("left");

  }

  removeGold() {
    this.gold -= 1;
  }

  /*addGold(){
    this.gold += 1;
  }*/

  draw() {
    this.ctx.fillStyle = "#66D3FA";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didSteal(humans) {
    const leprechaunLeft = this.x;
    const leprechaunRight = this.x + this.size;
    const leprechaunTop =  this.y;
    const leprechaunBottom = this.y + this.size;

    const humanLeft= humans.x;
    const humanRight =  humans.x + this.size;
    const humanTop =  humans.y;
    const humanBottom = humans.y + this.size;

    const crossLeft = humanLeft <= leprechaunRight && humanLeft >= leprechaunLeft;
    const crossRight = humanRight >= leprechaunLeft && humanRight <= leprechaunRight;
    const crossBottom= humanBottom >= leprechaunTop && humanBottom <= leprechaunBottom;
    const crossTop = humanTop >= leprechaunBottom && humanTop <= leprechaunTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)){
      return true;
    } else {
      return false
    }
  }

}
