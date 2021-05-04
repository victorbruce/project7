import React, { Component } from "react";

class AddRestaurant extends Component {
  state = {
    name: "",
    vicinity: "",
    lng: "",
    lat: "",
    rating: 0,
    reviews: [],
  };

  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { name, vicinity, lat, lng, rating } = this.state;

    const locations = JSON.parse(localStorage.getItem("locations"));

    const restaurant = {
      id: locations.length + 1,
      place_id: locations.length + 1,
      name,
      vicinity,
      geometry: {
        location: {
          lat: parseFloat(lat).toFixed(6),
          lng: parseFloat(lng).toFixed(6),
        },
      },
      rating: parseFloat(rating),
    };

    locations.push(restaurant);

    localStorage.setItem("locations", JSON.stringify(locations));
  };

  render() {
    const { name, vicinity, lng, lat } = this.state;
    return (
      <div className="Add_Restaurant">
        <div className="row py-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Restaurant Name*:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vicinity">Vicinity*:</label>
              <input
                type="text"
                className="form-control"
                name="vicinity"
                value={vicinity}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lng">Longitude*:</label>
              <input
                type="text"
                className="form-control"
                name="lng"
                value={lng}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lat">Latitude*:</label>
              <input
                type="text"
                className="form-control"
                name="lat"
                value={lat}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Ratings</label>
              <select
                className="form-control"
                name="rating"
                onChange={this.handleInputChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddRestaurant;
