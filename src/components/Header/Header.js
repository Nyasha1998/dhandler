import React from 'react'
import Signup from '../../forms/signup/Signup';
import Login from '../../forms/login/Login';

import { Container,
     Logo,
      Items,
       NavLink, } from './HeaderElements'

const Header = () => {

 
  return (
    <>
     <Container>
         <Logo>DHandler</Logo>
         <Items>
             <NavLink to='/' activeStyle>Home</NavLink>      
             <NavLink to='/login'><Login/></NavLink>
             <NavLink to='/signup'><Signup/></NavLink>
         </Items>
     </Container>
    </>
  )
}

export default Header