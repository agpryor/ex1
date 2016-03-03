console.log("hello from reading from js");


/*
Eye e1;//initiates the eye variable
Eye e2;//initiates the seconds eye variable

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(91, 189, 255);
  smooth();
  e1 = new Eye(width/2-30, 100, 30);//position of the right eye
  e2 = new Eye(width/2+30, 100, 30);//position of the left eye
}

function draw() {
  
  drawCat();
  
  e1.update(mouseX, mouseY);//finds the new cursor location
  e2.update(mouseX, mouseY);
  
  e1.display();//draws the right eyeball
  e2.display();//draws the left eyeball
  
}

function drawCat() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  
  //body
  fill(120);
  rect(width/2, height/2, 140, 250, 20);
  
  //chest
  fill(255, 198, 116);
  ellipse(width/2, 230, 80, 140);
  
  //head
  fill(120);
  ellipse(width/2, height/4, 200, 180);
  triangle(155, 100, 130, 15, 225, 75);
  triangle(345, 100, 370, 15, 275, 75);
  
  //nose
  fill(255, 198, 116);
  triangle(240, 130, 260, 130, 250, 140);
  
  //legs
  fill(120);
  ellipse(width/2-80, 320, 100, 140);
  ellipse(width/2+80, 320, 100, 140);
  
  //feet
  ellipse(width/2-100, 380, 90, 30);
  ellipse(width/2+100, 380, 90, 30);
  
  stroke(40);
  strokeWeight(3);
  //front legs
  line(200, 373, 200, 315);
  line(230, 373, 230, 315);
  line(270, 373, 270, 315);
  line(300, 373, 300, 315);
  
  strokeWeight(2);
  //wiskers
  //cat's right
  line(175, 150, 225, 135);
  line(180, 162, 225, 140);
  line(185, 174, 225, 145);
  //cat's left
  line(325, 150, 275, 135);
  line(320, 162, 275, 140);
  line(315, 174, 275, 145);
  
  //mouth
  line(235, 170, 265, 170);
}

class Eye {
  var x;
  var y;
  var size;
  var angle = 0.0;
  
  Eye(var tempX, var tempY, var tempS) {
    x = tempX;//temporary location of eye before it moves to next location
    y = tempY;
    size = tempS;//size stays the same
  }
  
  //updates the new location of the eyeball
  function update(var mx, var my) {
    angle = atan2(my-y, mx-x);
  }
  
  function display() {
    push();
    translate(x, y);
    //eye shapes
    fill(255);
    ellipse(0, 0, size, size);
    rotate(angle);
    fill(153, 204, 0);
    ellipse(size/4, 0, size/2, size/2);
    pop();
  }
}
  //finds the area of the chest for the mousePressed function
  boolean overChest() {
  if(mouseX >= 210 && mouseX <= 290 && 
     mouseY >= 160 && mouseY <= 300) {
  return true;
     }
  else {
   return false; 
    }
  }  
 
 //clears the background to the same color and new tail location
 function updateTail() {
  background(91, 189, 255);
}
  
  function mouseIsPressed() {
  //interaction with the image to move the tail if over chest
  if(overChest()){
    updateTail();
    rightTail();
  }
  else if (!overChest()){
    updateTail();
    leftTail();
  }
  
}
  
  
  function rightTail() {
  
  push();
  //right tail
  noStroke();
  fill(100);
  rectMode(CENTER);
  translate(width/2-50, height/2+25);
  rotate(radians(-40));
  rect(0, 0, 20, 200, 10);
  pop();
  
}


function leftTail()  {
  
  push();
  //left tail
  noStroke();
  fill(100);
  rectMode(CENTER);
  translate(width/2+50, height/2+25);
  rotate(radians(40));
  rect(0, 0, 20, 200, 10);
  pop();
  
}
*/







var d=20;

function setup(){
	var myCanvas=createCanvas(800, 250);
	//link to id mySketch from header
	myCanvas.parent('mySketch');
}



function draw(){
if (mouseIsPressed){
	fill(0, 0, 255);
}
else {
	fill(0, 255, 0);
}
ellipse(mouseX, mouseY, d, d);
}

