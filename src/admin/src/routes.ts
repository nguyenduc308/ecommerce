
// import React from 'react';

import { PATHS } from './app-config';
import { CategoriesList, CategoryCreate } from './features/categories';
import { Home } from './features/home';
import { Auth } from 'features/auth';

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
    private: boolean;
}

const routes: IProps[] = [
    {
        path: PATHS.HOMEPAGE,
        exact: true,
        private: true,
        component: Home
    },
    {
        path: PATHS.CATEGORIES,
        exact: false,
        private: true,
        component: CategoriesList
    },
    {
        path: PATHS.CATEGORIES_CREATE,
        private: true,
        exact: false,
        component: CategoryCreate
    },
    {
        path: PATHS.AUTH,
        private: false,
        exact: false,
        component: Auth
    },
]

export default routes;