import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import "./index.css";
import { Abc } from "./templates/Abc/index";
import { App } from "./templates/App/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/abc/:slug?/:id?" exact component={Abc}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
