import React, { Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";

const SignIn = React.lazy(() => {
  return new Promise((resolve: any) =>
    setTimeout(() => {
      resolve(import("./components/SignIn"));
    }, 3000)
  );
});
export default ({ history, onSignIn }: Props) => {
  console.log("Here auth")
  return (
    <div className="app">
      <Suspense fallback={<div>loading</div>}>
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
