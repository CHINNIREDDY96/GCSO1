var wall, car1, car2, car3;
var speed1, speed2, speed3, weight1, weight2 , weight3;

function setup() {
  createCanvas(800,400);
  wall = createSprite(750, 100, 10, 550);
  car1 = createSprite(10,100, 10, 10);
  car2 = createSprite(10,200, 10, 10);
  car3 = createSprite(10,300, 10, 10);
  speed1 = random(60,90);
  speed2 = random(30,90);
  speed3 = random(45,90);
  weight1 = random(400,1500); 
  weight2 = random(500,1600); 
  weight3 = random(600,1700); 

}

function draw() {
  background("black"); 
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  
  if(wall.x - car1.x < (car1.width+wall.width)/2){

    car1.velocityX = 0;
    var deformation = 0.5 * weight1 * speed1 * speed1/22509;
    
    if(deformation > 180){
      car1.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car1.shapeColor = color(230 , 230, 0);
    }
    if(deformation < 100){
      car1.shapeColor = color(0,255,0);
    }
  }
  
  if(wall.x - car2.x < (car2.width+wall.width)/2){

    car2.velocityX = 0;
    var deformation = 0.5 * weight2 * speed2 * speed2/22509;
    
    if(deformation > 180){
     car2.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car2.shapeColor = color(230 , 230, 0);
    }
    if(deformation < 100){
      car2.shapeColor = color(0,255,0);
    }
  }

  if(wall.x - car3.x < (car3.width+wall.width)/2){

    car3.velocityX = 0;
    var deformation = 0.5 * weight3 * speed3 * speed3/22509;
    
   if(deformation > 180){
      car3.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car3.shapeColor = color(230 , 230, 0);
    }
    if(deformation < 100){
     car3.shapeColor = color(0,255,0);
    }
  }

  


  drawSprites();
}