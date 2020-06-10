import React from 'react'
import { Form, Input, Button, ConfigProvider, Alert } from 'antd';
import { FormInstance } from 'antd/lib/form';

interface Props {
    status: {
        error?: string,
        loadding?: boolean
    }
    label: string;
    handleSubmit: (category: Category, form :FormInstance) => void
}

const CategoryForm: React.FC<Props> = ({ label, handleSubmit, status }) => {
    const [form] = Form.useForm();
     /*eslint-disable */
     const validateMessages = {
        required: "'${name}' is required!",
      };
    /*eslint-disable */
    const onFinish = (category:any) => {
        handleSubmit(category, form)
    }
    return (
        <ConfigProvider form={{ validateMessages }}>
               <Form
                layout='inline'
                form={form}
                onFinish={onFinish}
                >
                    <Form.Item 
                    label="Name" 
                    name="name"
                    rules={[{ required: true }]}>
                        <Input placeholder="input category name" />
                    </Form.Item>

                <Button htmlType="submit" type="primary" loading={status.loadding}>{label}</Button>
                </Form>
                {status.error && <Alert message={status.error} type="error" style={{marginTop: '20px'}}/>}
        </ConfigProvider>
            )
}

export default CategoryForm
