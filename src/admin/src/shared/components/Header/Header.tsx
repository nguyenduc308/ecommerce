import React from 'react';
import { HeaderWrapper } from './Header.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'shared/store/auth/auth.action';
import { storage } from 'shared/services/localstorage-service';
import { useHistory } from 'react-router';
import { PATHS } from 'app-config';
import logo from 'assets/logo.png';
import { LogoWrapper } from './Logo.styled';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = (): void => {
        storage.removeData();
        dispatch(logout());
        history.push(PATHS.AUTH)
    }
    return (
        <HeaderWrapper>
            <LogoWrapper    >
                <img src={logo} alt="logo"/>
                <h1>Ecommerce Admin</h1>
            </LogoWrapper>
            <span
            onClick={handleLogout}
            >Logout</span>
        </HeaderWrapper>
    )
}

export default Header
