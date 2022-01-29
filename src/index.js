import React from "react";
import ReactDom from "react-dom"
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import './assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from "./views/LandingPage";


ReactDom.render(
    <BrowserRouter>
      <Switch>
        <Route
            path="/home"
            render={() => <LandingPage />}
        />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
