// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)
var movers = [];
var canvas;
var img;
var counter;

function setup() {
      img = loadImage('img/star.png')
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.parent('p5-container');
        for (var i = 0; i < 10; i++) {
           movers[i] = new Mover(); 
        }
        counter = 0;   
  }
  


function draw() {
       clear();
      for (var i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].display(); 
      }

      counter++;
      if(counter> 60*5){
        for (var i = 0; i < movers.length; i++) {
          movers[i].explode();
        }
        counter = 0;
      
  }
}



function mousePressed() {
  for (var i = 0; i < movers.length; i++) {
    movers[i].reset();
    counter = 0;
  }
}


$( window ).resize(function() {
  $( "#p5-container" ).children().width = window.innerWidth;
    $( "#p5-container" ).children().height = window.innerHeight;
});