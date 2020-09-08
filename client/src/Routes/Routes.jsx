import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";

import Add from "../Layout/Add/Add";
import Edit from "../Layout/Edit/Edit";

const Routes = () => {
  return (
    <Fragment>
       
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/add" component={ Add } exact />
          <Route path="/edit" component={ Edit } exact />
        </Switch>
      </Fragment>
  );
};

export default Routes;
