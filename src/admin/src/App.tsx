import React, { Fragment } from 'react';
import './features/products';
import { CategoriesList, CategoryDetail } from 'features/categories';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return(
  <Fragment>
    <Router>
      <CategoriesList />
      <CategoryDetail />
    </Router>
  </Fragment>)
}

export default App;
