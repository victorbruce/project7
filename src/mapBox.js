import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoidmljdG9yYnJ1Y2UiLCJhIjoiY2tiZjZ1dWpqMHNsZzMwcG0yd2l3cmpjdiJ9.aVSp1v_ucyTmqOcy-LSWNQ';

let map = new mapboxgl.Map({
  container: 'mapBox',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [12.550343, 55.665957],
  zoom: 8,
});

let marker = new mapboxgl.Marker()
.setLngLat([12.550343, 55.665957])
.addTo(map);



export default {
  marker,
  map
}