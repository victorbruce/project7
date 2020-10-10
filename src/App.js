import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import data from "./shared/places.json";

import Home from "./containers/Home";

const App = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_NAME)
    function getLocations() {
      if (localStorage.getItem("locations") === null) {
        localStorage.setItem("locations", JSON.stringify(data));
        setLocations({
          locations: JSON.parse(localStorage.getItem("locations")),
        });
      } else {
        setLocations(JSON.parse(localStorage.getItem("locations")));
      }
    }

    getLocations();
  }, [setLocations]);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Home locations={locations} />}
      />
    </Switch>
  );
};

export default App;
