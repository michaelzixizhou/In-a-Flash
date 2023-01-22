import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import logo from "./hello_extensions.png";
const NavbarWrapper = styled.div`
  width: 100%;
  height: 5.5rem;
  background: #fff;
  z-index: 15;
  position: fixed;	
  left: 0;
  top: 0;
  padding: 0 10vw;
  box-shadow: 0 0 10px 2px rgba(0, 0, 3, 0.2);
`;

const NavbarComponent = styled.span`
  position: fixed;
  margin-top: 0.4vw;
  top: 0;
  right: 0;
  margin-right: 7vw;
  display: flex;
  gap: 5vw;
  @media (max-width: 750px) {
    display: none;
  }
`;

const NavTitle = styled.h1`
  color: #4169e1;
  text-decoration: none;
  transition: all 0.1s ease-out;
  position: fixed;
  margin-top: 1.5rem;
  left: 100px;
`;

const NavFont = styled.h2`
  display: inline-block;
  color: #777;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.1s ease-out;
  &:hover {
    color: #4169e1;
    transition: all 0.1s ease-out;
    transform: scale(1.05);
  }
`;

const BurgerbarWrapper = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  margin-top: 1.0rem;
  margin-right: 2.0rem;
  @media (min-width: 750px) {
    display: none;
  }
`;

const WhiteLine = styled.span`
  display: flex;
  width: 3rem;
  height: 0.6rem;
  margin: 0.5rem 0;
  border-radius: 3px;
  position: relative;
  background: #fff;
  z-index: 100;
  cursor: pointer;
`;

const Logo = styled.div`
  display: inline-block;
  position: fixed;
  left: 30px;
  top: 20px;
`

const Navbar = () => {
  return (
      <>
      <NavbarWrapper>
        <Logo>
          <img src={logo}></img>
        </Logo>
          <NavTitle>In A Flash</NavTitle>
          <NavbarComponent>
            <NavLink title="home" to="/" style={{textDecoration: 'none'}}><NavFont>Home</NavFont></NavLink>
            <NavLink title="account" to="account" style={{textDecoration: 'none'}}><NavFont>Account</NavFont></NavLink>
          </NavbarComponent>
          <BurgerbarWrapper>
            <WhiteLine/>
            <WhiteLine/>
            <WhiteLine/>
          </BurgerbarWrapper>
        </NavbarWrapper>
      </>
    );
}

export default Navbar;