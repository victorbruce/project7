import React from "react";
import { Switch, Route } from "react-router-dom";

import Places from "./containers/Places";
import Home from './containers/Home';

const App = () => {
  // const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   function getLocations() {
  //     if (localStorage.getItem("locations") === null) {
  //       localStorage.setItem("locations", JSON.stringify(data));
  //       setLocations({
  //         locations: JSON.parse(localStorage.getItem("locations")),
  //       });
  //     } else {
  //       setLocations(JSON.parse(localStorage.getItem("locations")));
  //     }
  //   }

  //   getLocations();
  // }, [setLocations]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/places"
        component={Places}
      />
    </Switch>
  );
};

export default App;
