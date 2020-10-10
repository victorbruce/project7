import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

import AddRestaurant from "../../components/AddRestaurant";

import Add from "../../components/Icons/Add";
import Minus from "../../components/Icons/Minus";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Restaurants = ({locations}) => {
  const [data, setData] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const toggleAddForm = () => {
    setIsAddFormOpen(!isAddFormOpen);
  };

  useEffect(() => {
    setData(locations)
  }, [locations]);

  return (
    <div className="Restaurants">
      <ul className="list-group">
        <li className="list-group-item active" style={headerStyle}>
          <h2>Places</h2>
          <span onClick={toggleAddForm}>
            {isAddFormOpen ? <Minus /> : <Add />}
          </span>
        </li>
        {isAddFormOpen && <AddRestaurant />}
        {(data && data.length > 0)`` ? data.map((place) => (
          <li className="list-group-item" key={place.place_id}>
            <p>
              <strong>{place.name}</strong>
            </p>
            <p>{place.vicinity}</p>

            <StarRatings
              rating={place.rating}
              starRatedColor="gold"
              starDimension="20px"
              numberOfStars={5}
              name="rating"
            />
          </li>
        )) : "No data"}
      </ul>
    </div>
  );
};

export default Restaurants;
