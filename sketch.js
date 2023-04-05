let rad = 100; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 1; // Speed of the shape
let yspeed = 2; // Speed of the shape

let xdirection = 2; // Left or Right
let ydirection = 2; // Top to Bottom

function setup() {
  createCanvas(720, 400);
  stroke('red');
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(102);
  strokeWeight(6);
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape  
  ellipse(xpos, ypos, rad, rad);
  if (
    mouseX >= xpos &&
    mouseX <= xpos + rad &&
    mouseY >= ypos &&
    mouseY <= ypos + rad
  ) {
    xspeed = xspeed*2;
    yspeed = yspeed*2;
    xpos = 100;
    ypos = 100;
    rad = rad/2;
  }
}
