import { UserMenuContainer } from './UserMenu.style';
import { Button } from '@mui/material';
export const UserMenu = ({ user = 'Mike' }) => {
  return (
    <UserMenuContainer>
      <p>{`Wellcome ${user}`}</p>
      <Button variant="contained" component="span">
        Log out
      </Button>
    </UserMenuContainer>
  );
};
