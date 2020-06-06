import React, { Fragment } from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchCreateCategory } from 'shared/store/categories/categories.action';


const CategoryCreate: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    /*eslint-disable */
    const validateMessages = {
        required: "'${name}' is required!",
      };
    /*eslint-disable */
    const onFinish = (values:any) => {
        dispatch(fetchCreateCategory(values))
        form.resetFields();
    }
    return (
        <Fragment>
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

                    <Button htmlType="submit" type="primary">Create Category</Button>
                </Form>
            </ConfigProvider>
        </Fragment>
    )
}

export default CategoryCreate
