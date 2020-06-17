import styled from 'styled-components';

interface Props {
    error: boolean;
}

export const CategoryPreviewWrapper = styled.div`
    padding: 20px;
    border: 1px solid #28a745;
    background-color: #d6fbdf;
    max-width: 300px;
    min-width: 300px;
    margin: 0px 20px;
    position: relative;
    box-shadow: 1px 2px 2px rgba(0,0,0,.1);
`
export const CategoryPreviewStatus = styled<any>('div')`
    content: "CREATED";
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    background-color: ${(props: any) => props.error ? '#dc3545' : '#28a745'};
    font-weight: bold;
    color: ${(props: any) => props.error ? '#fff' : '#333'};
    padding: 4px 6px;
`