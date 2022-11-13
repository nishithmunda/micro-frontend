import React, { useState } from "react";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Navbar from "./components/Navigate/Navbar";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);
  
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/auth" component={AuthApp}>
            <AuthApp setSignIn={(e) => setIsSignIn(e)} />
          </Route>
          <Route path="/" component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
