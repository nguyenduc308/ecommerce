import React from 'react'
import { Form, Input, Button, ConfigProvider } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';

interface Props {
    status: {
        error?: string,
        loading?: boolean
    }
    label: string;
    handleSubmit: (category: Category, form: FormInstance) => void;
    getPreviewCategory: (values: Store) => void
}

const CategoryForm: React.FC<Props> = ({ label, handleSubmit, status, getPreviewCategory }) => {
    const [form] = Form.useForm();
    /*eslint-disable */
    const validateMessages = {
        required: "'${name}' is required!",
    };
    /*eslint-disable */
    const onFinish = (category: any) => {
        handleSubmit(category, form)
    }
    const onValuesChange = (changedValues: Store) => {
        getPreviewCategory(changedValues);
    }
    return (
        <ConfigProvider form={{ validateMessages }}>
            <Form
                layout='vertical'
                form={form}
                onFinish={onFinish}
                onValuesChange={onValuesChange}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true }]}>
                    <Input placeholder="Input category name" />
                </Form.Item>

                <Button 
                htmlType="submit" 
                type="primary" 
                style={{width: '300px'}}
                loading={status.loading}>{label}</Button>
            </Form>
        </ConfigProvider>
    )
}

export default CategoryForm
