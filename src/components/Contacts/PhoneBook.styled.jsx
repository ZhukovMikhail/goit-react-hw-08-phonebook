import styled from '@emotion/styled';
// import { Contacts } from './components/Contacts/Contacts';
import {
  mainColor,
  secondColor,
  bgColor,
  buttonColor,
} from 'components/AppMainStyled.styled';
export const Container = styled.div`
  width: 100vw;
  padding-bottom: 2vh;
  padding-top: 2vh;
  margin: 0 auto;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #7e129f92; */
  background-color: ${bgColor};
  color: white;
  height: 100vh;
`;
