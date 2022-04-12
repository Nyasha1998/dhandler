import React from 'react'
import Register from '../../forms/Register/Register'
import Login from '../../forms/Login/Login'
import Logout from '../../forms/Logout/Logout'


import {
    Container,
    NavLink,
    NavBtn,
    NavBtn3
} from './HeaderElements.js'

const Header = () => {

 
  return (
    <>
     <Container>
         <NavLink to='/'>
             Home
         </NavLink>
         <NavBtn>
             <Login />
             <Logout />
             <NavBtn3>
                 <Register />    
             </NavBtn3>           
         </NavBtn>
     </Container>
    </>
  )
}

export default Header