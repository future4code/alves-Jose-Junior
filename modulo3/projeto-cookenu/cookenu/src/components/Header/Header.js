import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolbar } from './Styled';
import Button from '@mui/material/Button';


 const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
        <Button color="inherit">Cookenu</Button>
          <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Header