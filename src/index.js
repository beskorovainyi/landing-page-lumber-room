import React from "react";
import ReactDom from "react-dom"
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

import LandingPage from "./views/LandingPage";


const SayName = () => {
  return (
      <>
        <p>hey</p>
      </>
  )
}

ReactDom.render(
    <BrowserRouter>
      <Switch>
        <Route
            path="/home"
            render={(props) => <LandingPage {...props} />}
        />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
