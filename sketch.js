
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bullets = [];
var bgImg;
var canH;
var canW;
var hunter;

var button;

function preload(){

 bgImg = loadImage('background.jpeg');
shooter = loadImage('shooter.png')

}
function setup() {
var isMoble = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMoble){
  canW = displayWidth;
  canH = displayHeight;
  createCanvas(displayWidth+20,displayHeight);
}
else{
  canW = windowWidth;
  canH = windowHeight;
  createCanvas(windowWidth,windowHeight);
}
frameRate(80);

  engine = Engine.create();
  world = engine.world;

  button = createImg('shootingButton.png');
  button.position(100,canH-200);
  button.size(80,80);
 // button.mouseClicked(keyReleased);

 hunter = createSprite(500,200,200,10);
 hunter.addImage(shooter);
 hunter.scale = 0.2;

  ground = new Ground(600,canH,10000,10);
  

 



rectMode(CENTER);
ellipseMode(RADIUS);
textSize(50)
}


function draw() 
{
  background(51);
  text(mouseX+","+mouseY,mouseX,mouseY);
  image(bgImg, 0, 0,width,height);
 


 
  Engine.update(engine);
  ground.show();
 
   

  drawSprites();  
}
function showBullet(bullets, index) {
  if (bullets) {
    bullets.display();
    bullets.animate();
    if (bullets.body.position.x >= width || bullets.body.position.y >= height - 200) {
     
        bullets.remove(index);
      
    }
  }
}
function keyReleased() {
  
    bullets[bullets.length - 1].shoot();
}