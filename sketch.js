
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground,stone1,rubber1,iron1,hammer1;

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
stone1 = new Stone(700,320,100,100);
iron1 = new Iron(300,350);
rubber1 = new Rubber(900,450,70);
hammer1= new Hammer(10,100);



	Engine.run(engine);
  
}


function draw() {
 
  background("lightblue");
  Engine.update(engine);
  
  ground.display();
stone1.display();
iron1.display();
rubber1.display();
hammer1.display();





}



