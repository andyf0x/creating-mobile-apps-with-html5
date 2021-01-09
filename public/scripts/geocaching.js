const makeLink = (position) => {
  const lat = position.coords.latitude
  const long = position.coords.longitude
  document.location.href = `http://www.geocaching.com/seek/nearest.aspx?origin_lat=${lat}&origin_long=${long}&dist=100&submit3=Search`
}
function noLink () {
  window.alert('Location not found!')
}

navigator.geolocation.getCurrentPosition(makeLink, noLink)
