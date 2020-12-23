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

const flipSpeedChange = (event, newSpeed) => {
  switch (event) {
    // User is done changing speed, so let's stop the auto flip and restart with new speed
    case 'change':
      stopFlip()
      doAutoFlip(newSpeed)
    case 'input':
      // Here we just want to reflect the new speed back to the label while user is dragging the control
      document.getElementById('SPEED').innerText = newSpeed
  }
}
