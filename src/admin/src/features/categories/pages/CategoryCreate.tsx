import React, { Fragment, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCreateCategory } from 'shared/store/categories/categories.action';
import CategoryForm from '../components/CategoryForm';
import { FormInstance } from 'antd/lib/form';

const CategoryCreate: React.FC = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState({loading: false, error: ''});
    let timer: any;

    const handleSubmit = (category: Category, form: FormInstance) => {
        setStatus({...status, loading: true})
        dispatch(fetchCreateCategory(category))
        .then(() => {
            setStatus({
                error: '',
                loading: false
            });
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
            }, 3000)
        })
    }
    useEffect(()=> {
        return () => {
            clearTimeout(timer)
        }
    })
    return (
        <Fragment>
            <CategoryForm  
            handleSubmit={handleSubmit}
            label="Create Category"
            status={status}
            />
        </Fragment>
    )
}

export default CategoryCreate
