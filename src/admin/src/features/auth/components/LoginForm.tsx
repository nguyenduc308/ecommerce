import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

interface Props {
    handleLogin: (user: UserLogin) => void
}

const LoginForm:React.FC<Props> = ({handleLogin}) => {

    const onFinish = (values: any) => {
        handleLogin({email: values.email, password: values.password})
    }
    const onFinishFailed = (values: any) => {
        console.log(values)
    }
    return (
        <Form
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
        <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input type="email"/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
            Login
        </Button>
        </Form.Item>
    </Form>
    )
}

export default LoginForm
