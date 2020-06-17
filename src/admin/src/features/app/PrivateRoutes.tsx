import React from 'react';
import { Redirect, Route } from 'react-router';
import { PATHS } from 'app-config';
import AppPrivateLayout from './AppPrivateLayout';

export const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? <AppPrivateLayout component={component} {...rest} />
            : <Redirect to={{pathname: PATHS.AUTH}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
