import React, { Fragment } from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';


const CategoryCreate: React.FC = () => {
    const [form] = Form.useForm();
    const validateMessages = {
        required: "'${name}' is required!",
      };
    const onFinish = (values:any) => {
        console.log(values)
    }
    return (
        <Fragment>
            <ConfigProvider form={{ validateMessages }}>
                <Form
                layout='inline'
                form={form}
                >
                    <Form.Item label="Name" rules={[{ required: true }]}>
                        <Input placeholder="input category name" />
                    </Form.Item>

                    <Button type="primary">Create Category</Button>
                </Form>
            </ConfigProvider>
        </Fragment>
    )
}

export default CategoryCreate
