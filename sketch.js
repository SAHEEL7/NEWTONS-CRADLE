const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var roof;
var bob;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    var bob_options = {
		restitution: 0.8
	  }
	  
	  
	  bob = Bodies.circle(250,300,10,bob_options);
	  World.add(world,bob);
	
	  bob2 = Bodies.circle(300,300,10,bob_options);
	  World.add(world,bob2);

	  bob3 = Bodies.circle(350,300,10,bob_options);
	  World.add(world,bob3);
	  
	  bob4 = Bodies.circle(400,300,10,bob_options);
	  World.add(world,bob4);

	  bob5 = Bodies.circle(450,300,10,bob_options);
	  World.add(world,bob5);
		
	  con = Matter.Constraint.create({
		pointA:{x:250,y:20},
		bodyB:bob,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con);
	
	con2 = Matter.Constraint.create({
		pointA:{x:300,y:20},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:350,y:20},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:400,y:20},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con4);

	con5 = Matter.Constraint.create({
		pointA:{x:450,y:20},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con5);






	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
