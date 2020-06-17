import React from 'react'
import Typography from 'antd/lib/typography';
import Title from 'antd/lib/typography/Title';
import { useNotAuth } from 'shared/hooks';

const Register: React.FC = () => {
    useNotAuth();
    return (
        <div>
            <Typography>   
                <Title level={3} style={{textAlign: 'center'}}>
                    Opps, We dont support right now !
                </Title>
            </Typography>
        </div>
    )
}

export default Register;
