import styled from '@emotion/styled';
import { Button } from '@mui/material';
import {
  //   mainColor,
  //   secondColor,
  //   bgColor,
  buttonColor,
} from 'components/AppMainStyled.styled';

export const PhoneBookHeader = styled.h1`
  margin-bottom: 20px;
`;
export const PhoneBookBox = styled.div`
  margin-bottom: 20px;
`;
export const StyledButton = styled(Button)`
  background-color: ${buttonColor};
`;
