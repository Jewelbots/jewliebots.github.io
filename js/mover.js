

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover() {
  this.position = createVector(random(width),random(height));
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 3;  
  this.size = random(20, 50);
}

Mover.prototype.update = function() {
  // Compute a vector that points from position to mouse
  var mouse = createVector(mouseX,mouseY);
  this.acceleration = p5.Vector.sub(mouse,this.position);
  // Set magnitude of acceleration
  this.acceleration.setMag(0.05);

  this.velocity.add(this.acceleration);
  this.velocity.limit(this.topspeed);
  this.position.add(this.velocity);  
}

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  image(img,this.position.x, this.position.y, this.size, this.size);
}

Mover.prototype.reset = function(){
  this.velocity.set(random(-400, 400),random(-400, 400));
  this.position.add(this.velocity);  
}
Mover.prototype.explode = function(){
  this.velocity.set(random(-width, width),random(-height, height));
}
