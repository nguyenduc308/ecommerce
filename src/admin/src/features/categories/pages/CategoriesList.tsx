import React, { Fragment, useEffect } from 'react';
import CategoryItem from '../components/CategoryItem';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import { List, Skeleton } from 'antd';

import { fetchCategories, fetchDeleteCategory } from 'shared/store/categories/categories.action';


const CategoriesList: React.FC<any | null | void> = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootStateOrAny) => state.categories.get('list').toJS());
    const loading = true
    // useSelector((state: any) => state.app.get('loading'));

    useEffect(() => {
        dispatch(fetchCategories());
        ;
    }, [dispatch]);

    const deleteCategory = (slug: string) => {
      dispatch(fetchDeleteCategory(slug));
    }

    return (
        <Fragment>
            <Skeleton active loading={loading} paragraph={{ rows: 4 }}>
                <List
                header={<h2>Categories List</h2>}
                bordered
                dataSource={categories}
                renderItem={(category:Category, index) => (
                    <List.Item>
                        <CategoryItem 
                        key={category._id} 
                        deleteCategory={deleteCategory} 
                        category= {category}
                        />
                    </List.Item>
                )}
                />
            </Skeleton>
        </Fragment>
    )
}
export default CategoriesList;