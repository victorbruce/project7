import React from "react";
import MapGL, { GeolocateControl } from "react-map-gl";

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
      latitude: 0,
      longitude: 0,
      zoom: 2,
    },
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
        </MapGL>
      </div>
    );
  }
}
export default Map;
