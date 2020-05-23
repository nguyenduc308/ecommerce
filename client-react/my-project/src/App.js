import React from "react";
import { Switch, Route } from "react-router-dom";
import { routers } from "./router";
function App() {
  return (
    <div className="wrapper">
      <Switch>
        {routers &&
          routers.map((route, index) => {
            return (
              <Route key={index} exact={route.exact} path={route.path}>
                <route.component />
              </Route>
            );
          })}
      </Switch>
    </div>
  );
}

export default App;
