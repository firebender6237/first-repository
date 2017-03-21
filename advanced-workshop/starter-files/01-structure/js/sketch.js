/*
	Let's create some shapes with p5. Ellipses, rectangles, lines, oh my.

	Check out the p5 reference page: http://p5js.org/reference. See the
	structure, shape and color sections.

	p5 structure:
		setup(), draw()

	p5 global functions:
		createCanvas(...)
		background(...)
		fill(...), noFill(...)
		stroke(...), noStroke(...), strokeWeight(...)
		ellipse(...), rect(...)

	p5 global variables:
		windowWidth, windowHeight
		mouseX, mouseY
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,100,255);
  fill(255,255,255);
  stroke(255,200,0);
  strokeWeight(5);

  ellipse(200,300,200,100);
  rect(150,10,240,240);

}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
  fill(250,0,255);
  stroke(255,255,255);
  strokeWeight(2);

  ellipse(mouseX, mouseY, 20);

}
