import React, { Fragment } from 'react'
import { Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useDispatch } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { fetchLogin } from 'shared/store/auth/auth.action';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'app-config';
import { useNotAuth } from 'shared/hooks';



const Login: React.FC = () => {
    useNotAuth();
    const history = useHistory()
    const dispatch = useDispatch();
    const handleLogin = (user: UserLogin) => {
        dispatch(fetchLogin(user))
            .then(() => {
                history.push(PATHS.HOMEPAGE)
            })
            .catch((error:any) => {
                console.log(error)
            })
    }
    return(
    <Fragment>
        <Typography>   
            <Title level={2} style={{textAlign: 'center'}}>Login</Title>
        </Typography>
        <LoginForm handleLogin={handleLogin}/>
    </Fragment>
    )
}

export default Login;
