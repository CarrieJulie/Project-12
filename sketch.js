var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("Apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApple();
  drawSprites();

  rabbit.x = World.mouseX

  
}

function createApple(){
  if (frameCount % 75 === 0){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 4;
    apple.scale = 0.075;
    apple.lifetime = 75;

    apple.depth = garden.depth;
    apple.depth = rabbit.depth;
    apple.depth = garden.depth + 1;
    rabbit.depth = apple.depth + 1;
  }
  
}

function collectApple(){
  if (rabbit.collide(apple)){
    apple.destroy();
    createApple();
  }
}