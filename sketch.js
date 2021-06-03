function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-89.5);
  
let hr = hour();
let mn = minute();
let sc = second();
  
stroke(5,10,210);
let hourAngle = map(hr%12,0,12,0,360);
arc(0,0,200,200,0,hourAngle);
push();
rotate(hourAngle);
line(0,0,40,0);
pop();
  
stroke(25,200,10);
let minuteAngle = map(mn,0,60,0,360);
arc(0,0,230,230,0,minuteAngle);
push();
rotate(minuteAngle);
line(0,0,60,0);
pop();
  
strokeWeight(8);
noFill();
stroke(255,100,220);
let secondAngle = map(sc,0,60,0,360);
arc(0,0,260,260,0,secondAngle);
push();
rotate(secondAngle);
line(0,0,80,0);
pop();
  

    
   
}