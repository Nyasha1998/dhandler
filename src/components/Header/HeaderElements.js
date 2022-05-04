import styled from 'styled-components' 

export const Container = styled.div`
  flex: 1;
  align-self: flex-start;
  padding: 1rem rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #2337ED;

  font-size: 18px;
  text-decoration: none;
  color: #fff;

  &:hover {
      color: green;
      transition: 200ms ease-in;
  }

  width: 100%;

  @media (max-width: 1000px) {
      padding: 70px 30px;
  }
`

export const Logo = styled.div`
  border: 1px solid gray;
  padding: 0.5rem 1rem;
`

export const Items = styled.div`
  display: flex;
  list-style: none;
  
`

export const Home = styled.div`
  padding: 0 1rem;
  cursor: pointer;
`

export const Login = styled.div`
  padding: 0 1rem;
  cursor: pointer;
`

export const Logout = styled.div`
  padding: 0 1rem;
  cursor: pointer;
`