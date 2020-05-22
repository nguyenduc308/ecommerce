import React from "react";
import SignIn from "./components/SignIn";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUpPage} />
        {/* <Route component={HomeError} /> */}
      </Switch>
    </div>
  );
}

export default App;
