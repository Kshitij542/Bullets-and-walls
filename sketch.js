  


var car,wall;


var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,30);   

	car.velocityX = speed;

	speed=random(223,321)
	weight=random(30,52)
	car.shapeColor=color(255);


  
  	wall=createSprite(1200,200,thickness,height/2)
	  wall.shapeColor=color(80,80,80)
	  thickness=random(22,83)
}


function draw() {
  background(0);

  
  drawSprites();
 
}


