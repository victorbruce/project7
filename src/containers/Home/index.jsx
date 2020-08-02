import React from "react";

import AppLayout from "../../layouts/App";
import Restaurants from "../Restaurants";
import Map from "../../components/Map";

const Home = ({locations}) => {
  return (
    <AppLayout>
      <div className="Home">
        <div className="row">
          <div className="col-md-8">
            <Map />
          </div>
          <div className="col-md-4">
            <Restaurants locations={locations} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
