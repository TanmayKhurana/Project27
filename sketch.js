const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload()
{

}

function setup() {
	createCanvas(900, 800);
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.

	rod = new Ground(500, 300, 450, 20)
	
	bob1 = new Bob(350, 550, 26)
	bob2 = new Bob(400, 550, 26)
	bob3 = new Bob(450, 550, 26)
	bob4 = new Bob(500, 550, 26)
	bob5 = new Bob(550, 550, 26)
	bob6 = new Bob(600, 550, 26)
	bob7 = new Bob(650, 550, 26)
	
	
	

	rope1 = new Rope(bob1.body, rod.body,-150, 0)
	rope2 = new Rope(bob2.body, rod.body,-100, 0)
	rope3 = new Rope(bob3.body, rod.body,-50, 0)
	rope4 = new Rope(bob4.body, rod.body,0,0)
	rope5 = new Rope(bob5.body, rod.body,+50, 0)
	rope6 = new Rope(bob6.body, rod.body, +100, 0)
	rope7 = new Rope(bob7.body, rod.body, +150, 0)
	


	
	

	

	

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  

  
 rod.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()
  bob7.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()
  rope7.display()


  


 

  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position,{
		x:-110,
		y:0
	}
	)
}

  

  drawSprites();
}
