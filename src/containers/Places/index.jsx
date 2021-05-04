import React from "react";

import AppLayout from "../../layouts/App";
import Restaurants from "../Restaurants";
import Map from "../../components/Map";

const Places = ({ locations }) => {
  return (
    <AppLayout>
      <div className="Places">
        <div className="Places__inner">
          <Map />
          <Restaurants />
        </div>
      </div>
    </AppLayout>
  );
};

export default Places;
