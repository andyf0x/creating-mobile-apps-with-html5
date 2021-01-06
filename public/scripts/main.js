const TECHNO_SPEED = 2

var light = new Array();
var t;
var color = 0;
var speed;

light[0] = 'black';
light[1] = 'white';
light[2] = 'red';
light[3] = "blue";
light[4] = "green";
light[5] = "orange";

function flip(whichWay) {
  document.body.style.backgroundColor = light[whichWay];
  document.getElementById('color').innerText = light[whichWay]
  stopFlip();
}

function autoFlip() {
  document.body.style.backgroundColor = light[color];
  document.getElementById('color').innerText = light[color]
  if (color > 1) {
    color -= 2;
  } else {
    color = light.length - 1;
  }
}

function doAutoFlip(fps) {
  if (fps == 0) {
    stopFlip()
    return
  }

  // Change speed is now frames / second
  let changeSpeed = 1000 / fps

  // Only adjust the interval if the frequency has changed
  if (speed !== changeSpeed) {
    speed = changeSpeed

    setMusic(changeSpeed)
    autoFlip();
    t = setInterval("autoFlip()", speed);
  }
}

function stopFlip() {
  clearTimeout(t);
  speed = 0
  setMusic(0)
}

const flipSpeedChange = (event, newSpeed) => {
  switch (event) {
    // User is done changing speed, so let's stop the auto flip and restart with new speed
    case 'change':
      doAutoFlip(newSpeed)
    case 'input':
      // Here we just want to reflect the new speed back to the label while user is dragging the control
      document.getElementById('speed').innerText = newSpeed
  }
}

const setMusic = (newSpeed) => {
  if (newSpeed == 0) {
    document.getElementById('techno').pause()
    document.getElementById('classical').pause()
  } else if (newSpeed > TECHNO_SPEED) {
    document.getElementById('techno').play()
    document.getElementById('classical').pause()
  } else {
    document.getElementById('techno').pause()
    document.getElementById('classical').play()
  }
}