import styled from 'styled-components' 

export const Container = styled.div`
  flex: 1;
  align-self: flex-start;
  padding: 1rem rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #00888B;

  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #fff;

  
  width: 100%;

  @media (max-width: 1000px) {
      padding: 70px 30px;
  }
`;

export const Logo = styled.div`
  border: 1px solid gray;
  padding: 0.5rem 1rem;
`;

export const Items = styled.div`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.div`
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    color: green;
    transition: 200ms ease-in;
}
`;
