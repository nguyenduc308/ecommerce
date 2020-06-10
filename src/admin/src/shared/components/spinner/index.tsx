import React from 'react';
import './spinner.css';
import { SpinnerWrapper } from './Spinner.styled';

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <div className="lds-ripple"><div></div><div></div></div>
        </SpinnerWrapper>
    )
}

export default Spinner
