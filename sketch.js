var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  gameobject1=createSprite(400,200,50,50);
  gameobject1.shapeColor="white";
  gameobject2=createSprite(800,600,100,100);
  gameobject2.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameobject1)){
    movingRect.shapeColor="blue";
    gameobject1.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="green";
    gameobject1.shapeColor="white";
  }

  drawSprites();
}

