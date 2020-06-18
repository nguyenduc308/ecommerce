import React, { useState } from 'react'
import { Form, Input, Button, ConfigProvider } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';
import { EditOutlined } from '@ant-design/icons';
import { CategoryFormWrapper } from './CategoryForm.styled';
import slugify from 'slugify';
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
    const [activeInputSlug, setActiveInputSlug] = useState(false);
    const [slug, setSlug] = useState('');
    /*eslint-disable */
    const validateMessages = {
        required: "'${name}' is required!",
    };
    /*eslint-disable */
    const onFinish = (category: any) => {
        handleSubmit(category, form)
    }
    const onValuesChange = (changedValues: Store) => {
        let slug = slugify(changedValues.name).toLowerCase();
        setSlug(slug);
        form.setFieldsValue({
            ['slug']: slug
        })

        // getPreviewCategory({
        //     name: changedValues.name,
        //     slug: slug
        // });
    }

    return (
        <ConfigProvider form={{ validateMessages }}>
            <CategoryFormWrapper>
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
                    <Form.Item 
                    name="slug">
                        <Input
                        disabled={!activeInputSlug}
                        placeholder="Input category slug"
                        />
                        <EditOutlined 
                        onClick={()=>setActiveInputSlug(!activeInputSlug)}
                        />
                    </Form.Item>
                    <Button 
                    htmlType="submit" 
                    type="primary" 
                    style={{width: '300px'}}
                    loading={status.loading}>{label}</Button>
                </Form>
            </CategoryFormWrapper>
        </ConfigProvider>
    )
}

export default CategoryForm
