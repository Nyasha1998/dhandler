import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.25rem;
  height: 80px;
  flex-wrap: nowrap;
  z-index: 10;
  border-style: inset;
  border-color: black;
`

export const NavLink = styled(Link)`
  display: block;
  display: inline;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
      color: black;
  }
`
export const NavBtn = styled.div`
  
`

export const NavBtn3 = styled.div`
  @media screen and (max-width: 760px) {
      display: none;
  }
`