let lat
let long

// eslint-disable-next-line no-unused-vars
const mapClicked = () => {
  const url = `https://www.geocaching.com/map/#?ll=${lat},${long}`
  openLink(url)
}

// eslint-disable-next-line no-unused-vars
const listClicked = () => {
  const url = `https://www.geocaching.com/seek/nearest.aspx?origin_lat=${lat}&origin_long=${long}&dist=100&submit3=Search`
  openLink(url)
}

const openLink = (url) => {
  document.location.href = url
}

const makeLink = (position) => {
  lat = position.coords.latitude
  long = position.coords.longitude

  const nextInstruction = 'Now select List or Map button, and you will then be redirected to geocaching.com'

  document.getElementById('instruction').innerText = nextInstruction

  // Enable buttons now we have the location (to handle delay in retrieving location)
  document.getElementById('button-list').removeAttribute('disabled')
  document.getElementById('button-map').removeAttribute('disabled')
}

function noLink () {
  window.alert('Location not found!')
}

navigator.geolocation.getCurrentPosition(makeLink, noLink)
