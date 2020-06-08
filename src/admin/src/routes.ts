
// import React from 'react';

import { PATHS } from 'config';
import { CategoriesList, CategoryCreate } from 'features/categories';
import { Home } from 'features/home';

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
    {
        path: PATHS.CATEGORIES_CREATE,
        exact: true,
        component: CategoryCreate
    },
]

export default routes;