
var fixedRect, movingRect;
var fixedRect2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "blue"
  
  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "yellow";
  
  fixedRect2 = createSprite(600,160,40,60);
  fixedRect2.shapeColor = "yellow"; 
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
  
  else {
    movingRect.shapeColor = "blue";
  
    fixedRect.shapeColor = "yellow";
   
    fixedRect2.shapeColor = "yellow";
  
  }
 
   

  drawSprites();
}


