
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var boxSide1, boxSide2, boxSide3;

function preload()
{
		
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 300, 30);

	ground = new Ground(600, 350, 1200, 20);

	boxSide1 = new Dustbin(1000, 240, 200, 200);
	boxSide2 = new Dustbin(900, 270, 20, 100);
	boxSide3 = new Dustbin(1100, 270, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();

  ball.display();
  ground.display();
  boxSide1.display();
  
 
  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:75, y:-10})
	}

}

