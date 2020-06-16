import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd'
import { ToastContainer } from 'react-toastify';

import routes from './routes';
import { Header } from './shared/components/Header';
import { Sidebar } from './shared/components/Sidebar';
import { Auth } from './features/auth';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.less';
import 'react-toastify/dist/ReactToastify.css';
import localStorageService from './shared/services/localstorage-service/localstorage.service';
import { autoLogin, autoLogout } from './shared/store/auth/auth.action';
import { ContentWrapper } from 'shared/components/Content/Content.styled';
import { PrivateRoute } from 'shared/components/PrivateRoutes/PrivateRoutes';
// import Spinner from 'shared/components/spinner';

const App: React.FC = () => {
  let [isAuthenticated, setAuthenticate] = useState(false)
  const dispatch = useDispatch();
  const token = localStorageService.token;
  // const loading = useSelector((state: any) => state.app.get('loading'));

  useEffect(()=> {
    if(!!token) {
      setAuthenticate(true)
      dispatch(autoLogin);
    } else {
      setAuthenticate(false)
      dispatch(autoLogout);
    }
  }, [token]);

  return(
  <Fragment>
    <Router>
        <Header />
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col flex={1}>
            <ContentWrapper>
            <Switch>
                {routes.map((route, i) => {
                  if(route.private) {
                    return <PrivateRoute 
                              key={i}
                              component={route.component}
                              isAuthenticated={isAuthenticated} 
                              exact={route.exact}
                              />
                  } else {
                    return <Route 
                              key={i}
                              component={Auth}
                              exact={route.exact}  
                            />
                  }
                })}
            </Switch>
            </ContentWrapper>
          </Col>
        </Row> 
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
