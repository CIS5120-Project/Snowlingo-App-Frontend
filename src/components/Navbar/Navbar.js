import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import DropdownMenu from "../DropdownMenu/DropdownMenu"

function Navbar (){
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ width: '100%', padding: '0 1rem' }} sx={{ backgroundColor: theme.palette.primary.dark }}>
      <Toolbar>
        {/* Burger Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Spacer to push icons to the right */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

        {/* Help Icon */}
        <IconButton
          color="inherit"
          aria-label="help"
        >
          <HelpIcon />
        </IconButton>

        {/* Home Icon */}
        <IconButton
          color="inherit"
          aria-label="home"
          onClick = { () => navigate("/home") }
        >
          <HomeIcon />
        </IconButton>
      </Toolbar>
      <DropdownMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      />
    </AppBar>
  );
};

export default Navbar;
