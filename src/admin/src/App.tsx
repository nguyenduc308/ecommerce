import React, { Fragment } from 'react';
import './features/products';
import { CategoriesList, CategoryDetail } from 'features/categories';

const App: React.FC = () => {
  return <Fragment>
    <CategoriesList />
    <CategoryDetail />
  </Fragment>
}

export default App;
