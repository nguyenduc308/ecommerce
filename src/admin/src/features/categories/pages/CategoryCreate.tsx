import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCreateCategory } from 'shared/store/categories/categories.action';
import CategoryForm from '../components/CategoryForm';
import { FormInstance } from 'antd/lib/form';
// import CategoryPreview from '../components/CategoryPreview';
import { CategoryCreateWrapper } from '../components/CategoryCreate.styled';

const CategoryCreate: React.FC = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState({loading: false, error: ''});
    const [categoryPreview, setCategoryPreview] = useState<Category>({name: "Ex. New Fashion", slug: "Ex. new-fashion"});
    const [createdCategory, setCreateCategory] = useState<boolean>(false);
    let timer: any;

    const handleSubmit = (category: Category, form: FormInstance) => {
        console.log(category);
        setStatus({...status, loading: true})
        dispatch(fetchCreateCategory(category))
        .then(() => {
            setStatus({
                error: '',
                loading: false
            });
            setCreateCategory(true);
            form.resetFields();
        })
        .catch((error: any) => {
            setStatus({
                loading: false,
                error: error.response.data.message
            })
            timer = setTimeout(()=> {
                setStatus({
                    ...status,
                    error: ''
                })
            }, 5000)
        })
    }
    const getPreviewCategory = (values: any) => {
        setCreateCategory(false);
        setCategoryPreview(
            {...categoryPreview, 
                name: values.name,
                slug: values.slug
            });
    }
    useEffect(()=> {
        return () => {
            clearTimeout(timer)
        }
    })
    return (
        <CategoryCreateWrapper>
            <CategoryForm  
            handleSubmit={handleSubmit}
            label="Create Category"
            status={status}
            getPreviewCategory={getPreviewCategory}
            />
            {/* <CategoryPreview {...categoryPreview} created={createdCategory} status={status}/> */}
        </CategoryCreateWrapper>
    )
}

export default CategoryCreate
