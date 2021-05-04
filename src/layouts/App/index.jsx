import React from "react";
import { Link } from "react-router-dom";

const AppLayout = (props) => {
  return (
    <div className="AppLayout">
      <div className="AppLayout__header">
        <nav>
          <Link to="/">Restaurant View</Link>
        </nav>
      </div>
      <div className="AppLayout__body">{props.children}</div>
    </div>
  );
};

export default AppLayout;
