var compPaddle,playerPaddle, Ball;


function setup() {
  createCanvas(400,400);
  compPaddle=createSprite(20, 180, 10, 100);
  compPaddle.shapeColor = "cyan";
  playerPaddle=createSprite(380, 180, 10, 100);
  playerPaddle.shapeColor = "cyan";
  Ball=createSprite(200, 200, 20, 20);
  Ball.shapeColor = "magenta";
  Ball.velocityX = 3;
  Ball.velocityY = 3;



}

function draw() {
  background(0); 
   
  playerPaddle.y = World.mouseY;
  

  //fill("white");
  //for(var y=0; y>400; y=y+20){
    //line(this.position.x, this.position.y, this.position.x, this.position.y+10);
    //}

  drawSprites();
}