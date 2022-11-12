import React, { Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import LoadingScreen from "./components/LoadingScreen";
const Pricing = React.lazy(() => import("./components/Pricing"));
const HomeScreen = React.lazy(() => {
  return new Promise((resolve: any) =>
    setTimeout(() => {
      resolve(import("./components/HomeScreen"));
    }, 3000)
  );
});
export default ({ history }: Props) => {
  return (
    <div className="app">
      <StylesProvider>
        <Suspense fallback={<LoadingScreen />}>
          <Router history={history}>
            <Switch>
              <Route path="/playing" component={VideoPlayer} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </Router>
        </Suspense>
      </StylesProvider>
    </div>
  );
};

interface Props {
  history: any;
}
