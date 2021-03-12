var balloon;
var database;
var position;

var bgImg, balloonImg;

function preload(){
  bgImg = loadImage("pro-C35 images/Hot Air Ballon-01.png");
  balloonImg = loadImage("pro-C35 images/Hot Air Ballon-02.png");
}
function setup() {
  createCanvas(1000,500);
  balloon = createSprite(250, 250, 50, 50);
  balloon.addAnimation("balloon",balloonImg);
  database = firebase.database();
  position = database.ref("balloon/position");
  position.on("value",readPosition,showError);
  balloon.scale=0.8;
}

function draw() {
  background(bgImg);  
  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(+10,0);
  }
  else if(keyDown(UP_ARROW)){
    changePosition(0,-10);
    balloon.scale = balloon.scale-0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+10);
    balloon.scale = balloon.scale+0.01;
  }
  drawSprites();
  
}
function changePosition(x,y){
  position.set({ 'x':balloon.x+x, 'y':balloon.y+y,})
  //console.log(balloon.position.x+x)
}
function readPosition(data){
  pos = data.val();
  balloon.x = pos.x;
  balloon.y = pos.y;
}
function showError(){
  console.log("Error in database");
}