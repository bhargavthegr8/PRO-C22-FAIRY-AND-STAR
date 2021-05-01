var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.loop();
	engine = Engine.create();
	world = engine.world;
	

	starBody = new Star(750, 50, 25)

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;



	Engine.run(engine);
}


function draw() {
  background(bgImg);
 
  Engine.update(engine);
  
  drawSprites();
  starBody.display();

	if (keyDown("right")){
		fairy.x = fairy.x + 5;
	}

	if (keyDown("left")){
		fairy.x = fairy.x - 5;
	}

	if (keyDown("down")) {
		Matter.Body.setStatic(starBody.body,false);
	}

  if(starBody.body.position.y>470 && fairy.x>600){
		Matter.Body.setStatic(starBody.body,true);
  	}
}


