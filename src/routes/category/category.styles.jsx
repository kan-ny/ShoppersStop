import styled from 'styled-components';

export const ProductContainer = styled.div` 
    display: grid;
    row-gap: 10px;
    column-gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 15px;
    @media (max-width:500px){
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 500px) and (max-width: 750px){
        grid-template-columns: repeat(2, 1fr);
    }
`

export const CategoryTitle = styled.h2`
    text-align: center;
    font-size: x-large;
`