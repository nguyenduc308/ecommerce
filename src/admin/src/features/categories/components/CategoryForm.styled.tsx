import styled from 'styled-components';

export const CategoryFormWrapper = styled.div`
    .ant-form-item-control-input-content {
        display: flex;
        .anticon.anticon-edit {
            display: flex;
            align-items: center;
            padding: 0 10px;
            margin-left: 6px;
            background-color: rgba(0,0,0,.2);
            cursor: pointer;
            &:hover {
                background-color: rgba(0,0,0,.4);
            }
        }
    }
`