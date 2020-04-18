

function setup(){
  var canvas = createCanvas(400,400);
}

function draw() {
  background(255); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(200, 350, 20, 100);
  ellipse(200,320,30, 30);
  rect(100, 300, 30, 200);
  rect(300, 300, 30, 200);
  triangle(85, 200, 115, 200, 100, 170);
  triangle(285, 200, 315, 200, 300, 170);
  rect(200, 390, 180, 20);
  rect(200, 270, 180, 20);


  drawSprites();
}