import React from "react";
import { Link } from "react-router-dom";

import AppLayout from "../../layouts/App";

const Home = () => {
  return (
    <div className="Home">
      <AppLayout>
        <div className="Home__inner">
          <div className="Home__content">
            <h1 className="Home__title">Find the best restaurant near you!</h1>
            <p className="Home__subtitle">
              Get all the reviews for restaurants around you and make the best
              choice!
            </p>
            <Link to="/places">Get Started</Link>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;
