import React, { Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

const SignIn = React.lazy(() => {
  return new Promise((resolve: any) =>
    setTimeout(() => {
      resolve(import("./components/SignIn"));
    }, 3000)
  );
});
export default ({ history, onSignIn }: Props) => {
  return (
    <div className="app">
      <Suspense fallback={<LoadingScreen />}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

interface Props {
  history: any;
  onSignIn: () => void;
}
