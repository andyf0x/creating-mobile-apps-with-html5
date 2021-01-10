let map

// Create the script tag dynamically, set the appropriate attributes
const script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE'
script.defer = true
// https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY
// &callback=FUNCTION_NAME
// &v=VERSION
// &libraries="LIBRARIES"
// &language="LANGUAGE"
// &region="REGION"

// Attach your callback function to the `window` object
window.initMap = () => {
  // JS API is loaded and available
  const myOptions = {
    zoom: 1,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions)
}

// Append the 'script' element to 'head'
document.head.appendChild(script)

// Provide our map to others
window.getMap = async () => map
