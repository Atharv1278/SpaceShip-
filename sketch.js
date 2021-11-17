
var Spaceship ,Spaceship_running , Astoride , AstorideGroup ;
var Space,SpaceImage

function preload(){
 SpaceImage=loadImage("images/Spacebg.jpg")
 Spaceshipimage=loadImage("images/space_Craft-removebg-preview.png")
 AmmoImage=loadImage("images/Ammo-removebg-preview.png")
 AstorideImage=loadImage("images/Astoride-removebg-preview.png")
}

function setup(){
  createCanvas(1200,800)
  
  //create a trex sprite
  Spaceship=createSprite(500,600,20,90)
  Spaceship.addImage("Spaceship",Spaceshipimage)

  Astoride=createSprite(300, random(450,300), 180, 150);
  Astoride.addImage("Astoride",AstorideImage)
  Astoride.scale=0.1


 
}

function draw(){
  background(SpaceImage);

  if(keyDown("UP_ARROW")){
    Spaceship.velocityY-=0.5
  }

  if(keyDown("LEFT_ARROW")){
    Spaceship.velocityX-=0.5
  }

  if(keyDown("RIGHT_ARROW")){
    Spaceship.velocityX+=0.5
  }

  if(keyDown("DOWN_ARROW")){
    Spaceship.velocityY+=0.5
  }

  if(keyDown("Space")){
    Ammo=createSprite(Spaceship.x,Spaceship.y,20,90);
    Ammo.addImage("Ammo",AmmoImage)
    Ammo.scale=0.2
    Ammo.velocityY-=18
  }

 // Space.velocityX = -(4 + 3* score/100)

  AstorideGroup = createGroup();
  
  
 
 
 
 
  
drawSprites()
}


function spawnAstoride(){
  if (frameCount % 60 === 0){
    var Astoride = createSprite(600,165,10,40);
    Astoride.velocityY = -(6 + score/100);
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     Astoride.addImage(AstorideImage);
       
     
    
     //assign scale and lifetime to the obstacle           
     Astoride.scale = 0.5;
     Astoride.lifetime = 1200;
    
    //add each obstacle to the group
     AstorideGroup.add(Astoride);
  }
 }
