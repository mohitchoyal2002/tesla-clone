import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { PropaneSharp } from '@mui/icons-material';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false)

  const handleAction = ()=>{
    if(burgerStatus){
      setBurgerStatus(false)
    }
    else{
      setBurgerStatus(true)
    }
  }

  return (
    <Container>
      <Logo>
        <a href="">
          <img src='/assets/logo.svg' alt="" />
        </a>
      </Logo>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={handleAction}/>
      </RightMenu>
      <BurgurNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={handleAction}/>
        </CloseWrapper>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-In</a></li>
        <li><a href="">Cyber Truck</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Charging Port</a></li>
      </BurgurNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left:0;
  right:0;
  padding: 0 20px;
  z-index:10;
`

const Logo = styled.div`
  margin-left: 10px;
`

const Menu = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-tranformation: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a{
    font-weight: 600;
    text-tranformation: uppercase;
    padding: 0 10px;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgurNav = styled.div`
  position: fixed;
  top: 0;
  right:0;
  bottom:0;
  background: #fff;
  color: #000;
  width: 300px;
  z-index: 100;
  text-align: start;
  padding: 20px;
  transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in;

  li{
    font-weight: 600;
    padding: 10px 0;
    margin: 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    list-style: none;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
  color: white;
`