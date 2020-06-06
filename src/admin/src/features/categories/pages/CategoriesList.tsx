import React, { Fragment, useEffect } from 'react'
import CategoryItem from '../components/CategoryItem';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCategories } from 'shared/store/categories/categories.action';


const CategoriesList: React.FC = () => {
    const dispatch = useDispatch();
    const locattion = useLocation();
    const categories = useSelector((state: RootStateOrAny) => state.categories.list);
    console.log("categories",categories)
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch, locattion]);

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