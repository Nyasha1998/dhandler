import styled from 'styled-components'

export const SingleCard = styled.div`
  background-color: #00888B;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #ffffff;
  width: 200px;
  height: 200px;
  margin: 30px 25px 25px 25px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;

  @media screen and (max-width: 768px) {
      width: 150px;
      height: 150px;
      font-size: 12px;
  }
`;