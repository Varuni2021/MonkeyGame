
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,200,1200,20);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  rand=Math.round(random(1,100));
  console.log(rand)
  
  monkey.setCollider("rectangle",0,0,200,monkey.height);
  monkey.debug = true;
  
  
   
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}
  
  
function draw() {
background(180);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
   
  
  
if (ground.x < 10) {
  ground.x = ground.width / 2;
}
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  Obstacles();
  bananas();
  drawSprites();
}

function bananas(){
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(50,50));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 134;
    bananaGroup.add(banana);
}
}

function Obstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,175,10,40);
   obstacle.velocityX = -6;
   var rand = Math.round(random(1,6));
   obstacle.addImage(obstacleImage);       
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }
}


