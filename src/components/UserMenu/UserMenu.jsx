import { UserMenuContainer } from './UserMenu.style';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
export const UserMenu = ({ user = 'Mike' }) => {
  return (
    <UserMenuContainer>
      <p>{`Wellcome ${user}`}</p>
      <Avatar />
      <Button variant="contained" component="span">
        Log out
      </Button>
    </UserMenuContainer>
  );
};
