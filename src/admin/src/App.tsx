import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Row, Col } from 'antd'
import { ToastContainer } from 'react-toastify';

import routes from 'routes';
import { Header } from 'shared/components/Header';
import { Sidebar } from 'shared/components/Sidebar';
import { Auth } from 'features/auth';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.less';
import 'react-toastify/dist/ReactToastify.css';
import localstorageService from 'shared/helpers/localstorage-service/localstorage.service';
import { autoLogin, autoLogout } from 'shared/store/auth/auth.action';
// import Spinner from 'shared/components/spinner';

const App: React.FC = () => {
  let [isAuthenticated, setAuthenticate] = useState(false)
  const dispatch = useDispatch();
  const token = localstorageService.token;
  // const loading = useSelector((state: any) => state.app.get('loading'));

  useEffect(()=> {
    if(!!token) {
      setAuthenticate(true)
      dispatch(autoLogin);
    } else {
      setAuthenticate(false)
      dispatch(autoLogout);
    }
  }, [token])
  return(
  <Fragment>
    <Router>
      {!isAuthenticated  && <Redirect to='/auth/login' />}
      {isAuthenticated && <div>
        <Header />
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <Switch>
                {routes.map((route, i) => {
                  return <Route 
                  key={i} 
                  path={route.path} 
                  exact={route.exact} 
                  render={props => {
                    return !isAuthenticated  ? (<Redirect to='/login' />) : (<route.component {...props} />)}
                  }
                  />
                })}
                <Redirect exact from='/login' to='/auth/login' />
            </Switch>
          </Col>
        </Row>   
      </div>}
      {!isAuthenticated && <div>
          <Route path="/auth" component={Auth}/>
      </div>}
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
    {/* {loading && <Spinner /> } */}
  </Fragment>)
}

export default App;
