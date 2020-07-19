import React, { useEffect } from "react";
import { Switch, Route } from 'react-router-dom';

import data from './shared/places.json';

import Home from "./containers/Home";

const App = () => {
  useEffect(() => {
    function getLocations() {
      if (localStorage.getItem('locations') === null) {
        localStorage.setItem("locations", JSON.stringify(data))
      }
    }

    getLocations();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
