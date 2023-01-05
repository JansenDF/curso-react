import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { Abc } from "./templates/App/Abc";
import App from "./templates/App/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/abc" exact component={Abc}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
