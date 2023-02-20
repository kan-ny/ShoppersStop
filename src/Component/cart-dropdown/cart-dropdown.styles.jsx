import styled from 'styled-components';
import { BaseButton, GoogleSign, Inverted } from '../button/button.styles'; 

export const CartDropdownContainer = styled.div` 
  position: absolute;
  width: 240px;
  // height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  ${ BaseButton },
  ${ GoogleSign },
  ${ Inverted } {
    margin-top: auto;
  }
`;


export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

 export const ItemContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  margin: 10px 0px 10px 0px;
`;

 export const ItemImg = styled.img`
    width: 30%;
  `;

 export const Details = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 20px;
`;

