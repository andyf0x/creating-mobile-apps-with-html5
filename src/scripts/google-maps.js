import { Loader } from '@googlemaps/js-api-loader'
import * as load from './loaders'

let map

const loader = new Loader({
  apiKey: load.map(0x1db),
  version: 'weekly'
  // id?: '' // SCRIPT TAG
  // libraries?: ['drawing', 'geometry', 'places', 'visualization']
  // language?: "LANGUAGE"
  // region?: "REGION"
  // mapIds?: string[]; You can add multiple Map IDs to your map using the map_ids in your bootstrap request.
  // url?: string;  Use a custom url and path to load the Google Maps API script.
  // nonce?: string;  Use a cryptographic nonce attribute.
  // retries?: number;  Number of script load retries.
})

loader
  .load()
  .then(() => {
    // JS API is loaded and available
    map = new window.google.maps.Map(document.getElementById('map-canvas'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 1
    })
  })
  .catch(err => {
    window.alert(`Error : ${err.constructor.name}\n\n${err.message}`)
    console.log(err)
  })

// Provide our map to others
const getMap = async () => map

export default getMap
