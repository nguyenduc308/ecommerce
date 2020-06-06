import React, { Fragment } from 'react'
import Button from 'antd/lib/button';

interface Props {
    category: Category,
    deleteCategory: deleteCategory
}

const CategoryItem: React.FC<Props> = ({category, deleteCategory}) => {
    return (
        <Fragment>
            <p style={{marginRight: '30px'}}>{category.name}</p> 
            <Button 
            type="text" 
            danger
            onClick={() => deleteCategory(category.slug)}
            >
                Delete
            </Button>
        </Fragment>
    )
}

export default CategoryItem;
