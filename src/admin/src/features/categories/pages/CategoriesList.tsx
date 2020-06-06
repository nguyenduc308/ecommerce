import React, { Fragment, useEffect } from 'react';
import CategoryItem from '../components/CategoryItem';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import { List } from 'antd';

import { fetchCategories, fetchDeleteCategory } from 'shared/store/categories/categories.action';


const CategoriesList: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootStateOrAny) => state.categories.get('list').toJS());

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const deleteCategory = (slug: string) => {
      dispatch(fetchDeleteCategory(slug));
    }

    return (
        <Fragment>
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
        </Fragment>
    )
}
export default CategoriesList;