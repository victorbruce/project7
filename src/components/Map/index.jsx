import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import * as restaurantData from "../../shared/places.json";

import markerImg from "../../assets/marker.png";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 13,
    longitude: -79.4512,
    latitude: 43.6568,
  });
  return (
    <div className="Map">
      <ReactMapGl
        mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        {...viewport}
      >
        {/* {console.log('Heyekdldl!!!! ',JSON.stringify(restaurantData.default.features))}  */}
        {restaurantData.default.features.map((restaurant) => (
          <Marker
            key={restaurant.properties.address}
            latitude={restaurant.geometry.coordinates[1]}
            longitude={restaurant.geometry.coordinates[0]}
          >
            <button className="Map__marker-img">
              <img src={markerImg} alt="marker" />
            </button>
          </Marker>
        ))}
      </ReactMapGl>
    </div>
  );
};

export default Map;
