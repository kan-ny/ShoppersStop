import styled from 'styled-components';

export const ProductContainer = styled.div` 
    display: grid;
    row-gap: 10px;
    column-gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 15px;
`

export const CategoryTitle = styled.h2`
    text-align: center;
    font-size: x-large;
`