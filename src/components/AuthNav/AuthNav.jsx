// import { Link } from 'react-router-dom';
import { StyledLink } from 'GlobalStyles.styled';
// import { Link } from '@mui/material';
import { AuthContainer } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthContainer>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthContainer>
  );
};
