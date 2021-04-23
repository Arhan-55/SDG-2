
var normalmanImg,normalmanleftImg,groudImg,normalmanstandingImg,normalmanJumping;
var JokerImg,Joker;
var bg1,bg2,bg3,bg4;
var villianGroup1;
var Instructions,level1;

var bully_meter = 0;
var fight_smoke_Img;
var normal = 1;
var joker = 100;
var characterState = normal;

var END = 0;
var Level_1 = 1;
var Level_2 = 2;
var Level_3 = 3;
var Level_4 = 4;
var gameState = Level_1;

function preload(){
    normalmanImg = loadAnimation("images/Normal_Arthur(1).png","images/Normal_Arthur(2).png","images/Normal_Arthur(3).png","images/Normal_Arthur(4).png");
    normalmanleftImg = loadAnimation("images/Normal_Arthur_left(1).png","images/Normal_Arthur_left(2).png","images/Normal_Arthur_left(3).png","images/Normal_Arthur_left(4).png")
    normalmanstandingImg = loadAnimation("images/Normal_Arthur_standing.png");
    normalmanJumping = loadAnimation("images/Normal_Arthur_jumping.png")

    groundImg = loadImage("images/ground.png");

    bg1 = loadImage("images/bg(1).png");
    bg2 = loadImage("images/bg(2).png");
    bg3 = loadImage("images/bg(3).png");
    bg4 = loadImage("images/bg(4).png");

    villianGroup1 = loadImage("images/villian_group(1).png");

    Instructions = loadImage("images/Instructions.png");
    level1 = loadImage("images/LEVEL(1).png");

    fight_smoke_Img = loadImage("images/fight_smoke.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    ground = createSprite(displayWidth/2+5780,displayHeight-40);
    ground.addImage(groundImg);
    ground.scale = 5.9;

    Joker = createSprite(displayWidth/2-700,displayHeight-150);
    Joker.addAnimation("standing",normalmanstandingImg);
    Joker.addAnimation("walking",normalmanImg);
    Joker.addAnimation("leftwalking",normalmanleftImg);
    Joker.addAnimation("jumping",normalmanJumping);
    Joker.scale = 1.5;
 
    edge = createSprite(displayWidth/2-890,Joker.y-250,10,880)
    edge.visible = false;

    edge2 = createSprite(12033,Joker.y-250,10,880);
    edge2.visible = false;

    if(gameState === Level_1){
        level_1 = createSprite(displayWidth/2,displayHeight/2);
        level_1.addImage(level1);
        level_1.scale = 0.1;
        level_1.lifetime = 400;
    
        instructions = createSprite(displayWidth/2,displayHeight/2);
        instructions.addImage(Instructions);
        instructions.scale = 0.1;
        instructions.lifetime = 200;
    
        young_boys = createSprite(2683,displayHeight/2+250);
        young_boys.addImage(villianGroup1);
        young_boys.scale = 0.6;
        young_boys.collide(ground);

        young_boys2 = createSprite(4683,displayHeight/2+250);
        young_boys2.addImage(villianGroup1);
        young_boys2.scale = 0.6;
        young_boys2.collide(ground);

        young_boys3 = createSprite(6683,displayHeight/2+250);
        young_boys3.addImage(villianGroup1);
        young_boys3.scale = 0.6;
        young_boys3.collide(ground);

        young_boys4 = createSprite(8683,displayHeight/2+250);
        young_boys4.addImage(villianGroup1);
        young_boys4.scale = 0.6;
        young_boys4.collide(ground);
    }
}

function draw(){
    background(bg1);
    
    Controls();

    console.log(Joker.x)
    if(gameState === Level_1){
        if(Joker.isTouching(young_boys)){
         smoke = createSprite(Joker.x,Joker.y);
         smoke.addImage(fight_smoke_Img);
         smoke.scale = 0.5;
         smoke.lifetime = 5;

         young_boys.velocityX = -5;
         bully_meter += 10;
      }
        if(Joker.isTouching(young_boys2)){
          smoke = createSprite(Joker.x,Joker.y);
          smoke.addImage(fight_smoke_Img);
          smoke.scale = 0.5;
          smoke.lifetime = 5;
          
          young_boys2.velocityX = -5;
          bully_meter += 10;
     }
        if(Joker.isTouching(young_boys3)){
           smoke = createSprite(Joker.x,Joker.y);
           smoke.addImage(fight_smoke_Img);
           smoke.scale = 0.5;
           smoke.lifetime = 5;

           young_boys3.velocityX = -5;
           bully_meter += 10;
     }
        if(Joker.isTouching(young_boys4)){
           smoke = createSprite(Joker.x,Joker.y);
           smoke.addImage(fight_smoke_Img);
           smoke.scale = 0.5;
           smoke.lifetime = 5;

           young_boys4.velocityX = -5;
           bully_meter += 10;
  }
     
    }

    Joker.velocityY = Joker.velocityY + 0.8;

    Joker.collide(ground);

    camera.position.x = Joker.x+490;
    Joker.bounceOff(edge);
    Joker.bounceOff(edge2);

    drawSprites();
}

function Controls(){
    if(keyWentUp("space")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("space")){
        Joker.changeAnimation("jumping",normalmanJumping);
    }

    if(keyDown("right") && Joker.y <= displayHeight-180){
        Joker.x = Joker.x+20;
    }

    if(keyDown("space") && Joker.y >= displayHeight-180){
        Joker.velocityY = -20;
    }

    if(keyDown("left") && Joker.y <= displayHeight-180){
        Joker.x = Joker.x-20;
    }

if(Joker.y >= displayHeight-180){
    if(keyWentUp("right")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("right")){
        Joker.changeAnimation("walking",normalmanImg);
    }

    if(keyDown("right")){
        Joker.x = Joker.x+30;
    }

    

    if(keyWentUp("left")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("left")){
        Joker.changeAnimation("leftwalking",normalmanleftImg);
    }

    if(keyDown("left")){
        Joker.x = Joker.x-30;
    }
  }
}


