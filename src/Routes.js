import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Calculator from "./views/pages/calculator";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Calculator} />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
