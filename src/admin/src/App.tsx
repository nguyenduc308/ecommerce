import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd'
import { ToastContainer } from 'react-toastify';

import routes from 'routes';
import { Header } from 'shared/components/Header';
import { Sidebar } from 'shared/components/Sidebar';
import { Auth } from 'features/auth';

import 'antd/dist/antd.less';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return(
  <Fragment>
    <Router>
      <div style={{display: 'none'}}>
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
                            component={route.component} 
                          />
                })}
            </Switch>
          </Col>
        </Row>   
      </div>
      <div>
          <Route path="/auth" component={Auth}/>
      </div>
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
  </Fragment>)
}

export default App;
