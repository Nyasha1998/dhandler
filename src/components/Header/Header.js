import React from 'react'

import { Container,
     Logo,
      Items,
       Home,
        Login,
         Logout } from './HeaderElements'

const Header = () => {

 
  return (
    <>
     <Container>
         <Logo>DHandler</Logo>
         <Items>
             <Home>Home</Home>      
             <Login>Login</Login>
             <Logout>Logout</Logout>
         </Items>
     </Container>
    </>
  )
}

export default Header