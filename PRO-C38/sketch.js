var PLAY=1;
var END=0;
var gameState=PLAY;
var backgroundImage, bg;
var player_standing,player_flying, player;
var ground;
var rand;
var rand2;
var missileImage,missileGroup;
var gameover;
var coinImage,coinGroup;
var score=0


function preload(){
  backgroundImage = loadImage("bg.jpg")
  player_standing = loadImage("player_standing.png");
}



function setup() { 
  createCanvas(displayWidth, displayHeight);
  bg = createSprite(displayWidth-200,displayHeight/2-200,1000,displayHeight);
  bg.scale = 3;
  bg.addImage("bg", backgroundImage);
  
  player = createSprite(100,200,20,30);
  player.scale = 0.3;
  player.addImage("player_standing",player_standing);
}



function draw() { 
  background('white');


  if(keyDown("right")){
    player.x = player.x+10;
  }

  drawSprites();

  camera.position.x = player.x;
  camera.position.y = player.y;
  console.log(player.y);
}

