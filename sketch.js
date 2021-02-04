
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,stone,ground,rubber
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine)
	//Create the Bodies Here.
	ground=new Ground(200,height,1200,20);     
	stone=new Stone(200,100);
	hammer=new Hammer(400,350);
	rubber=new Rubber(400,350);
	;                         
	               
}                         


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}                               