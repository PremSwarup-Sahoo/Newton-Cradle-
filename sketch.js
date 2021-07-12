const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;
var con1,con2,con3,con4,con5;


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

	rope = new Rope()

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  rope.display();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){

	if (keyCode == UP_ARROW){
		
		Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.01,y:0});

	}

}