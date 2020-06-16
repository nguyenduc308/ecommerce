import React, { Fragment } from 'react'
import { Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useDispatch } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { fetchLogin } from 'shared/store/auth/auth.action';



const Login: React.FC = () => {

    const dispatch = useDispatch();
    const handleLogin = (user: UserLogin) => {
        dispatch(fetchLogin(user))
            .then(() => {
                window.location.replace('/')
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
