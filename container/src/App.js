import React, { useState } from "react";
import VideoApp from "./components/VideoApp";
import AuthApp from "./components/AuthApp";
import Navbar from "./components/Navigate/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Sidebar />
        <Switch>
          <Route path="/auth" component={AuthApp}>
            <AuthApp setSignIn={(e) => setIsSignIn(e)} />
          </Route>
          <Route path="/" component={VideoApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
