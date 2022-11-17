import React, { Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import ConstructionScreen from "./components/LoadingScreen/ConstructionScreen";
const HomeScreen = React.lazy(() => {
  return new Promise((resolve: any) =>
    setTimeout(() => {
      resolve(import("./components/HomeScreen"));
    }, 3000)
  );
});

const VideoScreen = React.lazy(() => {
  return import("./components/VideoScreen");
});

export default ({ history }: Props) => {
  return (
    <div className="app">
      <StylesProvider>
        <Suspense fallback={<LoadingScreen />}>
          <Router history={history}>
            <Switch>
              <Route path="/playing/music" component={ConstructionScreen} />
              <Route path="/playing/:movieId" component={VideoScreen} />
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
