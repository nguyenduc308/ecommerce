import React, { Fragment } from 'react'

interface Props {
    category: Category
}

const CategoryItem: React.FC<Props> = ({category}) => {
    return (
        <Fragment>
            <p>{category.name}</p>
        </Fragment>
    )
}

export default CategoryItem;
