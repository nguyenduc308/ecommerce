import React, { Fragment, useEffect } from 'react';
import CategoryItem from '../components/CategoryItem';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchCategories } from 'shared/store/categories/categories.action';


const CategoriesList: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootStateOrAny) => state.categories.get('list').toJS());

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <Fragment>
            {
                categories && categories.map((category: Category) => {
                    return <CategoryItem key={category._id} category= {category}/>
                })
            }
        </Fragment>
    )
}
export default CategoriesList;