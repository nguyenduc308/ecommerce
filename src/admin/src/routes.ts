
// import React from 'react';

import { PATHS } from 'config';
import { CategoriesList } from 'features/categories';
import { Home } from 'features/Home';

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
  }

const routes: IProps[]  = [
    {
        path: PATHS.HOMEPAGE,
        exact: true,
        component: Home
    },
    {
        path: PATHS.CATEGORIES,
        exact: true,
        component: CategoriesList
    },
]

export default routes;