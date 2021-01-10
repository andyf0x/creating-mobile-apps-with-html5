'use strict'

const TECHNO_SPEED = 2

const light = []
const intervals = []
let myLatLong

light[0] = 'black'
light[1] = 'white'
light[2] = 'red'
light[3] = 'blue'
light[4] = 'green'
light[5] = 'orange'

// eslint-disable-next-line no-unused-vars
function flip (whichWay) {
  document.body.style.backgroundColor = light[whichWay]
  document.getElementById('color').innerText = light[whichWay]
  stopFlip()
}

function autoFlip () {
  let idx = light.indexOf(document.body.style.backgroundColor)

  if (idx === light.length - 1) {
    idx = -1
  }
  document.body.style.backgroundColor = light[idx + 1]
  document.getElementById('color').innerText = document.body.style.backgroundColor
}

function doAutoFlip (fps) {
  stopFlip()

  if (fps !== '0') {
    // Change speed is now frames / second, so calculate our MS interval
    const changeSpeed = 1000 / fps

    setMusic(fps)
    autoFlip()
    intervals.push(setInterval(autoFlip, changeSpeed))
  }
}

function stopFlip () {
  for (const interval of intervals) {
    clearTimeout(interval)
  }
  setMusic(0)
}

// eslint-disable-next-line no-unused-vars
function flipSpeedChange (event, newSpeed) {
  switch (event) {
    // User is done changing speed, so let's stop the auto flip and restart with new speed
    case 'change':
      doAutoFlip(newSpeed)
      break
    case 'input':
      // Here we just want to reflect the new speed back to the label while user is dragging the control
      document.getElementById('speed').innerText = newSpeed
  }
}

const setMusic = (newSpeed) => {
  if (newSpeed === 0) {
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

// eslint-disable-next-line no-unused-vars
const getLocation = () => navigator.geolocation.getCurrentPosition((position) => {
  myLatLong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
  dropPinOnMap()
})

const dropPinOnMap = async () => {
  const map = await window.getMap()

  // eslint-disable-next-line no-unused-vars
  const pin = new google.maps.Marker({
    position: myLatLong,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'You are here !!'
  })

  // Wait a few, then start zooming...
  await timeout(2000)
  zoomToLocation()
}

// eslint-disable-next-line no-unused-vars
const zoomToLocation = async () => {
  const map = await window.getMap()
  map.panTo(myLatLong)

  // Zoom in level by level. We have to control the view width, otherwise the
  // maps repeat.
  for (let zoom = map.getZoom() + 1; zoom <= 18; zoom++) {
    map.setZoom(zoom)
    const maxWidth = 256 * (2 ** zoom)
    document.getElementById('map-canvas').style.maxWidth = `${maxWidth}px`
    await timeout(750)
  }
}

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))
