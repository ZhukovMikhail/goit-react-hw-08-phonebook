import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b4e62;
  transition: 800ms;
  :hover {
    text-decoration: underline;
    color: black;
  }
`;
