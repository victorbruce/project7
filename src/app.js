import { marker, map } from "./mapBox";

async function getPlaces() {
  const res = await fetch("./places.json");
  const data = await res.json();
  return data;
}

const nearbyPlaces = document.getElementById("nearbyPlaces");

function displayNearbyPlaces() {
  getPlaces()
    .then((places) => {
      console.log(places);
      let ul = "<ul>";
      places.map((place) => {
        ul += '<li><a href="/">' + 
                '<p>' + place.restaurantName + '</p>' +
                '<p>' + place.address + '</p>'
              '</a></li>';
      });
      ul += "</ul>";
      nearbyPlaces.innerHTML = ul;
    })
    .catch((err) => console.error(err));
}

displayNearbyPlaces();
