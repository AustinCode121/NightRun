var joe,joeImage,joeGroup;
var ground,groundImage;
var backgroundImage;
var Mobs,mobGroup,mobImage;
var score = 0;
var gun,gungroup,gunImage;
var boost,boostgroup,boostImage;
var gameMode = 1
var easy
var Practice
var meduim
var hard
var ammo = 15; 
var shot,shotimage;


function preload(){
createCanvas(400,800);
  joeImage = loadImage("art.png");
  groundImage = loadImage("art-1.png");
  backgroundImage = loadImage("BackGroundImage.png");
  mobImage = loadImage("Mob.png");
  boostImage = loadImage("Boost.png");
  gunImage = loadImage("Playerarm.png")
  shotimage = loadImage("Adivicethatmakesaloudsoundbecuseoftheprojectiledivicerunninginthedivce.png")
  //why no work :p//art (1).png
}

function setup() {
 joe = createSprite(50,400,50,50);
  shot = createSprite(200,200,60,10);
  gungroup = createGroup();
  ground = createSprite(200,400,600,10);
  ground.addImage(groundImage);
  joeGroup = createGroup();
  shot.addImage(shotimage)
  shot.scale = 0.1
  mobGroup = createGroup();
  c = createGroup();
  //.addImage(backgroundImage);
  ground.shapeColor = "blue";
joe.shapeColor = "red";
  
  
}

function draw() {
 background("backgroundImage");

 
  textSize(20);
  shot.x = joe.x
  shot.y = joe.y
  fill("blue")
  text("ammo:  " + ammo,190,20)
  text("score:  " + score,10,20)
  text("GameMode:  " +  gameMode, 200,330)
  // Adding Gravity
  joe.velocityY = joe.velocityY + 0.9;
  joe.addImage(joeImage);
  joe.scale = 0.2;
  // Move ments
  joeGroup.add(joe);
 if(keyDown("w") && joe.y > 322){
   joe.velocityY = -10;
 }
    if(keyDown("0")){
      gameMode = 0;
    }
  if(keyDown("1")){
    gameMode = 1
  
  }
  if(keyWentDown("2")){
    gameMode = 2
  }
   if(keyWentDown("3")){
    gameMode = 3
  }
  if(joeGroup.isTouching(mobGroup)){
   score--;
    joe.y = 200;
    joe.x = 200;
  }
  if(score < 0){
    score = 0;
  }
  if(keyDown("s")){
   joe.y = joe.y + 20;
 }
  
  if(keyDown("d")){
    joe.x = joe.x + 5;
    
    
  }
  
  if(keyDown("a")){
    joe.x = joe.x - 5;
    
  }
  
  if(keyWentDown("q") && ammo > 0){
     gun = createSprite(200,200,60,20);
    joe.collide(gun);
    gungroup.add(gun);
    ammo--;

    gun.y = joe.y;
    gun.x = joe.x;
    gun.velocityY = 39;
    gun.lifeTime = 3;
    gun.lifetime = 100;
   
      
  }
  if(keyDown("l")){
      shot.mirrorX(shot.mirrorX() * -1);
  }
  
  if(keyDown("p")){
    joe.x = joe.x + 50;
  }
  
  if(joe.x === 400){
     joe.x = 50;
     }
  if(joe.x === 0){
     joe.x = 50;
     }
  
 //////

  
  ////
  if(keyWentDown("space")){
      boost = createSprite(200,200,60,20);
      boost.addImage(boostImage)
      boost.x = joe.x
      boost.y = joe.y
      boost.lifetime = 30;
      joe.velocityY = -15;
      boost.scale = 0.2;
      
  }
  console.log(joe.x)
  // Move ments 
  if(ammo < 0){
    ammo = 0;
  }
  
 
  //
  if(gameMode === 1){
     if(frameCount % 90 === 0){
    Mobs = createSprite(400,315,10,40);
       shot.pointTo(Mobs.x, Mobs.y);
    Mobs.lifetime = 100;
    mobGroup.add(Mobs);
    Mobs.velocityX = -6;
    Mobs.addImage(mobImage)
    Mobs.scale = 0.2;
  }
  }
  if(gameMode === 2){
     if(frameCount % 40 === 0){
    Mobs = createSprite(400,315,10,40);
       shot.pointTo(Mobs.x, Mobs.y);
    Mobs.lifetime = 100;
    mobGroup.add(Mobs);
    Mobs.velocityX = -6;
    Mobs.addImage(mobImage)
    Mobs.scale = 0.2;
  }
  }
  if(gameMode ===3){
     if(frameCount % 30 === 0){
    Mobs = createSprite(400,315,10,40);
       shot.pointTo(Mobs.x, Mobs.y);
    Mobs.lifetime = 100;
    mobGroup.add(Mobs);
    Mobs.velocityX = -50;
    Mobs.addImage(mobImage)
    Mobs.scale = 0.2;
      
      
  }
    if(gameMode === 0){
        if(frameCount % 0 === 0){
    Mobs = createSprite(400,315,10,40);
          shot.pointTo(Mobs.x, Mobs.y);
    Mobs.lifetime = 100;
    mobGroup.add(Mobs);
    Mobs.velocityX = -50;
    Mobs.addImage(mobImage)
    Mobs.scale = 0.2;
    ammo =+ 10000000000;
      
      
  }
    }
  }
  if(keyWentDown("e") && ammo > 0){
    gun = createSprite(200,200,60,20);
    joe.collide(gun);
    ammo--;
    
    gungroup.add(gun);
    gun.addImage(gunImage)
    gun.y = joe.y;
    gun.scale = 0.3;
    gun.x = joe.x;
    gun.velocityX = 39;
    joe.x = joe.x - 30;
    gun.lifeTime = 3;
    gun.lifetime = 100;
  }
 if(gungroup.isTouching(mobGroup)){
   score++;
   ammo += 5;
   mobGroup.destroyEach();
 }
   //boostgroup.add(boost);
   //joe.collide(boostgroup);
   joe.collide(mobGroup);
   joe.collide(ground);
  drawSprites();
}