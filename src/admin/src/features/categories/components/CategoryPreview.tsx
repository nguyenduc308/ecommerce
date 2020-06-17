import React from 'react'
import { CategoryPreviewWrapper, CategoryPreviewStatus } from './CategoryPreview.styled'
interface Props {
    name: string;
    slug: string;
    created?: boolean;
    status?: any;
}

const CategoryPreview: React.FC<Props> = ({name, slug, created, status}) => {
    return (
        <CategoryPreviewWrapper>
            <p><strong>Name: </strong>{name && name}</p>
            <p><strong>Slug: </strong>{slug && slug}</p>
            {status.error && <p style={{color: 'red'}}>{status.error}</p>}
            {created && <CategoryPreviewStatus>CREATED</CategoryPreviewStatus>}
            {status.error && <CategoryPreviewStatus error={true}>ERROR</CategoryPreviewStatus>}
        </CategoryPreviewWrapper>
    )
}

export default CategoryPreview
