import React from 'react'
import Typography from 'antd/lib/typography';
import Title from 'antd/lib/typography/Title';

const Register: React.FC = () => {
    console.log("call res")
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
