var light = new Array();
var t;
var color = 0;
var flipping = 0;
var speed;

light[0] = 'black';
light[1] = 'white';
light[2] = 'red';
light[3] = "blue";
light[4] = "green";
light[5] = "orange";

function flip(whichway) {
  document.body.style.backgroundColor = light[whichway];
  stopFlip();
}

function autoFlip() {
  document.body.style.backgroundColor = light[color];
  if (color < light.length - 1) {
    color++;
  } else {
    color = 0;
  }
  t = setTimeout("autoFlip()", speed);
}

function doAutoFlip(changespeed) {
  if (!flipping) {
    flipping = 1;
    speed = changespeed;
    autoFlip();
  }
}

function stopFlip() {
  clearTimeout(t);
  flipping = 0;
} 