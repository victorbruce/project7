import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

const Restaurants = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    function getData() {
      if (localStorage.getItem("locations")) {
        setData(JSON.parse(localStorage.getItem("locations")));
      }
    }

    getData();
  }, []);

  return (
    <div className="Restaurants">
      <ul className="list-group">
        <li className="list-group-item active">
          <h2>Places</h2>
        </li>
        {data.map((place) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
