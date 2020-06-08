import React, { Fragment } from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import { PATHS } from 'config';
import Login from './Login';
import Register from './Register';
import { AuthWrapper } from '../components/Auth.styled';

const Auth:React.FC = () => {
    const { url } = useRouteMatch();
    return (
        <Fragment>
            <AuthWrapper>
                <Switch>
                    <Redirect exact from={url} to={`${url}${PATHS.LOGIN}`} />
                    <Route path={`${url}${PATHS.LOGIN}`} component={Login} />
                    <Route path={`${url}${PATHS.REGISTER}`} component={Register} />
                </Switch>
            </AuthWrapper>
        </Fragment>
    )
}

export default Auth;
