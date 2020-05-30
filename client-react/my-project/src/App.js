import React from "react";
import { Switch, Route } from "react-router-dom";
import { routers } from "./router";
import PrivateRoute from "./router/PrivateRoute";
import { useSelector } from "react-redux";
import EditCategory from "./pages/Admin/Category/EditCategory";
import "./assets/scss/sb-admin-2.scss";
// import HomePage from "./pages/HomePage";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <div className="app">
      <Switch>
        {routers &&
          routers.map((route, index) => {
            if (route.private) {
              return (
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              );
            }
          })}
        {/* <Route
          exact
          path="/admin/category/edit/:slug"
          component={EditCategory}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
