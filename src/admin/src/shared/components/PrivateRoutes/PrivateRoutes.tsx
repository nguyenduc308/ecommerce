import React from 'react';
import { Redirect, Route } from 'react-router';
import { PATHS } from 'app-config';

export const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{pathname: PATHS.LOGIN}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
