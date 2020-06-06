import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row, Col } from 'antd'

import { CategoriesList, CategoryDetail } from 'features/categories';
import { Header } from 'shared/components/Header';
import { Sidebar } from 'shared/components/Sidebar';

import 'antd/dist/antd.less';
const App: React.FC = () => {
  return(
  <Fragment>
    <Router>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <CategoriesList />
        </Col>
      </Row>
      
    </Router>
  </Fragment>)
}

export default App;
