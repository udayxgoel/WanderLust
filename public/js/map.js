maptilersdk.config.apiKey = mapAPI;
    const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which the SDK will render the map
    style: maptilersdk.MapStyle.BASIC,
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// Create the marker and set its location and popup
const marker = new maptilersdk.Marker({color: "#fe424d"}) // Set the color of the default marker
  .setLngLat(coordinates) // Set the coordinates for the marker
  .addTo(map); // Add the marker to the map 