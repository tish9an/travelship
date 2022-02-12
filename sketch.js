var seaImg;
var shipImg1;
var sea;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,200);

  sea= createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale= 0.3;


  ship= createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale= 0.25;
}

function draw() {
  background("blue");
 if(sea <0){
   sea.x = sea.width/2;
 }
 drawSprites();
}