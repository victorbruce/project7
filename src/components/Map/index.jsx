import React from "react";
import MapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import restaurants from "../../shared/places.json";
import Location from "../../components/Icons/Location";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px",
};

class Map extends React.Component {
  state = {
    viewPort: {
      width: "100%",
      height: "100%",
      latitude: 55.657194,
      longitude: 12.605452,
      zoom: 10,
    },
    selectedPlace: null,
  };

  onViewportChange = (viewPort) => {
    this.setState({ viewPort });
  };
  render() {
    return (
      <div style={{ margin: "0 auto", height: "70vh" }}>
        <MapGL
          {...this.state.viewPort}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/dark-v8"
          onViewportChange={this.onViewportChange}
        >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          {restaurants.map((restaurant) => (
            <>
              <Marker
                key={restaurant.palce_id}
                latitude={restaurant.geometry.location.lat}
                longitude={restaurant.geometry.location.lng}
              >
                <button
                  style={{ margin: "10px" }}
                  onClick={() => this.setState({ selectedPlace: restaurant })}
                >
                  <Location
                    key={restaurant.palce_id}
                    onClick={(e) => {
                      console.log("clicked");
                    }}
                  />
                </button>
              </Marker>
              {this.state.selectedPlace ? (
                <Popup
                  longitude={this.state.selectedPlace.geometry.location.lng}
                  latitude={this.state.selectedPlace.geometry.location.lat}
                  closeButton={true}
                  closeOnClick={true}
                >
                  <h3>{this.state.selectedPlace.name}</h3>
                </Popup>
              ) : null}
            </>
          ))}
        </MapGL>
      </div>
    );
  }
}
export default Map;
