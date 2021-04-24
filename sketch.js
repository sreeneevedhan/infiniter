var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distance1=0;
var database;

var form, player, game;

var cars,car1,car2,car3,car4;

var hurdleGroup;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

function spawnHurdle(){
  if(frameCount%50==0){
    hurdle=createSprite(random(displayWidth/2+500,displayWidth/2-500),camera.position.y-500);
   // hurdle.setCollider("rectangle",0,0,30,150);
   hurdle.velocityY=18;
   hurdleGroup.add(hurdle);
 //   hurdle.lifetime=650;
  }
}