import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Container>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Container>
  );
};
