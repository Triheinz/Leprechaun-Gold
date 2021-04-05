class FWorld {
  constructor(fWorldScreen){
    this.canvas= null;
    this.ctx= null;
    this.humans=[]
    this.leprechaun=null;
    this.gameIsOver=false;
    this.fWorldScreen= fWorldScreen;
    this.score=0;
    this.goldElement= undefined;
    this.scoreElement= undefined;
  }


  start() {

    this.goldElement = this.fWorldScreen.querySelector('.gold .value');
    this.scoreElement = this.fWorldScreen.querySelector('.score .value');

    this.canvas =  this.fWorldScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasContainer = this.fWorldScreen.querySelector(".canvas-container")
    this.containerWidth= this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width",this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.leprechaun= new Leprechaun(this.canvas, 20);

    document.body.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") this.leprechaun.setDirection("up");
        else if (event.key === "ArrowDown") this.leprechaun.setDirection("down");
      if (event.key === "ArrowLeft") this.leprechaun.setDirection("left");
      else if (event.key === "ArrowRight") this.leprechaun.setDirection("right");
    });
  }

  startloop(){
  const loop= function(){

  if (Math.random()> 0.95){
  const randomY = Math.floor((this.canvas.height - this.humans.height) * Math.random())
  const newHuman = new Humans(this.canvas, randomY, 5);
  this.humans.push(newHumans);
  }

    this.checkSteal();

  }

  checkSteal(){
    this.humans
    this.leprechaun.didSteal(humans)
  }
  gameOver(){

  }
  updateGameStats(){

  }
}
