import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import routes from './routes';
import { Auth } from './features/auth';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.less';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from './shared/services/localstorage-service';
import { autoLogin, autoLogout } from './shared/store/auth/auth.action';
import { PrivateRoute } from 'features/app/PrivateRoutes';
import { NotFound } from 'features/not-found';
// import Spinner from 'shared/components/spinner';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const token = storage.token;
  let isAuthenticated =  useSelector((state:any) => state.auth.isAuthenticated);;
  useEffect(()=> {
    if(!!token) {
      dispatch(autoLogin());
    } else {
      dispatch(autoLogout());
    }
  }, [token, dispatch]);

  return(
  <Fragment>
    <Router>
      <Switch>
          {routes.map((route, i) => {
              if (route.private) {
                  return <PrivateRoute
                          key={i}
                          path={route.path}
                          component={route.component}
                          isAuthenticated={isAuthenticated}
                          exact={route.exact}
                          />
              } else {
                  return <Route
                          key={i}
                          path={route.path}
                          component={Auth}
                          exact={route.exact}
                          />
              }
          })}
          <Route path="" component={NotFound} />
      </Switch>
    </Router>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Fragment>
  )
}

export default App;
