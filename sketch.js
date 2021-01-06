// sword sprites
var sword , swordImage;

// gameStates
var PLAY = 1;
var END = 2;
var gameState = PLAY;

// variables of fruits and monster
var fruit, fruit1,fruit2,fruit3,fruit4;
var enemy, enemy1;

// creating groups
var fruitGroup,enemyGroup;

// gameover image
var gameover;

// variables for sound
var gameoverSound, slicingSound;
function preload(){
  // loading Image
   swordImage = loadImage("sword.png");
   enemy1 = loadImage("alien1.png");
   fruit1 = loadImage("fruit1.png");
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4 = loadImage("fruit4.png");
  gameover = loadImage("gameover.png");
  
  // loading sound
  gameoverSound = loadSound("gameover.mp3");
  slicingSound = loadSound("knifeSwooshSound.mp3");
}
function setup(){
  createCanvas(600,500);
// creating sword sprite
 sword = createSprite(40,200,20,20);
 sword.addImage(swordImage);
 sword.scale = 0.7;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  score = 0;
}

function draw(){
 background("lightblue");
  
 text("score:"+score,500,20); 
  if(gameState===PLAY){
  // adding fruit and enemy function
  fruits();
  enemys();
  
  
   // movement of sword
 sword.x = World.mouseX;
 sword.y = World.mouseY;
    
  if(fruitGroup.isTouching(sword)){
    fruit.destroy();
     slicingSound.play();
    score = score+2;
  }
  else if(enemyGroup.isTouching(sword)){
    gameState = END;
    gameoverSound.play();
    enemy.destroy();
  }
 }
else if(gameState === END){
  sword.addImage(gameover);
  sword.x=300;
  sword.y=250;
}
  
  
  
 drawSprites();
}

function fruits(){
  if(World.frameCount%80===0){
    fruit = createSprite(0,200,20,20);
    fruit.scale = 0.2;
   // fruit.debug = true;
    r = Math.round(random(1,4));
    if(r===1){
      fruit.addImage(fruit1);
    }
   else if(r===2){
      fruit.addImage(fruit2);
    }
   else if(r===3){
     fruit.addImage(fruit3);
   }
   else{fruit.addImage(fruit4);
   }
    
    fruit.y = Math.round(random(50,340));
  a = Math.round(random(1,2));
    if(a===1){
      fruit.x = 450;
      fruit.velocityX = -7;
      fruit.setLifetime = 100;
    }
    else{
      fruit.x = 50;
      fruit.velocityX = 7;
      fruit.setLifetime = 100;
    }

    fruitGroup.add(fruit);
  }
}
function enemys(){
  if(World.frameCount%200===0){
    enemy = createSprite(450,200,20,20);
    //enemy.debug = true;
    enemy.addImage(enemy1);
    enemy.y = Math.round(random(50,340));
    enemy.velocityX = -10;
    enemy.setLifetime = 100;
    
    enemyGroup.add(enemy);
  }
}
