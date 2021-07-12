class Rope{
	constructor()
	{

		var ball_options = {
			restitution: 0.8
		  }
		  
		  
		  ball1 = Bodies.circle(400+20,200,10,ball_options);
		  World.add(world,ball1); 

		  ball2 = Bodies.circle(400+(20*2),200,10,ball_options);
		  World.add(world,ball2);

		  ball3 = Bodies.circle(400,200,10,ball_options);
		  World.add(world,ball3);

		  ball4 = Bodies.circle(400-20,200,10,ball_options);
		  World.add(world,ball4);

		  ball5 = Bodies.circle(400-(20*2),200,10,ball_options);
		  World.add(world,ball5);
		  
		  con1 = Matter.Constraint.create({
				  pointA:{x:400+20,y:100},
				  bodyB:ball1,
				  length:100,
				  stiffness:0.1
				});
		  World.add(world,con1);

		  con2 = Matter.Constraint.create({
			pointA:{x:400+(20*2),y:100},
			bodyB:ball2,
			length:100,
			stiffness:0.1
		  });
		World.add(world,con2);

		con3 = Matter.Constraint.create({
			pointA:{x:400,y:100},
			bodyB:ball3,
			length:100,
			stiffness:0.1
		  });
		World.add(world,con3);

		con4 = Matter.Constraint.create({
			pointA:{x:400-20,y:100},
			bodyB:ball4,
			length:100,
			stiffness:0.1
		  });
		World.add(world,con4);

		con5 = Matter.Constraint.create({
			pointA:{x:400-(20*2),y:100},
			bodyB:ball5,
			length:100,
			stiffness:0.1
		  });
		World.add(world,con5);
		  
		  
		  rectMode(CENTER);
		  ellipseMode(RADIUS);

	}


    //create display() here 

	display(){

		 ellipse(ball1.position.x,ball1.position.y,10);
		 ellipse(ball2.position.x,ball2.position.y,10);
		 ellipse(ball3.position.x,ball3.position.y,10);
		 ellipse(ball4.position.x,ball4.position.y,10);
		 ellipse(ball5.position.x,ball5.position.y,10);
		 
 		 push();
 		 strokeWeight(2);
 		 stroke(255);
 		 line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
		 line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
		 line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
		 line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
		 line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  
  pop();

	}

}
