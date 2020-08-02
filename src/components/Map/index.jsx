import React from "react";
import MapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import moment from "moment";
import StarRatings from "react-star-ratings";
import restaurants from "../../shared/places.json";
import Location from "../../components/Icons/Location";

const TOKEN = 'pk.eyJ1IjoidmljdG9yYnJ1Y2UiLCJhIjoiY2tiZjZ1dWpqMHNsZzMwcG0yd2l3cmpjdiJ9.aVSp1v_ucyTmqOcy-LSWNQ';

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
      <div style={{ margin: "0 auto", height: "700px" }}>
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
            <div key={restaurant.place_id}>
              <Marker
                latitude={restaurant.geometry.location.lat}
                longitude={restaurant.geometry.location.lng}
              >
                <button
                  style={{ margin: "10px" }}
                  onClick={() => this.setState({ selectedPlace: restaurant })}
                >
                  <Location
                    key={restaurant.place_id}
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
                  closeButton={false}
                  closeOnClick={true}
                >
                  <h3 className="mb-3">{this.state.selectedPlace.name}</h3>
                  <StarRatings
                    rating={this.state.selectedPlace.rating}
                    starRatedColor="gold"
                    starDimension="20px"
                    numberOfStars={5}
                    name="rating"
                  />
                  <div>
                    <h4 className="mt-5">Reviews</h4>
                    <ul className="list-group mt-3 mb-3">
                      {this.state.selectedPlace.reviews.map((review) => (
                        <li
                          className="list-group-item"
                          key={review.author_name}
                        >
                          <h5>
                            <b>{review.author_name}</b>
                          </h5>
                          <p>{review.text}</p>
                          <StarRatings
                            rating={review.rating}
                            starRatedColor="gold"
                            starDimension="20px"
                            numberOfStars={5}
                            name="rating"
                          />
                          <p>{moment(review.time).format("LL")}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Popup>
              ) : null}
            </div>
          ))}
        </MapGL>
      </div>
    );
  }
}
export default Map;
