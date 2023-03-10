
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationDiv = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  // .logo{
  //   height: fit-content;
  //   width: fit-content;
  //   background-image: url('../../assets/crown.svg');
  // }


  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }
`

export const RouterLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .nav-link {
    text-decoration: none;
    padding: 10px 15px;
    cursor: pointer;
  }
`