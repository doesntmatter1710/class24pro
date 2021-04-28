
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,100,70,70,70)

	ground1 = new Ground(600,390,1200,20,70)

	hammer = new Hammer(700,200,100,30)

	stone = new Stone(1100,200,50,50)

	iron1 = new Iron(400,300,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(0,182,248));
  Engine.update(engine);
  
  drawSprites();
 
  ball.display();

  ground1.display();

  hammer.display();

  stone.display();

  iron1.display();
}



