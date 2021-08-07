let ground;
let lander;
var lander_running;
var bg_img;
var backgroundImage;
var vy = 0;
var g = 0.05;
var invisibleGround;
var alien;
var score = 0;

function preload()
{
  lander_running = loadAnimation("hero1.png","hero2.png","hero3.png","hero4.png","hero5.png","hero6.png","hero7.png","hero8.png","hero9.png","hero10.png","hero7.png")
  //lander_died = loadAnimation("ded1.png","ded2.png","ded3.png","ded4.png","ded5.png","ded6.png","ded7.png","ded8.png","ded9.png","ded10.png","ded11.png","ded12.png","ded13.png","ded14.png",)
  bg_img = loadImage("SpaceImage.png");
  
  alien_img = loadAnimation("yellow1.png","yellow2.png","yellow3.png","yellow4.png","yellow5.png","yellow6.png","yellow7.png","yellow9.png")
  //alien_img = loadAnimation("blu7.png","blu6.png","blu5.png","blu4.png","blu3.png","blu2.png","blu1.png")
  //alien_img = loadAnimation("rob1.png","rob2.png","rob3.png","rob4.png","rob5.png","rob6.png","rob7.png","rob8.png","rob9.png","rob10.png",)
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  backgroundImg = createSprite(400,200,windowWidth,windowHeight);
  backgroundImg.addImage(bg_img);
 backgroundImg.scale = 5
  
  lander = createSprite(100,400,30,30);
  lander.addAnimation("running",lander_running);
  lander.scale = 2.8;
  lander.setCollider("rectangle",0,0,200,200)
  invisibleGround = createSprite(windowWidth,windowHeight-20,windowWidth+2000,260)
  //invisibleGround.visible=false
  alien = createSprite(windowWidth/2,windowHeight/1.4)
  alien.addAnimation("picture",alien_img)
  alien.scale=1;
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background("backgroundImg");
  //image(bg_img,5,5,windowWidth,windowHeight);
  backgroundImg.velocityX = -3 
   if (backgroundImg.x < 0){
    backgroundImg.x = backgroundImg.width/2
  }
  push()
  score = score + Math.round(getFrameRate()/125);
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  text("Score: "+score,800,50);
  pop();
 lander.collide(invisibleGround)
  //fall down
 vy +=g;
 lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
   
  }
}

function upward_thrust()
{
  vy = -1;
}

