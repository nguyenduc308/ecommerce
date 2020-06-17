import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    margin-bottom: 20px;
    color: #fff;
    background-color: #000;
    display: flex;
    padding: 12px 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: 28px;
        color: #fff;
    }
    span {
        font-size: 18px;
        display: inline-block;
        padding: 6px 8px;
        cursor: pointer;
        &:hover {
            background-color: rgba(250,250,250, .5)
        }
    }
`